#!/usr/bin/env python3
"""
Generate Moova brand assets (icon, splash, favicon, android icons).

Design: "Moova" in Orbitron font with neon cyan-to-green glow on dark #0D0D12 background.
Small motion-lines accent. No stick figure/mascot.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops
import math
import os

FONT_PATH = "/tmp/Orbitron-Variable.ttf"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "assets", "images")

DARK_BG = (13, 13, 18)
CYAN = (0, 190, 220)
GREEN = (75, 210, 130)
WHITE = (255, 255, 255)

GRAD_TOP = (0, 173, 239)       # #00ADEF
GRAD_BOTTOM = (123, 228, 149)  # #7BE495


def orbitron(size: int, weight: int = 700) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(FONT_PATH, size)
    f.set_variation_by_axes([weight])
    return f


def lerp_color(c1, c2, t):
    return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))


def vertical_gradient(size, top_color, bottom_color):
    img = Image.new("RGB", size)
    for y in range(size[1]):
        t = y / max(size[1] - 1, 1)
        color = lerp_color(top_color, bottom_color, t)
        for x in range(size[0]):
            img.putpixel((x, y), color)
    return img


def vertical_gradient_fast(size, top_color, bottom_color):
    w, h = size
    img = Image.new("RGB", (1, h))
    for y in range(h):
        t = y / max(h - 1, 1)
        img.putpixel((0, y), lerp_color(top_color, bottom_color, t))
    return img.resize(size, Image.NEAREST)


def create_gradient_text(text, font, size, color_top, color_bottom, glow_radius=0):
    """Render text with a vertical gradient fill and optional glow."""
    bbox = font.getbbox(text)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pad = glow_radius * 4
    canvas_w, canvas_h = tw + pad * 2, th + pad * 2

    mask = Image.new("L", (canvas_w, canvas_h), 0)
    draw = ImageDraw.Draw(mask)
    draw.text((pad - bbox[0], pad - bbox[1]), text, fill=255, font=font)

    grad = vertical_gradient_fast((canvas_w, canvas_h), color_top, color_bottom)
    text_img = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    grad_rgba = grad.convert("RGBA")
    text_img = Image.composite(grad_rgba, text_img, mask)

    if glow_radius > 0:
        glow_mask = mask.filter(ImageFilter.GaussianBlur(glow_radius))
        glow_color_mid = lerp_color(color_top, color_bottom, 0.4)
        glow_layer = Image.new("RGBA", (canvas_w, canvas_h), (*glow_color_mid, 0))
        glow_alpha = glow_mask.point(lambda p: min(int(p * 0.5), 255))
        glow_layer.putalpha(glow_alpha)
        result = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
        result = Image.alpha_composite(result, glow_layer)
        result = Image.alpha_composite(result, text_img)
        return result, pad
    return text_img, pad


def draw_motion_lines(img, cx, cy, scale=1.0, color=None, alpha=180):
    """Draw three small horizontal motion lines to the left of center."""
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    line_w = int(28 * scale)
    line_h = max(int(4 * scale), 2)
    gap = int(14 * scale)
    offset_x = int(-10 * scale)

    c = color or lerp_color(CYAN, GREEN, 0.3)

    for i, length_mult in enumerate([0.65, 1.0, 0.8]):
        y = cy + (i - 1) * gap
        w = int(line_w * length_mult)
        x_start = cx + offset_x - w
        x_end = cx + offset_x

        for dx in range(w):
            t = dx / max(w - 1, 1)
            a = int(alpha * t)
            col = (*c, a)
            draw.rectangle([x_start + dx, y - line_h // 2, x_start + dx, y + line_h // 2], fill=col)

    return Image.alpha_composite(img.convert("RGBA"), overlay)


# ---------------------------------------------------------------------------
# ICON (1024x1024) — Dark bg, large "M" with gradient + glow + motion lines
# ---------------------------------------------------------------------------
def generate_icon():
    size = 1024
    img = Image.new("RGBA", (size, size), (*DARK_BG, 255))

    font = orbitron(520, weight=800)
    text = "M"

    text_img, pad = create_gradient_text(text, font, (size, size), CYAN, GREEN, glow_radius=25)
    tw, th = text_img.size

    x = (size - tw) // 2
    y = (size - th) // 2 - int(size * 0.02)
    img.paste(text_img, (x, y), text_img)

    bbox = font.getbbox(text)
    text_actual_w = bbox[2] - bbox[0]
    text_actual_h = bbox[3] - bbox[1]
    m_center_x = x + pad + text_actual_w // 2
    m_center_y = y + pad + text_actual_h // 2

    img = draw_motion_lines(
        img,
        cx=m_center_x - text_actual_w // 2 - int(20),
        cy=m_center_y,
        scale=4.0,
        color=lerp_color(CYAN, GREEN, 0.3),
        alpha=140,
    )

    corner_radius = int(size * 0.18)
    mask = Image.new("L", (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, size - 1, size - 1], corner_radius, fill=255)
    img.putalpha(mask)

    return img


# ---------------------------------------------------------------------------
# SPLASH (1284x2778) — Dark bg, "MOOVA" + tagline + subtle decoration
# ---------------------------------------------------------------------------
def generate_splash():
    w, h = 1284, 2778
    img = Image.new("RGBA", (w, h), (*DARK_BG, 255))

    font_logo = orbitron(130, weight=700)
    text_logo = "MOOVA"

    logo_img, pad = create_gradient_text(text_logo, font_logo, (w, h), CYAN, GREEN, glow_radius=18)
    lw, lh = logo_img.size
    logo_x = (w - lw) // 2
    logo_y = (h - lh) // 2 - int(h * 0.04)
    img.paste(logo_img, (logo_x, logo_y), logo_img)

    bbox = font_logo.getbbox(text_logo)
    logo_actual_w = bbox[2] - bbox[0]
    logo_center_x = logo_x + pad + logo_actual_w // 2
    logo_actual_h = bbox[3] - bbox[1]
    logo_center_y = logo_y + pad + logo_actual_h // 2

    img = draw_motion_lines(
        img,
        cx=logo_center_x - logo_actual_w // 2 - 15,
        cy=logo_center_y,
        scale=2.2,
        color=lerp_color(CYAN, GREEN, 0.3),
        alpha=120,
    )

    font_tag = orbitron(32, weight=400)
    tag_text = "Juntos, em movimento"
    tag_bbox = font_tag.getbbox(tag_text)
    tag_w = tag_bbox[2] - tag_bbox[0]
    tag_h = tag_bbox[3] - tag_bbox[1]

    tag_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    tag_draw = ImageDraw.Draw(tag_layer)

    tag_color = lerp_color(CYAN, GREEN, 0.5)
    tag_x = (w - tag_w) // 2 - tag_bbox[0]
    tag_y = logo_y + lh - pad + 15
    tag_draw.text((tag_x, tag_y), tag_text, fill=(*tag_color, 200), font=font_tag)
    img = Image.alpha_composite(img, tag_layer)

    draw_decorative_rays(img, w // 2, h // 2, size=max(w, h))

    return img


def draw_decorative_rays(img, cx, cy, size):
    """Ultra-subtle diagonal rays from corners (like the current splash has)."""
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    ray_color = lerp_color(CYAN, GREEN, 0.3)
    for angle_deg in [25, 30, 35]:
        angle = math.radians(angle_deg)
        length = size * 1.2
        x_end = img.width + length * math.cos(angle)
        y_end = 0 - length * math.sin(angle)
        draw.line(
            [(img.width, img.height), (int(x_end), int(y_end))],
            fill=(*ray_color, 8),
            width=2,
        )

    result = Image.alpha_composite(img.convert("RGBA"), overlay)
    img.paste(result)


# ---------------------------------------------------------------------------
# SPLASH-ICON (288x288) — Just the "M" icon with gradient, no background
# ---------------------------------------------------------------------------
def generate_splash_icon():
    size = 288
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))

    font = orbitron(200, weight=800)
    text = "M"
    text_img, pad = create_gradient_text(text, font, (size, size), CYAN, GREEN, glow_radius=10)
    tw, th = text_img.size
    x = (size - tw) // 2
    y = (size - th) // 2
    img.paste(text_img, (x, y), text_img)

    bbox = font.getbbox(text)
    text_actual_w = bbox[2] - bbox[0]
    text_actual_h = bbox[3] - bbox[1]
    m_cx = x + pad + text_actual_w // 2
    m_cy = y + pad + text_actual_h // 2

    img = draw_motion_lines(
        img,
        cx=m_cx - text_actual_w // 2 - 8,
        cy=m_cy,
        scale=1.5,
        color=lerp_color(CYAN, GREEN, 0.3),
        alpha=130,
    )
    return img


# ---------------------------------------------------------------------------
# FAVICON (48x48)
# ---------------------------------------------------------------------------
def generate_favicon():
    big = generate_icon()
    big = big.convert("RGBA")
    white_bg = Image.new("RGBA", big.size, (255, 255, 255, 255))
    composited = Image.alpha_composite(white_bg, big)
    return composited.resize((48, 48), Image.LANCZOS)


# ---------------------------------------------------------------------------
# ANDROID ADAPTIVE ICON — foreground (512x512), background, monochrome
# ---------------------------------------------------------------------------
def generate_android_foreground():
    size = 512
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))

    font = orbitron(200, weight=800)
    text = "M"
    text_img, pad = create_gradient_text(text, font, (size, size), CYAN, GREEN, glow_radius=12)
    tw, th = text_img.size
    x = (size - tw) // 2
    y = (size - th) // 2
    img.paste(text_img, (x, y), text_img)

    bbox = font.getbbox(text)
    text_actual_w = bbox[2] - bbox[0]
    text_actual_h = bbox[3] - bbox[1]
    m_cx = x + pad + text_actual_w // 2
    m_cy = y + pad + text_actual_h // 2

    img = draw_motion_lines(
        img,
        cx=m_cx - text_actual_w // 2 - 10,
        cy=m_cy,
        scale=2.0,
        color=lerp_color(CYAN, GREEN, 0.3),
        alpha=130,
    )
    return img


def generate_android_background():
    return Image.new("RGBA", (512, 512), (*DARK_BG, 255))


def generate_android_monochrome():
    size = 512
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))

    font = orbitron(200, weight=800)
    text = "M"
    draw = ImageDraw.Draw(img)
    bbox = font.getbbox(text)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) // 2 - bbox[0]
    y = (size - th) // 2 - bbox[1]
    draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)

    line_w = 56
    line_h = 8
    gap = 28
    lx = x - 10 - line_w
    for i, lm in enumerate([0.65, 1.0, 0.8]):
        ly = y + th // 2 + (i - 1) * gap - line_h // 2
        w = int(line_w * lm)
        draw.rectangle([lx + (line_w - w), ly, lx + line_w, ly + line_h], fill=(255, 255, 255, 200))

    return img


# ---------------------------------------------------------------------------
# GRADIENT SPLASH variant (for in-app / store listing)
# ---------------------------------------------------------------------------
def generate_gradient_splash():
    w, h = 1284, 2778
    img = vertical_gradient_fast((w, h), GRAD_TOP, GRAD_BOTTOM).convert("RGBA")

    font_logo = orbitron(130, weight=700)
    text_logo = "Moova"

    bbox = font_logo.getbbox(text_logo)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]

    text_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(text_layer)
    tx = (w - tw) // 2 - bbox[0]
    ty = h // 2 - th // 2 - bbox[1] - int(h * 0.02)
    draw.text((tx, ty), text_logo, fill=(*WHITE, 255), font=font_logo)
    img = Image.alpha_composite(img, text_layer)

    font_tag = orbitron(32, weight=400)
    tag_text = "Juntos, em movimento"
    tag_bbox = font_tag.getbbox(tag_text)
    tag_w = tag_bbox[2] - tag_bbox[0]

    tag_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    tag_draw = ImageDraw.Draw(tag_layer)
    tag_x = (w - tag_w) // 2 - tag_bbox[0]
    tag_y = ty + th + 30
    tag_draw.text((tag_x, tag_y), tag_text, fill=(*WHITE, 210), font=font_tag)
    img = Image.alpha_composite(img, tag_layer)

    return img


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    assets = {
        "icon.png": generate_icon,
        "splash.png": generate_splash,
        "splash-icon.png": generate_splash_icon,
        "favicon.png": generate_favicon,
        "android-icon-foreground.png": generate_android_foreground,
        "android-icon-background.png": generate_android_background,
        "android-icon-monochrome.png": generate_android_monochrome,
    }

    for name, gen_fn in assets.items():
        path = os.path.join(OUT_DIR, name)
        img = gen_fn()
        img.save(path, "PNG")
        print(f"  ✓ {name} ({img.size[0]}x{img.size[1]})")

    grad_path = os.path.join(OUT_DIR, "splash-gradient.png")
    grad = generate_gradient_splash()
    grad.save(grad_path, "PNG")
    print(f"  ✓ splash-gradient.png ({grad.size[0]}x{grad.size[1]})")

    print("\nDone! All assets saved to:", OUT_DIR)


if __name__ == "__main__":
    main()

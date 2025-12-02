import { Link } from "expo-router";
import { type ComponentProps } from "react";
import { useExternalLinkViewModel } from "./viewModel";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  const { handlePress } = useExternalLinkViewModel(href);

  return (
    <Link
      target="_blank"
      {...rest}
      href={href as any}
      onPress={handlePress}
    />
  );
}


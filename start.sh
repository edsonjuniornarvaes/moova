#!/bin/bash

# Script para iniciar o projeto Moova com o PATH correto
export PATH="/opt/homebrew/bin:$PATH"

echo "🚀 Iniciando projeto Moova..."
echo "📱 Node.js version: $(node --version)"
echo "📦 Yarn version: $(yarn --version)"
echo "⚡ Expo version: $(npx expo --version)"
echo ""

# Verificar se o Node.js está na versão correta
NODE_VERSION=$(node --version | cut -d'v' -f2)
REQUIRED_VERSION="20.19.4"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" = "$REQUIRED_VERSION" ]; then
    echo "✅ Node.js version is compatible with Expo 54"
else
    echo "❌ Node.js version is not compatible. Required: >= $REQUIRED_VERSION, Got: $NODE_VERSION"
    exit 1
fi

echo ""
echo "🎬 Starting Expo development server..."
npx expo start --web

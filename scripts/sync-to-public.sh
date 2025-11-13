#!/bin/zsh
# Sincroniza todas as pastas e arquivos de Projects/ScientificSkinTech para public/ScientificSkinTech

SRC="$(pwd)/Projects/ScientificSkinTech"
DEST="$(pwd)/public/ScientificSkinTech"

mkdir -p "$DEST"
cp -R "$SRC"/* "$DEST"/

echo "Arquivos sincronizados para public/ScientificSkinTech!"
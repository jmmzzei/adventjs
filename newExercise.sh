#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

mkdir -p "$1" && cd "$1"
touch index.ts README.md
cd ..

startScript="nodemon ./$1/index.ts"

jq '.scripts.start = $newVal' --arg newVal $startScript package.json > tmp.$$.json && mv tmp.$$.json package.json

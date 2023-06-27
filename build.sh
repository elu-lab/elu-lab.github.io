#!/usr/bin/env bash

yarn build --minify --sourcemap --outDir docs --emptyOutDir
git add docs
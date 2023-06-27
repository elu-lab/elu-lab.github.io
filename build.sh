#!/usr/bin/env bash

yarn build --minify --sourcemap --outDir docs --emptyOutDir
echo www.elulab.kr | tee docs/CNAME
git add docs
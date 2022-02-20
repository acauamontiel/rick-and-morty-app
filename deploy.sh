#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:acauamontiel/rick-and-morty-app.git main:gh-pages

cd -

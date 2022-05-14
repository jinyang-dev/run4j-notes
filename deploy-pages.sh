#!/bin/bash

npm run docs:build

cd docs/.vuepress/dist

git_addr='git@github.com:jinyang-dev/run4j-notes.git'

git init
git add .
git commit -m 'deploy pages'
git remote add origin ${git_addr}
git push -f ${git_addr} master:gh-pages

cd -
#!/bin/env zsh
echo Building web page.
TARGET=~/bin
cp -r ./src $TARGET
echo All sources gathered successfully.
cd $TARGET
npm run build

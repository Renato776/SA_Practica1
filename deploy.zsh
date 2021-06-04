#!/bin/env zsh

TARGET=~/bin
cp -r $TARGET/dist/* ~/dist
cd ~/dist
aws s3 sync --delete s3://usac-frontend .
echo Application successfully deployed.

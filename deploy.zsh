#!/bin/env zsh

TARGET=~/bin
cd cp -r $TARGET/dist ~/dist
cd ~/dist
s3 sync --delete s3://usac-frontend .
echo Application successfully deployed.

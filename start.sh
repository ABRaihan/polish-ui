#!/bin/bash

git push origin -f dev_raihan && gulp && rollup -c --bundleConfigAsCjs && npm publish


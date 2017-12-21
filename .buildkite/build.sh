#!/bin/bash

set -eo pipefail
echo "--- Build"
docker build -t glee:$APPVERSION -f dockerfile-deploy
docker images
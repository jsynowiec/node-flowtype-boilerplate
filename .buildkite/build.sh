#!/bin/bash

set -eo pipefail
echo "--- Build"
docker build -f dockerfile-deploy -t glee:$APPVERSION .
docker images
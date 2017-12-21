#!/bin/bash

set -eo pipefail
echo "--- Clean"
docker stop $(docker ps -a -q)
docker container prune -f
docker image prune -f
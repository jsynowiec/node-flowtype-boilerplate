#!/bin/bash

set -eo pipefail
echo "--- Clean"
docker container prune -f
docker image prune -f
docker rmi $(docker images -q)
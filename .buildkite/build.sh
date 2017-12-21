#!/bin/bash

set -eo pipefail
echo "--- Build"
docker build -f dockerfile-deploy -t $APPNAME:$APPVERSION .
docker tag $APPNAME 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME:$APPVERSION
docker push 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME:$APPVERSION
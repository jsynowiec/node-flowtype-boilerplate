#!/bin/bash

set -eo pipefail
echo "--- Build"
docker build -f dockerfile-build -t $APPNAME-$ENVIRONMENT:$APPVERSION .
docker tag $APPNAME-$ENVIRONMENT 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME-$ENVIRONMENT:$APPVERSION
docker push 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME-$ENVIRONMENT:$APPVERSION
#!/bin/bash

set -eo pipefail
echo "--- Build"
docker build -f dockerfile-deploy -t $APPNAME-$ENVIRONMENT:$APPVERSION .
docker tag $APPNAME 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME-$ENVIRONMENT:$APPVERSION
docker tag $APPNAME 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME-$ENVIRONMENT:latest
docker push 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME-$ENVIRONMENT:$APPVERSION
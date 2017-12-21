#!/bin/bash

set -eo pipefail
echo "--- Build"
docker build -f dockerfile-deploy -t $APPNAME-$ENVIRONMENT:$APPVERSION -t $APPNAME-$ENVIRONMENT:latest .
docker tag $APPNAME-$ENVIRONMENT 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME-$ENVIRONMENT:$APPVERSION
docker tag $APPNAME-$ENVIRONMENT 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME-$ENVIRONMENT:latest
docker push 487799950875.dkr.ecr.us-east-1.amazonaws.com/$APPNAME-$ENVIRONMENT:$APPVERSION
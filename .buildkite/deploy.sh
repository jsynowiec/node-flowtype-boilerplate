#!/bin/bash

set -eo pipefail
echo "--- Build"
npm run build
mv dockerfile dockerfile-backup
mv deploy-dockerfile Dockerfile
echo "--- Deploy to $BUILDKITE_BRANCH"
gulp deploy
buildkite-agent artifact upload "zip/**/*.zip"
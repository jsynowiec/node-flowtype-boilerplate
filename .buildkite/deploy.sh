#!/bin/bash

set -eo pipefail
echo "--- Build"
npm run build
echo "--- Deploy to $BUILDKITE_BRANCH"
gulp deploy
buildkite-agent artifact upload "zip/**/*.zip"
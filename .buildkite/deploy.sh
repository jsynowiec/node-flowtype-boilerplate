#!/bin/bash

set -eo pipefail
echo "--- Copy Templates"
cp -v src/config/loggly.js.sample src/config/loggly.js
echo "--- Build"
if [[ "$BUILDKITE_BRANCH" == "master"  ]]; then
export NODE_ENV=prod
fi
npm install
if [[ "$BUILDKITE_BRANCH" == "master"  ]]; then
export NODE_ENV=production
fi
npm run build
echo "--- Deploy to $BUILDKITE_BRANCH"
gulp deploy
buildkite-agent artifact upload "zip/**/*.zip"
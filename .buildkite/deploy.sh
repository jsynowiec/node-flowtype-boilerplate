#!/bin/bash

set -eo pipefail
echo "--- Copy Templates"
cp -v src/config/loggly.js.sample src/config/loggly.js
cp -v src/config/sequelize.js.sample src/config/loggly.js
echo "--- Build"
npm run build
echo "--- Deploy to $BUILDKITE_BRANCH"
gulp deploy
buildkite-agent artifact upload "zip/**/*.zip"
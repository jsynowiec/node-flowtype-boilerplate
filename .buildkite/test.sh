#!/bin/bash

set -eo pipefail
echo "--- Test"
npm run test
if [ $BUILDKITE_PULL_REQUEST = false ]; then
    echo "--- Sonar Scanner: Scanning "$BUILDKITE_BRANCH" branch"
    sonar-scanner
else
    echo "--- Sonar Scanner: Scanning pull request on "$BUILDKITE_BRANCH" branch"
    sonar-scanner -Dsonar.analysis.mode=preview   -Dsonar.github.pullRequest=$BUILDKITE_PULL_REQUEST  -Dsonar.github.oauth=$GITHUB_ACCESS_TOKEN | tee bk-pipeline.log
fi
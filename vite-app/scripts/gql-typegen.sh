#!/usr/bin/env bash

# Check for nvm
if [ -d "$HOME/.nvm" ]; then
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  unset npm_config_prefix
  node ./scripts/graphql-codegen.js
  exit 0
fi

# Check for asdf
if [ -d "$HOME/.asdf" ]; then
  export ASDF_DIR="$HOME/.asdf"
  [ -s "$ASDF_DIR/asdf.sh" ] && \. "$ASDF_DIR/asdf.sh"
  node ./scripts/graphql-codegen.js
  exit 0
fi

echo "Neither nvm or asdf is installed. Please install one of them first in order to use code-gen."
exit 1

#!/usr/bin/env bash
# exit on error
set -o errexit

# Install dependencies using npm
npm install

# Build the application
npm run build

# The build output will be served by Vite's preview server
# The start command in package.json will handle the serving

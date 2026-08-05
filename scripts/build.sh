#!/bin/bash

echo "========================================"
echo "Building DevPortfolioX"
echo "========================================"

cd frontend || exit

npm install

npm run build

echo "========================================"
echo "Build Completed Successfully"
echo "========================================"
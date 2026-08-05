#!/bin/bash

echo "========================================"
echo "Deploying DevPortfolioX Locally"
echo "========================================"

cd frontend || exit

npm install

npm run build

cd ..

docker compose -f docker/docker-compose.yml up --build -d

echo "========================================"
echo "Application Available at"
echo "http://localhost:8080"
echo "========================================"
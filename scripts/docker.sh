#!/bin/bash

echo "========================================"
echo "Building Docker Image"
echo "========================================"

docker compose -f docker/docker-compose.yml up --build

echo "========================================"
echo "Docker Build Completed"
echo "========================================"
#!/bin/bash

echo "========================================"
echo "Cleaning Docker Resources"
echo "========================================"

docker system prune -af

echo "Cleanup Completed"
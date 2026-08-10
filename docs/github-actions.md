# 🔄 GitHub Actions CI/CD Pipeline Guide

This document details the automated Continuous Integration and Continuous Deployment (CI/CD) workflows for **DevPortfolioX**.

---

## ⚡ Workflow Pipeline Architecture

Located at `.github/workflows/ci.yml`:

```yaml
name: DevPortfolioX CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Setup Node.js Environment
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: 'frontend/package-lock.json'

      - name: Install Frontend Dependencies
        run: |
          cd frontend
          npm ci

      - name: Run TypeScript Verification & Production Build
        run: |
          cd frontend
          npm run build

      - name: Verify Docker Container Build
        run: |
          docker build -t devportfoliox:ci -f Dockerfile .
```

---

## 🛡 Security Scanning Integration
- **Checkov**: Static security scanner for Terraform HCL configurations.
- **Trivy**: Container image CVE scanner checking Alpine/Nginx base layers.

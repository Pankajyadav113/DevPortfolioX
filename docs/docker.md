# 🐳 Docker Containerization Guide

This document outlines the containerization strategy, multi-stage Docker build, and container execution for **DevPortfolioX**.

---

## 🏗 Multi-Stage Dockerfile Overview

The application utilizes a multi-stage Dockerfile to minimize final container image size and optimize production performance:

```dockerfile
# Stage 1 - Build React Application
FROM node:20-alpine AS builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Stage 2 - Serve Production Bundle via NGINX
FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🚀 Commands

### Build Image
```bash
docker build -t devportfoliox:latest -f Dockerfile .
```

### Run Container
```bash
docker run -d -p 8080:80 --name devportfoliox-app devportfoliox:latest
```

### Using Docker Compose
```bash
docker compose up -d --build
```

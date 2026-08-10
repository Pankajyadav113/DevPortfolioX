# ☸ Kubernetes Deployment Guide

This document describes the Kubernetes manifests and orchestration strategy for **DevPortfolioX**.

---

## 📄 Manifest Objects (`kubernetes/`)

1. `namespace.yaml`: Isolated `devportfoliox` namespace.
2. `configmap.yaml`: NGINX configuration settings & environment values.
3. `deployment.yaml`: Replicated Pod deployment with container resource limits (`cpu: 250m`, `memory: 256Mi`).
4. `service.yaml`: ClusterIP / NodePort service routing traffic.
5. `ingress.yaml`: Ingress controller rules mapping HTTP requests.

---

## 🚀 Deployment Commands

```bash
# Apply Namespace
kubectl apply -f kubernetes/namespace.yaml

# Apply ConfigMaps & Secrets
kubectl apply -f kubernetes/configmap.yaml

# Deploy Workloads
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
kubectl apply -f kubernetes/ingress.yaml

# Verify Status
kubectl get pods -n devportfoliox
```

# DevPortfolioX Architecture

```text
                         GitHub Repository
                                │
                                ▼
                      GitHub Actions CI/CD
                                │
                 ┌──────────────┴──────────────┐
                 ▼                             ▼
          Build React App               Build Docker Image
                 │                             │
                 └──────────────┬──────────────┘
                                ▼
                           Nginx Container
                                │
                                ▼
                       React + TypeScript App
                                │
        ┌──────────────┬──────────────┬──────────────┐
        ▼              ▼              ▼              ▼
    Terraform      Kubernetes     Monitoring      Backend API
        │              │              │               │
        ▼              ▼              ▼               ▼
 Azure Infrastructure Pods      Prometheus      Node.js (Future)
                                Grafana
```

---

## Components

### Frontend

- React
- TypeScript
- Tailwind CSS
- Vite

### Containerization

- Docker
- Nginx

### CI/CD

- GitHub Actions

### Infrastructure

- Terraform

### Cloud

- Azure
- AWS

### Orchestration

- Kubernetes

### Monitoring

- Prometheus
- Grafana
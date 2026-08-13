# 🚀 DevPortfolioX — Cloud & DevOps Engineer Portfolio

**DevPortfolioX** is an enterprise-grade, production-ready Cloud & DevOps Engineer Portfolio website built for **Pankaj Yadav**. Designed with **React 19, TypeScript, Tailwind CSS v4, Framer Motion, Express.js, and MongoDB**, showcasing automated cloud infrastructure, Infrastructure as Code (Terraform), Docker containerization, Kubernetes cluster monitoring, and DevSecOps pipelines.

---

## ✨ Features & Highlights

- ⚡ **Interactive DevOps CLI Shell**: Built-in interactive browser terminal where visitors can run live commands (`help`, `whoami`, `skills`, `projects`, `status`, `contact`, `clear`) or click quick command chips.
- 🎨 **Modern Cyber UI & Theme**: High-contrast, dark-mode glassmorphic interface with vibrant neon teal (`#06b6d4`) and electric violet (`#8b5cf6`) accents, animated status pills, and ambient glowing lighting.
- 📂 **Filtered Projects Showcase & Deep-Dive Modals**: Categorized portfolio projects (Terraform/IaC, Containers & K8s, CI/CD & Automation, DevSecOps) with architectural diagrams, capabilities lists, and deep-dive modal dialogs.
- 🔄 **End-to-End DevOps Lifecycle Visualizer**: Interactive 5-stage pipeline animation illustrating the engineering workflow from IaC provisioning to container orchestration and observability.
- 🛠 **Official Tech Stack Matrix**: Skill cards with official brand logos (Azure, AWS, Terraform, Docker, Kubernetes, Jenkins, GitHub Actions, Prometheus, Grafana, Linux, SonarQube) and proficiency indicators.
- 💼 **Timeline History & Verified Credentials**: Interactive work experience cards detailing 6+ months of DevOps engineering internship at DevOps Insiders, paired with verified certification badges.
- 📬 **Fullstack Contact Integration**: Contact form featuring real-time client-side validation, direct Web3Forms delivery fallback, and direct copy-to-clipboard buttons for email and phone.
- 🐳 **Docker & Docker Compose Ready**: Multi-stage Dockerfile targeting `node:20-alpine` and `nginx:alpine` for minimal (<35MB) production containerization.

---

## 🛠 Tech Stack

### Frontend Application
- **Framework**: React 19 + Vite 8
- **Language**: TypeScript 6
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Animations**: Framer Motion 12
- **Icons**: React Icons (Font Awesome, Simple Icons, VSCode Icons)
- **Routing & Scroll**: React Router v7 + React Scroll

### Backend API & Database
- **Runtime**: Node.js 20 (ES Modules)
- **Framework**: Express.js 4
- **Database**: MongoDB & Mongoose 9
- **Security & Utilities**: Cors, Helmet, Morgan, Express-Validator, Nodemailer

### DevOps & Cloud Infrastructure
- **Cloud Platforms**: Microsoft Azure, Amazon Web Services (AWS)
- **Infrastructure as Code**: HashiCorp Terraform (HCL), Ansible
- **Containers & Orchestration**: Docker, Kubernetes, NGINX
- **CI/CD Automation**: GitHub Actions, Jenkins
- **Observability & DevSecOps**: Prometheus, Grafana, Checkov, Trivy, SonarQube

---

## 📁 Repository Structure

```text
DevPortfolioX/
├── .gitignore                  # Git Ignore Rules
├── LICENSE                     # MIT License
├── README.md                   # Repository Master Documentation
├── screenshots/                # Application UI Screenshots
│
├── frontend/                   # React 19 + TypeScript + Vite Frontend
│   ├── public/                 # Favicons, Resume PDF, Certificates & Static Media
│   ├── src/
│   │   ├── components/         # UI Components (Hero, About, TechStack, Projects, Experience, Contact, Navbar, Footer)
│   │   ├── constants/          # Site Configuration & Data Definitions
│   │   ├── data/               # Portfolio Data Specifications
│   │   └── pages/              # HomePage Layout & Routing
│   ├── package.json            # Frontend Dependencies & Scripts
│   └── vite.config.ts          # Vite Configuration
│
└── backend/                    # Node.js Express REST API & MongoDB
    ├── src/
    │   ├── config/             # Database Connection (MongoDB Mongoose)
    │   ├── controllers/        # Contact & Health API Handlers
    │   ├── models/             # Contact Schema Definition
    │   ├── routes/             # Express API Endpoints
    │   ├── services/           # Nodemailer Email Service
    │   └── server.js           # Server Entrypoint
    └── package.json            # Backend Dependencies & Scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **NPM**: v9.0.0 or higher
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/Pankajyadav113/DevPortfolioX.git
cd DevPortfolioX
```

### 2. Start Frontend Application
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Start Backend API Server (Optional)
```bash
cd ../backend
npm install
npm run dev
```
Backend server will run at [http://localhost:5000](http://localhost:5000).

---

## 🐳 Docker Deployment

To build and run the entire application inside a Docker container:

```bash
# Build and run container at port 8080
docker compose up --build -d
```

Access the containerized application at [http://localhost:8080](http://localhost:8080).

---

## 👨‍💻 Author & Contact

**Pankaj Yadav** — Cloud & DevOps Engineer
- 🌐 **GitHub**: [github.com/Pankajyadav113](https://github.com/Pankajyadav113)
- 💼 **LinkedIn**: [linkedin.com/in/pankajyadav113](https://www.linkedin.com/in/pankajyadav113/)
- 📧 **Email**: [pankaj738074@gmail.com](mailto:pankaj738074@gmail.com)

---

## 📄 License

This project is licensed under the **MIT License**.
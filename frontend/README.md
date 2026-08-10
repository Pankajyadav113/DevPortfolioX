# 💻 DevPortfolioX — Frontend Application

This directory contains the single-page React frontend application for **DevPortfolioX**, built with **React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Vite 8**.

---

## ✨ Key Features & Components

- ⚡ **Interactive CLI Shell (`InteractiveTerminal.tsx`)**: Interactive terminal emulator allowing visitors to run commands (`whoami`, `skills`, `projects`, `status`, `contact`) or click shortcut chips.
- 🎨 **Modern Cyber Glass Design System (`index.css`)**: Dark UI with radiant neon teal (`#06b6d4`) & purple (`#8b5cf6`) accents, glowing profile rings, custom scrollbars, and background ambient grids.
- 📂 **Projects Grid & Architecture Modal (`ProjectsSection.tsx` & `ProjectModal.tsx`)**: Category-filtered project cards (Terraform/IaC, Containers & K8s, CI/CD, DevSecOps) with high-res graphics and modal dialogs.
- 🔄 **DevOps Pipeline Lifecycle Visualizer (`DevOpsWorkflow.tsx`)**: Interactive 5-stage workflow diagram showcasing IaC -> Build -> DevSecOps Scan -> Container Orchestration -> Observability.
- 🛠 **Official Brand Skill Matrix (`TechStack.tsx`)**: Skill cards with official brand icons (Azure, AWS, Terraform, Docker, K8s, Jenkins, GitHub Actions, Prometheus, Grafana, Linux) and proficiency meters.
- 💼 **Experience Timeline & Verified Certifications (`ExperienceSection.tsx` & `CertificationSection.tsx`)**: Milestone cards for internship history and official credentials with verification links.
- 📬 **Interactive Contact Form (`ContactSection.tsx`)**: Validated submission form with direct client-side delivery fallback and quick email/phone copy buttons.

---

## 📁 Directory Architecture

```text
frontend/
├── index.html              # SEO Meta, Favicon & Google Fonts (Plus Jakarta Sans, Fira Code)
├── package.json
├── vite.config.ts          # Vite Configuration
└── src/
    ├── main.tsx            # React App Mount Point
    ├── App.tsx             # Application Entrypoint with Loading Screen Timer
    ├── index.css           # Global Design Tokens, Scrollbars & Glassmorphism Rules
    │
    ├── assets/
    │   └── images/         # Profile Image & Project Architecture Graphics
    │
    ├── components/
    │   ├── common/         # HeroSection, AboutSection, TechStack, ProjectsSection,
    │   │                   # DevOpsWorkflow, ExperienceSection, CertificationSection,
    │   │                   # GitHubSection, ContactSection
    │   ├── layout/         # Glass Navbar & Footer
    │   └── ui/             # InteractiveTerminal, ProjectModal, ScrollProgress, ScrollToTop, FadeIn
    │
    ├── constants/          # Site Configuration, Projects, Certifications, Contact
    ├── routes/             # AppRouter Route Definitions
    └── pages/              # HomePage Container Component
```

---

## 🚀 Development & Build Scripts

```bash
# Install NPM packages
npm install

# Launch Vite development server
npm run dev

# Run TypeScript typechecks & build production bundle
npm run build

# Preview production build locally
npm run preview

# Run Oxlint checks
npm run lint
```

import terraformImg from "../assets/images/terraform_azure.png";
import dockerImg from "../assets/images/docker_nginx.png";
import githubActionsImg from "../assets/images/github_actions.png";
import k8sImg from "../assets/images/kubernetes_monitoring.png";

export interface Project {
  id: number;
  title: string;
  category: "Terraform / IaC" | "Cloud Infrastructure" | "Containers & K8s" | "CI/CD & Automation" | "DevSecOps";
  description: string;
  longDescription: string;
  status: "Completed" | "In Progress" | "Planned";
  image: string;
  techStack: string[];
  features: string[];
  architectureSteps: string[];
  github?: string;
  live?: string;
}

export const projectCategories = [
  "All",
  "Terraform / IaC",
  "Cloud Infrastructure",
  "Containers & K8s",
  "CI/CD & Automation",
  "DevSecOps",
] as const;

export const projects: Project[] = [
  {
    id: 1,
    title: "Terraform Azure Infrastructure",
    category: "Terraform / IaC",
    description:
      "Designed and provisioned enterprise-grade Azure infrastructure using modular Terraform codebase. Includes VNets, Subnets, VM Instances, and Key Vault integration.",
    longDescription:
      "Architected a scalable, environment-agnostic infrastructure provisioner on Microsoft Azure using HashiCorp Terraform (HCL). The solution abstracts core cloud components into modular Terraform modules, utilizing remote state locking with Azure Blob Storage, secure secret injection via Azure Key Vault, custom VNet peering, Network Security Group (NSG) rule definitions, and automated VM bootstrap provisioning via Cloud-Init scripts.",
    status: "Completed",
    image: terraformImg,
    techStack: ["Terraform", "Azure", "HCL", "Azure VNet", "Key Vault", "Linux VM", "IaC"],
    features: [
      "Modular HCL design with main, variables, and outputs separation",
      "Azure Key Vault automated secret management & injection",
      "Strict Network Security Group rules limiting ingress SSH access",
      "Remote state locking with Azure Storage Account backend",
    ],
    architectureSteps: [
      "Configured Azure Provider & State Backend in storage container",
      "Created Modular VNet with Public/Private Subnets & Route Tables",
      "Provisioned Azure Key Vault with access policies for Secrets",
      "Deployed Ubuntu 22.04 LTS VM with SSH public key authorization",
    ],
    github: "https://github.com/Pankajyadav113/Terraform_Practice",
    live: "",
  },
  {
    id: 2,
    title: "Dockerized NGINX Web Server",
    category: "Containers & K8s",
    description:
      "Containerized web server environment using Docker & custom NGINX configuration, featuring port mapping, volume mounts, and automated deployment scripts.",
    longDescription:
      "Engineered an optimized containerized NGINX web server to serve modern single page applications with custom caching rules, gzip compression, and security headers. Packaged using multi-stage Docker builds to achieve minimal alpine-based image size, with automated container health checks and deployment scripts targeting Azure virtual machines.",
    status: "Completed",
    image: dockerImg,
    techStack: ["Docker", "NGINX", "Linux", "Azure VM", "Bash", "Docker CLI"],
    features: [
      "Multi-stage Docker build minimizing container image size (<35MB)",
      "NGINX custom reverse proxy configuration & security headers",
      "Persistent volume mounting for dynamic content reload",
      "Container health checks and automated restart policies",
    ],
    architectureSteps: [
      "Authored optimized Dockerfile targeting node:20-alpine and nginx:alpine",
      "Configured custom nginx.conf with compression & cache controls",
      "Built Docker image tagged with semantic versioning",
      "Exposed port 80/443 mapping on Azure Linux VM host",
    ],
    github: "https://github.com/Pankajyadav113/nginx-docker-project",
    live: "",
  },
  {
    id: 3,
    title: "GitHub Actions CI/CD Pipeline",
    category: "CI/CD & Automation",
    description:
      "Automated Continuous Integration and Continuous Deployment pipeline using GitHub Actions to perform linting, build verification, and Docker image validation.",
    longDescription:
      "Established a robust GitHub Actions workflow to automate code verification and artifact building upon pull requests and branch merges. The workflow handles caching npm dependencies, executing oxlint checks, building production bundles, running Docker image builds, and logging build reports to GitHub step summaries.",
    status: "Completed",
    image: githubActionsImg,
    techStack: ["GitHub Actions", "CI/CD", "Docker", "YAML", "Git", "NPM"],
    features: [
      "Automated triggers on main push & pull request events",
      "Dependency caching for sub-minute build acceleration",
      "Docker image build matrix validation",
      "Build notification status reporting",
    ],
    architectureSteps: [
      "Configured .github/workflows/ci.yml with job concurrency",
      "Implemented setup-node action with lockfile caching",
      "Ran TypeScript typechecks and linting validations",
      "Built Docker container artifact and published execution metrics",
    ],
    github: "https://github.com/Pankajyadav113/DevPortfolioX",
    live: "",
  },
  {
    id: 4,
    title: "Kubernetes Monitoring Stack",
    category: "Containers & K8s",
    description:
      "Observability and cluster monitoring solution built for Kubernetes using Prometheus operator, Grafana visualization dashboards, and metric exporters.",
    longDescription:
      "Building a production monitoring and alerting stack for Kubernetes workloads. Utilizes Prometheus for metric scraping from node-exporters, Kube-State-Metrics, and custom application endpoints, paired with Grafana dashboards providing real-time CPU, RAM, Network I/O, and container pod health visualizations.",
    status: "In Progress",
    image: k8sImg,
    techStack: ["Kubernetes", "Prometheus", "Grafana", "YAML", "Kube-State-Metrics", "Helm"],
    features: [
      "Prometheus metric scraping configurations and target discovery",
      "Custom Grafana Dashboards for pod memory & node utilization",
      "Kubernetes deployment manifests with persistent volumes",
      "Alertmanager notifications for critical pod failures",
    ],
    architectureSteps: [
      "Deployed Kubernetes namespace, ConfigMaps, and Secret objects",
      "Configured Prometheus server deployment and ServiceMonitor CRDs",
      "Provisioned Grafana with automated data source auto-discovery",
      "Validated pod metric scraping and dashboard alerts",
    ],
    github: "https://github.com/Pankajyadav113/DevPortfolioX",
    live: "",
  },
  {
    id: 5,
    title: "DevSecOps Pipeline Security Integrations",
    category: "DevSecOps",
    description:
      "Automated security scanning pipeline integrating Trivy for container vulnerability checks, Checkov for IaC compliance, and SonarQube for static analysis.",
    longDescription:
      "Integrating DevSecOps best practices directly into the CI pipeline to catch vulnerabilities early in the development lifecycle. The pipeline automatically inspects Terraform files with Checkov for misconfigurations, scans Docker images with Trivy for CVE vulnerabilities, and validates code quality with SonarQube.",
    status: "In Progress",
    image: githubActionsImg,
    techStack: ["Trivy", "Checkov", "SonarQube", "DevSecOps", "GitHub Actions", "Docker"],
    features: [
      "Trivy automated container vulnerability scanner integration",
      "Checkov static code analysis for Terraform misconfigurations",
      "Automated SARIF report uploads to GitHub Security tab",
      "Quality Gate enforcement blocking vulnerable commits",
    ],
    architectureSteps: [
      "Integrated Checkov action scanning HCL code prior to plan execution",
      "Added Trivy image scanner step failing builds on HIGH/CRITICAL CVEs",
      "Configured SonarQube code smell and security bug detection",
      "Aggregated vulnerability findings into build summary",
    ],
    github: "https://github.com/Pankajyadav113/DevPortfolioX",
    live: "",
  },
  {
    id: 6,
    title: "Enterprise Jenkins Automation Pipeline",
    category: "CI/CD & Automation",
    description:
      "Jenkins-based declarative CI/CD pipeline featuring agent pod execution, automated testing, container registry push, and target server deployment.",
    longDescription:
      "Configuring an enterprise Jenkins pipeline using Jenkinsfile syntax. The workflow handles agent node setup on Docker/K8s, source checkout, environment secret injection, container building, vulnerability scanning, and automated deployment with rollback capabilities.",
    status: "In Progress",
    image: dockerImg,
    techStack: ["Jenkins", "Groovy", "CI/CD", "Docker", "Linux", "Bash"],
    features: [
      "Declarative Jenkinsfile pipeline with parameterized triggers",
      "Docker-in-Docker agent container execution environment",
      "Automated credentials vault integration for registry tokens",
      "Slack/Email webhook notifications on build outcomes",
    ],
    architectureSteps: [
      "Configured Jenkins controller master and agent setup",
      "Wrote Jenkinsfile stage blocks for Checkout, Build, Test, Deploy",
      "Integrated Docker registry authentication step",
      "Added post-execution cleanup and alert hooks",
    ],
    github: "https://github.com/Pankajyadav113/DevPortfolioX",
    live: "",
  },
];
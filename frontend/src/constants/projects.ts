export interface Project {
  id: number;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Planned";
  techStack: string[];
  github?: string;
  live?: string;
 docs?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Terraform Azure Infrastructure",
    description:
      "Designed and provisioned Azure infrastructure using reusable Terraform modules. Implemented Resource Groups, Virtual Networks, Subnets, Public IPs, Network Interfaces, Linux Virtual Machines, Azure Key Vault and Key Vault Secrets with an environment-based modular architecture following Infrastructure as Code (IaC) best practices.",
    status: "Completed",
    techStack: [
      "Terraform",
      "Microsoft Azure",
      "HCL",
      "Azure Resource Manager",
      "Azure Virtual Network",
      "Azure VM",
      "Azure Key Vault",
      "Infrastructure as Code",
    ],
    github: "https://github.com/Pankajyadav113/Terraform_Practice",
    live: "",
  },

  {
    id: 2,
    title: "Dockerized NGINX Web Server",
    description:
      "Containerized and deployed a static website using Docker and NGINX. Created a custom Docker image, configured NGINX, exposed the application using port mapping and deployed it on an Azure Linux Virtual Machine.",
    status: "Completed",
    techStack: [
      "Docker",
      "NGINX",
      "Linux",
      "Azure VM",
      "Docker CLI",
      "Bash",
    ],
    github: "https://github.com/Pankajyadav113/nginx-docker-project",
    live: "",
  },

  {
    id: 3,
    title: "DevPortfolioX",
    description:
      "A modern DevOps portfolio built with React, TypeScript and Tailwind CSS showcasing projects, technical skills, certifications, GitHub activity and responsive UI. Integrated Docker support and GitHub Actions CI workflow.",
    status: "In Progress",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/Pankajyadav113/DevPortfolioX",
    live: "",
  },

  {
    id: 4,
    title: "GitHub Actions CI/CD Pipeline",
    description:
      "Implemented a Continuous Integration (CI) pipeline using GitHub Actions to automatically install dependencies, build the React application and validate Docker image creation on every push.",
    status: "Completed",
    techStack: [
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "YAML",
      "GitHub",
    ],
    github: "https://github.com/Pankajyadav113/DevPortfolioX",
    live: "",
  },

  {
    id: 5,
    title: "Kubernetes Monitoring Stack",
    description:
      "Currently learning Kubernetes by building a monitoring stack using Prometheus and Grafana. Kubernetes manifests, monitoring dashboards and deployment configurations are under development.",
    status: "In Progress",
    techStack: [
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "YAML",
    ],
    github: "",
    live: "",
  },

  {
    id: 6,
    title: "DevSecOps Pipeline",
    description:
      "Learning DevSecOps by integrating Trivy, Checkov and SonarQube for container image scanning, Infrastructure as Code security analysis and code quality checks.",
    status: "In Progress",
    techStack: [
      "Trivy",
      "Checkov",
      "SonarQube",
      "DevSecOps",
    ],
    github: "",
    live: "",
  },

  {
    id: 7,
    title: "Jenkins CI/CD Pipeline",
    description:
      "Building a Jenkins-based Continuous Integration and Continuous Deployment pipeline with automated build, testing and deployment workflows.",
    status: "In Progress",
    techStack: [
      "Jenkins",
      "CI/CD",
      "Pipeline",
      "Linux",
    ],
    github: "",
    live: "",
  },
];
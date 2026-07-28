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
    title: "AWS DevPortfolio Infrastructure",
    description:
      "Production-ready AWS infrastructure built using Terraform with modular architecture.",
    status: "In Progress",
    techStack: ["AWS", "Terraform", "IAM", "VPC"],
  },

  {
    id: 2,
    title: "Azure Infrastructure with Terraform",
    description:
      "Provisioning Azure resources using reusable Terraform modules and best practices.",
    status: "Completed",
    techStack: ["Azure", "Terraform"],
  },

  {
    id: 3,
    title: "Docker + Nginx Deployment",
    description:
      "Containerized web application deployed using Docker and Nginx.",
    status: "Completed",
    techStack: ["Docker", "Nginx"],
  },

  {
    id: 4,
    title: "GitHub Actions CI/CD Pipeline",
    description:
      "Automated build and deployment pipeline using GitHub Actions.",
    status: "In Progress",
    techStack: ["GitHub Actions", "CI/CD"],
  },

  {
    id: 5,
    title: "Kubernetes Monitoring Stack",
    description:
      "Monitoring Kubernetes workloads using Prometheus and Grafana.",
    status: "Planned",
    techStack: ["Kubernetes", "Prometheus", "Grafana"],
  },

  {
    id: 6,
    title: "DevSecOps Pipeline",
    description:
      "Security scanning pipeline using Trivy, Checkov and SonarQube.",
    status: "Planned",
    techStack: ["Trivy", "Checkov", "SonarQube"],
  },

  {
    id: 7,
    title: "Jenkins CI/CD on AWS",
    description:
      "Deploying Jenkins on AWS with automated CI/CD workflows.",
    status: "Planned",
    techStack: ["Jenkins", "AWS"],
  },
];
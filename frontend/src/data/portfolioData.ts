export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  technologies: string[];
  category: 'cloud' | 'iac' | 'container' | 'testing' | 'cicd' | 'monitoring';
  keyImplementation: string[];
  keyLearning: string;
  githubUrl: string;
  featured: boolean;
  architectureDiagram?: string[];
}

export interface SkillCardItem {
  id: string;
  title: string;
  description: string;
  levelBadge: 'Advanced' | 'Proficient' | 'Expert' | 'Hands-on';
  category: 'cloud' | 'iac' | 'container' | 'cicd' | 'os' | 'monitoring';
  iconName: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[];
}

export const PERSONAL_INFO = {
  name: "Pankaj Kumar Yadav",
  title: "Azure DevOps Engineer",
  shortHero: "Building Cloud Infrastructure. Automating Everything.",
  profileSummary: "Azure DevOps Engineer with a strong foundation in cloud infrastructure and automation on Microsoft Azure. Knowledge of CI/CD pipelines using Azure DevOps, Infrastructure as Code with Terraform, containerization using Docker, and automated VM creation with HashiCorp Packer.",
  bio: "Azure DevOps Engineer with a strong foundation in cloud infrastructure and automation on Microsoft Azure. Focused on improving deployment efficiency, containerization, and DevSecOps best practices.",
  aboutDetailed: `I am currently pursuing my Bachelor of Engineering in Information Technology at Dr. A P J Abdul Kalam Technical University Lucknow, Uttar Pradesh, and building my career in DevOps and Cloud Engineering.

My learning journey is focused on understanding how modern applications are developed, deployed, monitored, and maintained using automation and cloud technologies.

I have hands-on experience working with Azure resources (VNets, VMs, Storage Accounts, Load Balancers, Application Gateways), Terraform-based infrastructure provisioning, HashiCorp Packer custom VM imaging, Docker containerization, Git/GitHub version control, Linux server administration, and CI/CD pipelines.

I believe in learning by building real-world projects rather than only studying theoretical concepts. My goal is to become a skilled DevOps/Cloud Engineer capable of designing, automating, deploying, and maintaining reliable cloud infrastructure.`,
  careerObjective: "My goal is to build a career as an Azure DevOps / Cloud Engineer where I can work on cloud infrastructure, automation, CI/CD pipelines, containerization, monitoring, and scalable systems. I want to contribute to engineering teams while continuously enforcing DevSecOps best practices.",
  email: "pankaj738074@gmail.com",
  phone: "+91 7238922584",
  github: "https://github.com/Pankajyadav113",
  githubHandle: "github.com/Pankajyadav113",
  linkedin: "https://www.linkedin.com/in/pankajyadav113",
  linkedinHandle: "linkedin.com/in/pankajyadav113",
  location: "Azamgarh, UP, India",
  college: "Dr. A P J Abdul Kalam Technical University Lucknow",
  degree: "Bachelor of Engineering (B.Tech)",
  internshipRole: "DevOps Engineer Intern",
  internshipCompany: "DevOps Insiders",
  status: "Currently open to DevOps, SRE & Multi-Cloud roles",
  profileImage: "/pankaj-profile.jpg",
  resumePdf: "/Pankaj_Yadav_DevOps_CV.pdf"
};

export const WHAT_I_BRING = [
  {
    title: "Infrastructure Automation",
    description: "Automate complex cloud environments using Terraform following IaC modular standards and state locking.",
    icon: "Boxes"
  },
  {
    title: "Cloud Architecture",
    description: "Practical exposure to Microsoft Azure services: VNets, VMs, Storage Accounts, Load Balancers, Application Gateways & NSGs.",
    icon: "Cloud"
  },
  {
    title: "Containerization",
    description: "Hands-on experience creating optimized Dockerfiles following security and size best practices, volume binding, and Nginx deployment.",
    icon: "Container"
  },
  {
    title: "Custom VM Imaging (Packer)",
    description: "Automate creation of custom Azure VM base images using HashiCorp Packer to accelerate provisioning across Dev/Test/Prod.",
    icon: "Boxes"
  },
  {
    title: "Linux & Administration",
    description: "Fluent in Ubuntu/Linux environments, bash scripting, SSH keys, process monitoring, and networking troubleshooting.",
    icon: "Terminal"
  },
  {
    title: "CI/CD & DevSecOps",
    description: "Azure DevOps YAML Pipelines, GitHub Actions, release automation, and embedding security scans into deployment pipelines.",
    icon: "GitBranch"
  }
];

export const CURRENT_LEARNING_FOCUS = [
  "HashiCorp Packer VM Automation",
  "Advanced Azure Application Gateways",
  "Terraform Modules & State Locking",
  "Azure DevOps Pipelines",
  "GitHub Actions Automation",
  "Kubernetes & Orchestration",
  "Prometheus & Grafana Telemetry",
  "DevSecOps & Cloud Security"
];

export const SKILL_CARDS_DATA: SkillCardItem[] = [
  {
    id: "azure-cloud",
    title: "Microsoft Azure",
    description: "Resource Groups, VNets, VMs, Storage Accounts, Load Balancers, Application Gateways, Entra ID",
    levelBadge: "Advanced",
    category: "cloud",
    iconName: "Cloud"
  },
  {
    id: "terraform-iac",
    title: "Terraform (azurerm)",
    description: "Variables, outputs, modules, for_each loops, remote state management, and drift handling",
    levelBadge: "Advanced",
    category: "iac",
    iconName: "FileCode"
  },
  {
    id: "packer-vm",
    title: "HashiCorp Packer",
    description: "Automated custom Azure VM base image creation for standardized Dev/Test/Prod deployments",
    levelBadge: "Advanced",
    category: "iac",
    iconName: "Boxes"
  },
  {
    id: "azure-networking",
    title: "Cloud Networking & VNet",
    description: "VNet peering, subnets, Network Security Groups (NSG), NAT Gateway & Load Balancer",
    levelBadge: "Advanced",
    category: "cloud",
    iconName: "Network"
  },
  {
    id: "docker-containers",
    title: "Docker & Containerization",
    description: "Dockerfile optimization for security/size, container volumes, custom port mapping, micro-services",
    levelBadge: "Advanced",
    category: "container",
    iconName: "Container"
  },
  {
    id: "kubernetes-k8s",
    title: "Kubernetes (K8s)",
    description: "Cluster management, Pod deployments, Services, Ingress controllers, Helm charts, and kubectl CLI",
    levelBadge: "Advanced",
    category: "container",
    iconName: "Boxes"
  },
  {
    id: "nginx-server",
    title: "Nginx Web Server",
    description: "Containerized Nginx deployment, reverse proxy routing, port binding, and HTTP/HTTPS headers",
    levelBadge: "Advanced",
    category: "container",
    iconName: "Server"
  },
  {
    id: "cicd-pipelines",
    title: "CI/CD & Azure DevOps",
    description: "Azure DevOps Pipelines, GitHub Actions, DevSecOps security gates, automated release pipelines",
    levelBadge: "Proficient",
    category: "cicd",
    iconName: "Workflow"
  },
  {
    id: "git-github",
    title: "Git & GitHub Workflows",
    description: "Branching strategies, pull request code reviews, merge conflict resolution, repository management",
    levelBadge: "Advanced",
    category: "cicd",
    iconName: "GitBranch"
  },
  {
    id: "linux-admin",
    title: "Linux & Bash Scripting",
    description: "Ubuntu server admin, SSH authentication, process tracking, systemctl daemons, automated bash scripts",
    levelBadge: "Advanced",
    category: "os",
    iconName: "Terminal"
  },
  {
    id: "powershell-automation",
    title: "Windows PowerShell",
    description: "PowerShell scripts, Azure CLI commands, automation tasks, and configuration scripts",
    levelBadge: "Proficient",
    category: "os",
    iconName: "Code2"
  },
  {
    id: "prometheus-grafana",
    title: "Prometheus & Grafana",
    description: "Infrastructure metric collection, alert thresholds, time-series telemetry dashboards",
    levelBadge: "Proficient",
    category: "monitoring",
    iconName: "Activity"
  },
  {
    id: "load-testing",
    title: "Cloud Load & Capacity Testing",
    description: "Apache JMeter concurrent user load simulation on Azure VMs, bottleneck identification",
    levelBadge: "Proficient",
    category: "monitoring",
    iconName: "Cpu"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "azure-terraform-automation",
    title: "Azure Infrastructure Automation using Terraform",
    shortDescription: "Designed and provisioned Azure cloud infrastructure using modular Terraform IaC modules (VNet, Subnets, VMs, NSG, Key Vault).",
    fullOverview: "Designed and provisioned enterprise-ready Azure cloud infrastructure using Terraform following Infrastructure as Code (IaC) principles. Implemented Resource Groups, Virtual Networks, Subnets, Public IPs, Network Security Groups (NSG), Linux Virtual Machines, Azure Key Vault, and Key Vault Secrets with an environment-based modular architecture following IaC best practices.",
    technologies: ["Terraform", "Microsoft Azure", "HCL", "Azure VNet", "Azure VM", "Azure Key Vault", "Linux"],
    category: "iac",
    featured: true,
    keyImplementation: [
      "Created Azure Resource Groups and Storage Accounts using Terraform.",
      "Provisioned Azure Virtual Networks (VNet) and segregated subnets for public/private compute.",
      "Configured Network Security Groups (NSG) and tight inbound/outbound security rules.",
      "Created Azure Virtual Machines with Public IP and attached disk storage.",
      "Managed secrets and keys securely using Azure Key Vault integration.",
      "Utilized Terraform variables, `for_each`, dependencies, and remote state management for environment scalability."
    ],
    keyLearning: "This project provided deep practical understanding of how complex cloud environments can be standardized, version-controlled, and automated using Terraform instead of error-prone manual portal creation.",
    githubUrl: "https://github.com/Pankajyadav113/Terraform_Practice"
  },
  {
    id: "docker-nginx-deployment",
    title: "Dockerized NGINX Web Server",
    shortDescription: "Containerized application deployment with optimized Dockerfiles, volume persistence, and custom NGINX configurations on Azure VM.",
    fullOverview: "Containerized and deployed a static website using Docker and NGINX on Ubuntu server environments. Created custom Docker container configurations following best practices for image size, security scanning, volume binding, and NGINX web server proxying.",
    technologies: ["Docker", "NGINX", "Linux", "Ubuntu", "Azure VM", "Bash"],
    category: "container",
    featured: true,
    keyImplementation: [
      "Wrote optimized Dockerfiles adhering to image size and security best practices.",
      "Pulled, built, and managed Docker images efficiently.",
      "Implemented host-to-container port mapping (80:80, 8080:80).",
      "Configured file volume binding to persist static content outside container lifetimes.",
      "Troubleshot container permissions, daemon socket access, and Linux networking rules.",
      "Deployed and verified live containerized Nginx instances on Azure Virtual Machines."
    ],
    keyLearning: "Developed hands-on mastery over container lifecycle, port binding, image optimization, volume persistent storage, and Linux daemon execution.",
    githubUrl: "https://github.com/Pankajyadav113/nginx-docker-project"
  },
  {
    id: "devportfoliox",
    title: "DevPortfolioX — Full-Stack DevOps Engineer Portfolio",
    shortDescription: "Full-stack DevOps portfolio platform featuring interactive CLI terminal, architecture inspector, and REST API.",
    fullOverview: "Designed and engineered a modern, full-stack DevOps portfolio system featuring a decoupled React TypeScript frontend, Tailwind CSS glassmorphic UI, interactive CLI shell simulator, and Node.js Express REST API backend with Nodemailer & MongoDB.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Vite", "Docker", "GitHub Actions"],
    category: "iac",
    featured: true,
    keyImplementation: [
      "Engineered clean modular React components with TypeScript strict type-checking.",
      "Designed futuristic floating pill navbar, theme switcher, and interactive Azure IaC topology visualizer.",
      "Built interactive DevOps CLI terminal shell supporting custom commands (`terraform plan`, `docker ps`, `kubectl get nodes`).",
      "Developed Express.js REST API endpoints (`/api/contact`, `/health`)."
    ],
    keyLearning: "Mastered full-stack DevOps application architecture, modular component design, and API integration.",
    githubUrl: "https://github.com/Pankajyadav113/DevPortfolioX"
  },
  {
    id: "github-actions-cicd",
    title: "GitHub Actions CI/CD Pipeline",
    shortDescription: "Automated CI/CD pipeline to install dependencies, run lint checks, build React application, and validate Docker image creation on push.",
    fullOverview: "Implemented a Continuous Integration (CI) pipeline using GitHub Actions to automatically install dependencies, build the React application, run code checks, and validate Docker image creation on every push.",
    technologies: ["GitHub Actions", "CI/CD", "Docker", "YAML", "GitHub"],
    category: "cicd",
    featured: true,
    keyImplementation: [
      "Configured automated GitHub Actions workflows with triggers on push and pull requests.",
      "Embedded Node.js dependency installation and build verification steps.",
      "Automated Docker image build checks to catch containerization errors early.",
      "Maintained secret parameters securely using GitHub Repository Secrets."
    ],
    keyLearning: "Gained direct hands-on experience structuring automated CI/CD pipelines to catch build regressions early in release workflows.",
    githubUrl: "https://github.com/Pankajyadav113/DevPortfolioX"
  },
  {
    id: "kubernetes-monitoring",
    title: "Kubernetes Monitoring Stack (Prometheus & Grafana)",
    shortDescription: "Containerized Kubernetes cluster deployment with Prometheus metrics collection and Grafana telemetry dashboards.",
    fullOverview: "Building a Kubernetes monitoring stack leveraging Prometheus and Grafana for cluster metric collection, pod health telemetry, and time-series performance dashboards.",
    technologies: ["Kubernetes", "Prometheus", "Grafana", "YAML", "Docker"],
    category: "monitoring",
    featured: false,
    keyImplementation: [
      "Created Kubernetes manifests (Deployment, Service, ConfigMap, Ingress) for cluster workloads.",
      "Configured Prometheus scraping jobs for node exporter and application metrics.",
      "Imported custom Grafana dashboards for visual cluster resource utilization monitoring."
    ],
    keyLearning: "Acquired real-world experience in Kubernetes resource management, pod networking, and telemetry observability.",
    githubUrl: "https://github.com/Pankajyadav113/DevPortfolioX"
  },
  {
    id: "devsecops-pipeline",
    title: "DevSecOps Security Pipeline",
    shortDescription: "Integrated security scanning into pipeline using Trivy, Checkov, and SonarQube for container and IaC vulnerability detection.",
    fullOverview: "Learning DevSecOps best practices by integrating Trivy, Checkov, and SonarQube for container image vulnerability scanning, Infrastructure as Code security static analysis, and code quality checks.",
    technologies: ["Trivy", "Checkov", "SonarQube", "DevSecOps", "Docker", "Terraform"],
    category: "cicd",
    featured: false,
    keyImplementation: [
      "Integrated Trivy container image scanner to block deployment of images with critical vulnerabilities.",
      "Used Checkov for static analysis of Terraform IaC manifests.",
      "Executed SonarQube code quality inspections."
    ],
    keyLearning: "Understood shift-left security principles in modern DevOps delivery.",
    githubUrl: "https://github.com/Pankajyadav113/DevPortfolioX"
  },
  {
    id: "jenkins-cicd-pipeline",
    title: "Jenkins CI/CD Pipeline Automation",
    shortDescription: "Automated Jenkins pipeline script with stages for build, test, Docker image creation, and automated deployment.",
    fullOverview: "Building a Jenkins-based Continuous Integration and Continuous Deployment pipeline with automated build, testing, Docker image packaging, and deployment workflows using Jenkinsfile syntax.",
    technologies: ["Jenkins", "CI/CD", "Groovy", "Linux", "Docker"],
    category: "cicd",
    featured: false,
    keyImplementation: [
      "Wrote declarative Jenkinsfile pipelines defining multi-stage build processes.",
      "Configured Jenkins webhooks to trigger automated builds upon code commits.",
      "Managed environment credentials securely within Jenkins credentials manager."
    ],
    keyLearning: "Mastered Jenkins job configuration, agent execution, and pipeline stage orchestration.",
    githubUrl: "https://github.com/Pankajyadav113/DevPortfolioX"
  }
];

export const ARCHITECTURE_NODES = [
  {
    id: "vnet",
    name: "Azure VNet (10.0.0.0/16)",
    type: "Network",
    icon: "Network",
    description: "Isolated virtual network containing all cloud subnets and resource groups."
  },
  {
    id: "public-subnet",
    name: "Public Subnet (10.0.1.0/24)",
    type: "Subnet",
    icon: "Globe",
    description: "Hosts public facing Azure Load Balancer, Application Gateway & Bastion subnet."
  },
  {
    id: "private-subnet",
    name: "Private Subnet (10.0.2.0/24)",
    type: "Subnet",
    icon: "Lock",
    description: "Secure internal subnet hosting backend Linux Azure VMs."
  },
  {
    id: "nsg",
    name: "Network Security Group",
    type: "Security",
    icon: "ShieldCheck",
    description: "Stateful firewall filtering HTTP (80) and HTTPS (443) traffic."
  },
  {
    id: "packer",
    name: "HashiCorp Packer Image Builder",
    type: "VM Imaging",
    icon: "Boxes",
    description: "Automated creation of hardened, standardized Azure VM base images for Dev/Test/Prod."
  },
  {
    id: "nat-gateway",
    name: "NAT Gateway",
    type: "Gateway",
    icon: "ArrowUpRight",
    description: "Allows private VMs outbound internet access without exposing inbound public IPs."
  },
  {
    id: "bastion",
    name: "Azure Bastion",
    type: "Management",
    icon: "KeyRound",
    description: "Provides browser-based TLS SSH access to internal VMs with zero public IP exposure."
  },
  {
    id: "terraform-engine",
    name: "Terraform Engine",
    type: "IaC Automation",
    icon: "FileCode",
    description: "Declarative state provider managing target Azure resources automatically."
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "DevOps Insiders",
    role: "DevOps Engineer Intern",
    period: "Dec 2025 – Present",
    location: "Remote / Hands-on Lab",
    type: "Internship",
    description: "Hands-on intensive Azure DevOps engineering training focusing on cloud infrastructure automation, custom VM imaging, containerization, and DevSecOps pipelines.",
    highlights: [
      "Built and managed Infrastructure as Code (IaC) using Terraform to automate Azure resource provisioning across environments.",
      "Designed and deployed core Azure services: Resource Groups, VNets, VMs, Storage Accounts, Load Balancers, Application Gateways, etc.",
      "Collaborated with cross-functional teams to ensure DevSecOps practices, incorporating security scans into CI/CD pipelines.",
      "Created and maintained Dockerfiles to containerize applications, following best practices for image size, security, and performance.",
      "Automated creation of custom Azure VM images using HashiCorp Packer, reducing VM provisioning time and ensuring standardized, secure base images across Dev/Test/Prod."
    ],
    tech: ["Azure", "Terraform", "Docker", "Packer", "Linux", "Git", "PowerShell", "Bash", "CI/CD"]
  }
];

export const EDUCATION_DATA = [
  {
    institution: "Dr. A P J Abdul Kalam Technical University Lucknow, Uttar Pradesh",
    degree: "Bachelor of Engineering (B.Tech)",
    field: "Information Technology",
    period: "2023 – 2027 (Expected)",
    status: "Active Student",
    description: "Focusing on DevOps methodologies, Cloud Computing, Computer Networks, Operating Systems, Data Structures, and Software Engineering."
  },
  {
    institution: "Government Inter College, Prayagraj",
    degree: "Higher Secondary School (12th)",
    field: "Science & Mathematics",
    period: "Completed 2022",
    status: "Completed",
    description: "Higher Secondary Education with focus on Physics, Chemistry, and Mathematics."
  },
  {
    institution: "B Balak Das UMV, Ghazipur",
    degree: "High School Certification (10th)",
    field: "General Science & Mathematics",
    period: "Completed 2020",
    status: "Completed",
    description: "Secondary High School Education."
  }
];

export const CERTIFICATIONS = [
  {
    title: "GenAI Course Completion",
    issuer: "Generative AI Foundations",
    description: "Gained comprehensive exposure to modern AI concepts, prompt engineering, and generative AI tool integration.",
    icon: "Sparkles"
  },
  {
    title: "Hands-on Azure DevOps Training",
    issuer: "DevOps Insiders",
    description: "Practical engineering training in Microsoft Azure, Terraform IaC, HashiCorp Packer, Docker, Linux Administration, and CI/CD pipelines.",
    icon: "Award"
  }
];

export const TERMINAL_COMMANDS: TerminalCommand[] = [
  {
    command: "help",
    description: "List all available terminal commands",
    output: [
      "Available Commands:",
      "  whoami       - Display Pankaj's core identity & title",
      "  cat bio.txt  - View professional background & overview",
      "  skills       - Print key technical skills summary",
      "  projects     - List all featured DevOps projects",
      "  terraform    - Run sample 'terraform plan' output preview",
      "  packer       - Run sample 'packer build' output preview",
      "  docker ps    - Show simulated active container processes",
      "  contact      - Display Pankaj's official email and social links",
      "  clear        - Clear terminal console screen"
    ]
  },
  {
    command: "whoami",
    description: "Display Pankaj's identity",
    output: "Pankaj Kumar Yadav | Azure DevOps Engineer (B.Tech IT)"
  },
  {
    command: "cat bio.txt",
    description: "Read bio statement",
    output: [
      "Pankaj Kumar Yadav",
      "------------------",
      "Azure DevOps Engineer with a strong foundation in cloud infrastructure and automation.",
      "Specialized in Azure (VNets, VMs, Storage, Load Balancer, App Gateway), Terraform IaC, Packer, Docker, Linux, and CI/CD.",
      "Goal: Build, automate, and maintain resilient enterprise cloud systems following DevSecOps best practices."
    ]
  },
  {
    command: "skills",
    description: "View key technical skills",
    output: [
      "Cloud Platform   : Microsoft Azure (VNets, VMs, Storage, Load Balancers, Application Gateways)",
      "Infra as Code    : Terraform (Modules, State), HashiCorp Packer (Custom VM Images)",
      "Containers       : Docker, Dockerfiles, Nginx, Port Mapping",
      "CI/CD            : Azure DevOps Pipelines, GitHub Actions, DevSecOps",
      "Operating System : Linux / Ubuntu Administration, Bash, Windows PowerShell"
    ]
  },
  {
    command: "projects",
    description: "List projects",
    output: [
      "1. [IaC]     Azure Infrastructure Automation using Terraform -> https://github.com/Pankajyadav113/AWS_Terraform_Practice",
      "2. [Docker]  Docker & Containerization Deployment Project  -> https://github.com/Pankajyadav113/nginx-docker-project",
      "3. [FullStack] DevPortfolioX Full-Stack DevOps Platform      -> https://github.com/Pankajyadav113/DevPortfolioX",
      "4. [Cloud]   Azure VM & Cloud Networking Architecture      -> https://github.com/Pankajyadav113/AWS_Terraform_Practice",
      "5. [Testing] Cloud Application Load & Capacity Testing     -> https://github.com/Pankajyadav113/nginx-docker-project"
    ]
  },
  {
    command: "terraform",
    description: "Run sample terraform plan",
    output: [
      "Terraform v1.7.5 on linux_amd64",
      "Initializing provider plugins...",
      "- Finding hashicorp/azurerm v3.95.0...",
      "Terraform has performed an in-place plan execution.",
      "",
      "Plan: 8 to add, 0 to change, 0 to destroy.",
      "  + azurerm_resource_group.rg_devops",
      "  + azurerm_virtual_network.vnet_main (10.0.0.0/16)",
      "  + azurerm_subnet.subnet_web (10.0.1.0/24)",
      "  + azurerm_network_security_group.nsg_web",
      "  + azurerm_application_gateway.app_gw",
      "  + azurerm_linux_virtual_machine.vm_nodes [for_each = var.instance_count]",
      "",
      "Apply complete! Resources: 8 added, 0 changed, 0 destroyed."
    ]
  },
  {
    command: "packer",
    description: "Run sample packer build",
    output: [
      "packer.azure-arm.ubuntu_hardened: output will be in Azure Shared Image Gallery",
      "==> azure-arm: Creating Azure Resource Group for build...",
      "==> azure-arm: Provisioning Azure VM...",
      "==> azure-arm: Running shell provisioners (installing Nginx, Docker, Azure CLI)...",
      "==> azure-arm: Deprovisioning image and clearing cloud-init...",
      "==> azure-arm: Capturing managed image 'ubuntu-hardened-v1.0'...",
      "Build 'azure-arm.ubuntu_hardened' finished after 4 minutes 12 seconds."
    ]
  },
  {
    command: "docker ps",
    description: "Show running containers",
    output: [
      "CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES",
      "f8e12d90a1b2   nginx:alpine   \"/docker-entrypoint.…\"   2 hours ago     Up 2 hours     0.0.0.0:80->80/tcp     web-nginx-prod",
      "3b7a89c42ef1   prometheus     \"/bin/prometheus --c…\"   5 hours ago     Up 5 hours     0.0.0.0:9090->9090/tcp devops-prom",
      "c19f0129a888   grafana        \"/run.sh\"                5 hours ago     Up 5 hours     0.0.0.0:3000->3000/tcp devops-grafana"
    ]
  },
  {
    command: "contact",
    description: "Display contact information",
    output: [
      "Name     : Pankaj Kumar Yadav",
      "Email    : pankaj738074@gmail.com",
      "Phone    : +91 7238922584",
      "LinkedIn : https://www.linkedin.com/in/pankajyadav113",
      "GitHub   : https://github.com/Pankajyadav113"
    ]
  }
];

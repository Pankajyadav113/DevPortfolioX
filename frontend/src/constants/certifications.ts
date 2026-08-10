export interface Certification {
  id: number;
  title: string;
  issuer: string;
  badge: string;
  duration: string;
  status: "Verified" | "Completed" | "In Progress";
  hasCertificate: boolean;
  description: string;
  certificateUrl?: string;
  verifyUrl?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Terraform for the Absolute Beginner",
    issuer: "KodeKloud • Coursera",
    badge: "HashiCorp Terraform",
    duration: "Issued Jul 2026",
    status: "Verified",
    hasCertificate: true,
    description:
      "Mastered Infrastructure as Code (IaC) principles, HCL syntax, Terraform providers, input/output variables, state file management, and hands-on lab infrastructure provisioning.",
    certificateUrl: "/certificates/Terraform_Coursera.pdf",
    verifyUrl: "https://coursera.org/verify/1MOD6SH4Q3QK",
    skills: ["Terraform", "HCL", "State Management", "Infrastructure as Code"],
  },
  {
    id: 2,
    title: "Cloud Computing Internship & Foundations",
    issuer: "IBM SkillsBuild & NASSCOM",
    badge: "IBM Cloud",
    duration: "1 Month Training",
    status: "Completed",
    hasCertificate: true,
    description:
      "Comprehensive cloud computing training program covering cloud deployment models (IaaS, PaaS, SaaS), virtualization, cloud security fundamentals, and hybrid architecture design.",
    certificateUrl: "",
    verifyUrl: "",
    skills: ["Cloud Architecture", "Virtualization", "IBM Cloud", "IaaS/PaaS"],
  },
  {
    id: 3,
    title: "DevOps Engineer Internship",
    issuer: "DevOps Insiders",
    badge: "DevOps Insiders",
    duration: "6+ Months (Ongoing)",
    status: "In Progress",
    hasCertificate: false,
    description:
      "Hands-on engineering internship managing real-world cloud infrastructures on AWS & Azure, authoring Terraform modules, containerizing microservices, and automating CI/CD pipelines.",
    certificateUrl: "",
    verifyUrl: "",
    skills: ["Azure", "AWS", "Docker", "CI/CD", "Linux Automation"],
  },
];

export default certifications;
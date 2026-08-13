import React, { useState } from 'react';
import { ARCHITECTURE_NODES } from '../../data/portfolioData';
import { Network, Globe, Lock, ShieldCheck, Boxes, ArrowUpRight, KeyRound, FileCode, CheckCircle2, Info, Sparkles } from 'lucide-react';

export const ArchitectureVisualizer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('vnet');

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network': return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-amber-400" />;
      case 'ArrowUpRight': return <ArrowUpRight className="w-5 h-5 text-teal-400" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5 text-indigo-400" />;
      default: return <FileCode className="w-5 h-5 text-rose-400" />;
    }
  };

  const selectedNode = ARCHITECTURE_NODES.find(n => n.id === selectedNodeId) || ARCHITECTURE_NODES[0];

  const nodeDetails: Record<string, { cidr?: string; ports?: string; azureService?: string; terraformSnippet?: string }> = {
    'vnet': {
      cidr: '10.0.0.0/16',
      azureService: 'Microsoft Azure Virtual Network (azurerm_virtual_network)',
      terraformSnippet: 'resource "azurerm_virtual_network" "vnet" {\n  name          = "vnet-devops-prod"\n  address_space = ["10.0.0.0/16"]\n}'
    },
    'public-subnet': {
      cidr: '10.0.1.0/24',
      ports: '80 (HTTP), 443 (HTTPS)',
      azureService: 'Azure Subnet (Public Web Tier)',
      terraformSnippet: 'resource "azurerm_subnet" "public" {\n  name                 = "snet-public"\n  address_prefixes     = ["10.0.1.0/24"]\n}'
    },
    'private-subnet': {
      cidr: '10.0.2.0/24',
      ports: 'Internal Only (No Inbound Public IP)',
      azureService: 'Azure Subnet (Private Compute Tier)',
      terraformSnippet: 'resource "azurerm_subnet" "private" {\n  name                 = "snet-private"\n  address_prefixes     = ["10.0.2.0/24"]\n}'
    },
    'nsg': {
      ports: 'Allow Inbound 80/443, Deny Inbound SSH public',
      azureService: 'Azure Network Security Group (azurerm_network_security_group)',
      terraformSnippet: 'resource "azurerm_network_security_group" "nsg" {\n  name = "nsg-web-prod"\n}'
    },
    'packer': {
      azureService: 'HashiCorp Packer Image Builder + Shared Image Gallery',
      terraformSnippet: 'source "azure-arm" "ubuntu" {\n  managed_image_name = "ubuntu-hardened-v1.0"\n}'
    },
    'nat-gateway': {
      azureService: 'Azure NAT Gateway (azurerm_nat_gateway)',
      terraformSnippet: 'resource "azurerm_nat_gateway" "nat" {\n  name = "nat-outbound-prod"\n}'
    },
    'bastion': {
      ports: '443 TLS (Browser-based SSH)',
      azureService: 'Azure Bastion Host (azurerm_bastion_host)',
      terraformSnippet: 'resource "azurerm_bastion_host" "bastion" {\n  name = "bastion-mgr"\n}'
    },
    'terraform-engine': {
      azureService: 'Terraform CLI + azurerm Provider v3.95',
      terraformSnippet: 'terraform {\n  required_providers {\n    azurerm = { source = "hashicorp/azurerm" }\n  }\n}'
    }
  };

  const details = nodeDetails[selectedNodeId] || {};

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            Cloud IaC Topology Inspector
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Azure VNet <span className="text-cyan-500">Architecture Visualizer</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Click any cloud resource node below to inspect real-time specs, security rules, and Terraform code snippets.
          </p>
        </div>

        {/* Visualizer Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Topology Node Buttons */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-400 shadow-sm font-semibold">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Topology Map: Azure VNet / Terraform IaC
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">8 Active Nodes</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ARCHITECTURE_NODES.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer space-y-2 group ${
                    selectedNodeId === node.id
                      ? 'bg-cyan-50 dark:bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-500'
                      : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900/80 hover:border-slate-300 shadow-sm dark:shadow-none'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getNodeIcon(node.icon)}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {node.type}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {node.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5 font-medium">
                      {node.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Node Inspector Details Panel */}
          <div className="lg:col-span-5 rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-cyan-500/40 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-cyan-500/30 flex items-center justify-center">
                  {getNodeIcon(selectedNode.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{selectedNode.name}</h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{selectedNode.type} Node</span>
                </div>
              </div>
              <Info className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-medium">
              <div>
                <span className="text-slate-600 dark:text-slate-400 block text-xs font-mono uppercase font-bold mb-1">Description</span>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  {selectedNode.description}
                </p>
              </div>

              {details.azureService && (
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block text-xs font-mono uppercase font-bold mb-1">Azure Service / Component</span>
                  <div className="text-cyan-800 dark:text-cyan-300 font-mono text-xs bg-cyan-50 dark:bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-200 dark:border-cyan-900/60 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>{details.azureService}</span>
                  </div>
                </div>
              )}

              {details.cidr && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400 font-mono text-xs">Subnet Address Range:</span>
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">{details.cidr}</span>
                </div>
              )}

              {details.ports && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400 font-mono text-xs">Network Security Ports:</span>
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">{details.ports}</span>
                </div>
              )}

              {details.terraformSnippet && (
                <div>
                  <span className="text-slate-600 dark:text-slate-400 block text-xs font-mono uppercase font-bold mb-1">Terraform HCL Snippet</span>
                  <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto">
                    {details.terraformSnippet}
                  </pre>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ArchitectureVisualizer;

import React, { useState } from 'react';
import { SKILL_CARDS_DATA, type SkillCardItem } from '../../data/portfolioData';
import { Cloud, FileCode, Boxes, Network, Container, Server, Workflow, GitBranch, Terminal, Code2, Activity, Cpu, Search } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Stack' },
    { id: 'cloud', name: 'Cloud Architecture' },
    { id: 'iac', name: 'IaC & Automation' },
    { id: 'container', name: 'Containers' },
    { id: 'cicd', name: 'CI/CD & Git' },
    { id: 'os', name: 'OS & Scripting' },
    { id: 'monitoring', name: 'Monitoring' }
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'FileCode': return <FileCode className="w-6 h-6 text-purple-400" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-purple-400" />;
      case 'Network': return <Network className="w-6 h-6 text-blue-400" />;
      case 'Container': return <Container className="w-6 h-6 text-sky-400" />;
      case 'Server': return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-teal-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-amber-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-green-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-rose-400" />;
      default: return <Cpu className="w-6 h-6 text-teal-400" />;
    }
  };

  const filteredSkills = SKILL_CARDS_DATA.filter((skill: SkillCardItem) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            Technical Stack & Expertise Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            DevOps & Cloud <span className="text-cyan-500">Skills Catalog</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Categorized overview of hands-on tools, frameworks, cloud services, and automation utilities.
          </p>
        </div>

        {/* Filter Controls: Search Input + Category Tabs */}
        <div className="space-y-6">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Terraform, Docker, Azure, Linux)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 shadow-sm transition-colors font-medium"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                    : 'bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 shadow-md dark:shadow-none transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-extrabold uppercase border ${
                    skill.levelBadge === 'Advanced' 
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30' 
                      : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  }`}>
                    {skill.levelBadge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>Category: {skill.category.toUpperCase()}</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Hands-on Verified</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No matching skills found for "{searchQuery}". Try clearing search filter.
          </div>
        )}

      </div>
    </section>
  );
};

export default TechStack;
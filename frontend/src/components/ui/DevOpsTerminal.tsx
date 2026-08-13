import React, { useState, useEffect, useRef } from 'react';
import { TERMINAL_COMMANDS, PERSONAL_INFO } from '../../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Play } from 'lucide-react';

interface DevOpsTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: string | string[];
  timestamp: string;
}

export const DevOpsTerminal: React.FC<DevOpsTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: [
        `DevOps Interactive Shell v2.4 — Logged in as ${PERSONAL_INFO.name}`,
        'Type "help" or click any shortcut below to execute CLI commands.'
      ],
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleRunCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const matchedCmd = TERMINAL_COMMANDS.find(c => c.command.toLowerCase() === trimmed);
    let outputData: string | string[] = '';

    if (matchedCmd) {
      outputData = matchedCmd.output;
    } else {
      outputData = `bash: command not found: "${trimmed}". Type "help" to see available commands.`;
    }

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdText,
        output: outputData,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
    setInputVal('');
  };

  const quickCmds = ['help', 'whoami', 'cat bio.txt', 'skills', 'projects', 'terraform', 'packer', 'docker ps', 'contact'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-4xl bg-[#090D16] border border-cyan-900/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isExpanded ? 'h-[90vh]' : 'h-[600px]'
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#0F172A] border-b border-slate-800 px-4 py-3 flex items-center justify-between select-none">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setHistory([])} title="Clear Screen" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Expand window" />
            <span className="ml-3 font-mono text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              pankaj@azure-devops-node:~
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Pills Bar */}
        <div className="bg-[#0B101D] border-b border-slate-800/80 px-4 py-2 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider font-bold">Shortcuts:</span>
          {quickCmds.map(cmd => (
            <button
              key={cmd}
              onClick={() => handleRunCommand(cmd)}
              className="px-2.5 py-1 rounded bg-slate-900 border border-cyan-900/40 text-cyan-400 hover:bg-cyan-950 hover:border-cyan-500 font-mono font-medium transition-all shrink-0 flex items-center gap-1"
            >
              <Play className="w-2.5 h-2.5 text-emerald-400" />
              {cmd}
            </button>
          ))}
        </div>

        {/* Output Console Body */}
        <div className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-4 text-slate-200 bg-[#090D16]">
          {history.map(item => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center text-cyan-400 font-semibold space-x-2">
                <span className="text-emerald-400">pankaj@devops:~$</span>
                <span>{item.command}</span>
                <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
              </div>
              {Array.isArray(item.output) ? (
                <div className="pl-4 text-slate-300 space-y-1 border-l-2 border-slate-800">
                  {item.output.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap">{line}</div>
                  ))}
                </div>
              ) : (
                <div className="pl-4 text-slate-300 whitespace-pre-wrap border-l-2 border-slate-800">
                  {item.output}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRunCommand(inputVal);
          }}
          className="bg-[#0D1322] border-t border-slate-800 px-4 py-3 flex items-center space-x-2"
        >
          <span className="text-emerald-400 font-mono font-bold text-sm">pankaj@devops:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'skills', 'projects', 'terraform', 'clear')..."
            className="flex-1 bg-transparent text-slate-100 font-mono text-sm focus:outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-colors"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

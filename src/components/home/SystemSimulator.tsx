import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Send, Bell, CheckCircle, Database, Cpu, MessageSquare, ArrowRight, Smartphone } from 'lucide-react';

export function SystemSimulator() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'automation' | 'mobile'>('pipeline');

  // Lead Pipeline Form Simulation State
  const [formData, setFormData] = useState({ name: '', email: '', budget: '$5k - $10k', service: 'Web App' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Automation Flow Simulation State
  const [isSimulatingNode, setIsSimulatingNode] = useState(false);
  const [activeNode, setActiveNode] = useState<number>(-1);
  const [automationLogs, setAutomationLogs] = useState<string[]>([]);

  // Mobile App simulator state
  const [mobileBalance, setMobileBalance] = useState(12450.00);
  const [mobileIsLoading, setMobileIsLoading] = useState(false);
  const [mobileTransactions, setMobileTransactions] = useState([
    { id: 1, type: 'Data Vending', amount: -2500, time: 'Just now', status: 'Success' },
    { id: 2, type: 'Wallet Funding', amount: 5000, time: '2 mins ago', status: 'Success' },
  ]);

  const handlePipelineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', budget: '$5k - $10k', service: 'Web App' });
      }, 5000);
    }, 1500);
  };

  const runAutomationSimulation = () => {
    if (isSimulatingNode) return;
    setIsSimulatingNode(true);
    setAutomationLogs([]);
    
    const steps = [
      { node: 0, log: '📥 Triggers: New customer form submitted' },
      { node: 1, log: '⚙️ Parsing request: Initializing Norstack core backend routing API' },
      { node: 2, log: '💼 CRM logged: Lead synced to Enterprise Hub database' },
      { node: 3, log: '📱 Client feedback: Sending localized WhatsApp/Email thank-you confirmation' },
      { node: 4, log: '🔔 Team alert: Direct Slack channel notification pushed to Sales' },
    ];

    let currentStep = 0;
    const runStep = () => {
      if (currentStep < steps.length) {
        setActiveNode(steps[currentStep].node);
        setAutomationLogs(prev => [...prev, steps[currentStep].log]);
        currentStep++;
        setTimeout(runStep, 1200);
      } else {
        setTimeout(() => {
          setIsSimulatingNode(false);
          setActiveNode(-1);
        }, 1500);
      }
    };
    runStep();
  };

  const handleMobileRefetch = () => {
    if (mobileIsLoading) return;
    setMobileIsLoading(true);
    setTimeout(() => {
      setMobileBalance(prev => prev + 15000);
      setMobileTransactions(prev => [
        { id: Date.now(), type: 'Instant Deposit', amount: 15000, time: 'Just now', status: 'Success' },
        ...prev
      ]);
      setMobileIsLoading(false);
    }, 1200);
  };

  const handleBuyDataSim = () => {
    if (mobileIsLoading || mobileBalance < 1200) return;
    setMobileIsLoading(true);
    setTimeout(() => {
      setMobileBalance(prev => prev - 1200);
      setMobileTransactions(prev => [
        { id: Date.now(), type: 'SME Data Vending', amount: -1200, time: 'Just now', status: 'Success' },
        ...prev
      ]);
      setMobileIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-brand-surface1 border-y border-brand-border1 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-gold/60"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                Live Simulator
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-text1 leading-[1.1] tracking-tight">
              See Our Systems <br />
              <span className="font-editorial text-brand-gold font-normal italic">In Active Play</span>
            </h2>
          </div>

          {/* Custom Tabs */}
          <div className="flex flex-wrap bg-brand-bg/60 p-1.5 rounded-full border border-brand-border1 backdrop-blur-md">
            {[
              { id: 'pipeline', label: 'Lead Pipeline', icon: Send },
              { id: 'automation', label: 'Smart Automation', icon: Cpu },
              { id: 'mobile', label: 'Mobile App Frame', icon: Smartphone }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-500 ease-lux ${
                    activeTab === tab.id
                      ? 'bg-brand-gold text-brand-bg shadow-lg shadow-brand-gold/25'
                      : 'text-brand-text2 hover:text-brand-text1'
                  }`}
                >
                  <Icon size={13} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch min-h-[500px]">
          
          {/* Left panel: Controlling context */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-brand-surface2/60 border border-brand-border1 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[40px] rounded-full group-hover:bg-brand-gold/10 transition-colors duration-500" />
            
            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[9px] font-bold rounded-full uppercase tracking-wider">
                <Sparkles size={10} /> Fully Interactive
              </span>
              
              <AnimatePresence mode="wait">
                {activeTab === 'pipeline' && (
                  <motion.div
                    key="pipeline-desc"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl font-heading font-extrabold text-brand-text1">
                      Conversion-Optimized Sales Pipeline
                    </h3>
                    <p className="text-sm text-brand-text2 leading-relaxed">
                      Experience our premium, ultra-fast React submission client. We design form-flow funnels that reduce friction, optimize conversion, and record lead metrics in sub-100ms speeds.
                    </p>
                    <ul className="text-xs text-brand-text3 space-y-2 mt-4">
                      <li className="flex items-center gap-2 text-brand-text2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Sub-second load times
                      </li>
                      <li className="flex items-center gap-2 text-brand-text2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Progressive data-fill inputs
                      </li>
                      <li className="flex items-center gap-2 text-brand-text2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Auto-qualification triggers
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'automation' && (
                  <motion.div
                    key="automation-desc"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl font-heading font-extrabold text-brand-text1">
                      Event-Driven Process Automation
                    </h3>
                    <p className="text-sm text-brand-text2 leading-relaxed">
                      Eliminate hours of manual data sync. Our custom-coded pipelines connect client-facing portals directly with CRM databases, Slack notification systems, and customized messaging scripts.
                    </p>
                    <button
                      onClick={runAutomationSimulation}
                      disabled={isSimulatingNode}
                      className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 bg-brand-text1 hover:bg-brand-gold text-brand-bg text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
                    >
                      <Play size={13} fill="currentColor" /> {isSimulatingNode ? 'Running Automation...' : 'Trigger Simulation'}
                    </button>
                  </motion.div>
                )}

                {activeTab === 'mobile' && (
                  <motion.div
                    key="mobile-desc"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl font-heading font-extrabold text-brand-text1">
                      Premium Mobile SaaS Platforms
                    </h3>
                    <p className="text-sm text-brand-text2 leading-relaxed">
                      High-fidelity, lightning-fast native & hybrid application simulations. Check out how we design fluid wallet management, real-time transaction reporting, and responsive service vending triggers.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <button
                        onClick={handleMobileRefetch}
                        disabled={mobileIsLoading}
                        className="py-3 bg-brand-surface3 hover:bg-brand-surface2 border border-brand-border1 hover:border-brand-gold/40 text-brand-text1 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
                      >
                        Fund Wallet (+15k)
                      </button>
                      <button
                        onClick={handleBuyDataSim}
                        disabled={mobileIsLoading || mobileBalance < 1200}
                        className="py-3 bg-brand-gold text-brand-bg hover:bg-brand-goldHi text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
                      >
                        Buy Data (1.2k)
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-8 border-t border-brand-border1/60 relative z-10 flex items-center justify-between text-brand-text3 text-[10px] uppercase font-bold tracking-widest mt-8">
              <span>Status: Active</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Node Online
              </span>
            </div>
          </div>

          {/* Right panel: Live simulator stage */}
          <div className="lg:col-span-8 bg-brand-bg border border-brand-border1 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-[480px]">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <AnimatePresence mode="wait">
              {/* Tab 1: Lead Pipeline Client */}
              {activeTab === 'pipeline' && (
                <motion.div
                  key="pipeline-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-lg bg-brand-surface2/60 border border-brand-border1 rounded-2xl p-6 md:p-8 shadow-2xl relative"
                >
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] text-brand-text3 font-bold tracking-widest uppercase">
                      Norstack Core - Sandbox Form
                    </span>
                  </div>

                  {!submitSuccess ? (
                    <form onSubmit={handlePipelineSubmit} className="space-y-5">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text3 mb-2">
                          Client Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g. Adebayo Musa"
                          className="w-full bg-brand-bg border border-brand-border1 rounded-xl px-4 py-3 text-sm text-brand-text1 focus:border-brand-gold outline-none transition-colors"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text3 mb-2">
                            Work Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="e.g. adebayo@grow.co"
                            className="w-full bg-brand-bg border border-brand-border1 rounded-xl px-4 py-3 text-sm text-brand-text1 focus:border-brand-gold outline-none transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text3 mb-2">
                            Select Service
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                            className="w-full bg-brand-bg border border-brand-border1 rounded-xl px-4 py-3 text-sm text-brand-text1 focus:border-brand-gold outline-none transition-colors appearance-none"
                          >
                            <option>Web Development</option>
                            <option>Custom Software</option>
                            <option>Mobile SaaS App</option>
                            <option>Brand Identity</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 py-4 bg-brand-gold hover:bg-brand-goldHi text-brand-bg font-extrabold uppercase text-xs tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-brand-gold/15"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-brand-bg border-t-transparent rounded-full animate-spin" />
                            Locking in submission...
                          </>
                        ) : (
                          <>
                            Submit Sandbox Lead <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/25 animate-bounce">
                        <CheckCircle size={32} />
                      </div>
                      <h4 className="text-2xl font-heading font-extrabold text-brand-text1">
                        Form Successfully Transmitted!
                      </h4>
                      <p className="text-sm text-brand-text2 max-w-sm mx-auto">
                        In under <span className="text-brand-gold font-bold">12ms</span>, the lead data has been encrypted and piped to our backend queues. Triggering automation node...
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={() => {
                            setActiveTab('automation');
                            runAutomationSimulation();
                          }}
                          className="px-6 py-2.5 bg-brand-surface3 hover:bg-brand-surface2 border border-brand-border1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-gold transition-colors duration-300"
                        >
                          Step 2: Run Flow Automation &rarr;
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Tab 2: Automation flow map */}
              {activeTab === 'automation' && (
                <motion.div
                  key="automation-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-2xl flex flex-col space-y-8"
                >
                  {/* Nodes Row */}
                  <div className="grid grid-cols-5 gap-3 relative md:px-4">
                    
                    {/* Visual Line Overlay */}
                    <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-brand-border2 -translate-y-1/2 z-0">
                      <motion.div
                        className="h-full bg-brand-gold"
                        initial={{ width: '0%' }}
                        animate={{
                          width: isSimulatingNode
                            ? `${(activeNode / 4) * 100}%`
                            : '0%'
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      />
                    </div>

                    {[
                      { icon: Send, label: 'Form Input', step: 0 },
                      { icon: Cpu, label: 'API Router', step: 1 },
                      { icon: Database, label: 'CRM Sync', step: 2 },
                      { icon: MessageSquare, label: 'Alert Push', step: 3 },
                      { icon: Bell, label: 'Slack Pushed', step: 4 },
                    ].map((node) => {
                      const Icon = node.icon;
                      const isCompleted = activeNode >= node.step;
                      const isCurrent = activeNode === node.step;
                      
                      return (
                        <div key={node.step} className="flex flex-col items-center relative z-10 space-y-3">
                          <motion.div
                            animate={{
                              scale: isCurrent ? 1.15 : 1,
                              boxShadow: isCurrent ? '0 0 25px rgba(0, 210, 255, 0.5)' : 'none'
                            }}
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border transition-colors duration-500 ${
                              isCurrent
                                ? 'bg-brand-gold border-brand-gold text-brand-bg'
                                : isCompleted
                                ? 'bg-brand-surface2 border-brand-gold/60 text-brand-gold'
                                : 'bg-brand-surface1 border-brand-border1 text-brand-text3'
                            }`}
                          >
                            <Icon size={18} />
                          </motion.div>
                          <span className={`text-[8px] md:text-[10px] uppercase font-bold tracking-wider text-center ${
                            isCurrent ? 'text-brand-gold' : isCompleted ? 'text-brand-text1' : 'text-brand-text3'
                          }`}>
                            {node.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Scrolling terminal window */}
                  <div className="bg-brand-surface2/60 border border-brand-border1 rounded-2xl p-5 font-mono text-xs text-brand-text2 h-56 flex flex-col justify-end overflow-hidden shadow-inner relative">
                    <div className="absolute top-3 left-4 text-[9px] font-bold text-brand-text3 uppercase tracking-wider">
                      Live Transaction Routing Monitor
                    </div>
                    
                    <div className="space-y-2 overflow-y-auto max-h-[160px] pr-2 scrollbar-none flex flex-col justify-end">
                      {automationLogs.length === 0 ? (
                        <div className="text-brand-text3 italic text-center py-10">
                          Waiting for trigger event... Click 'Trigger Simulation' to begin routing pipeline logs.
                        </div>
                      ) : (
                        automationLogs.map((log, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`flex items-start gap-2 border-l-2 py-0.5 pl-3 ${
                              index === automationLogs.length - 1 ? 'border-brand-gold text-brand-text1' : 'border-brand-border2 text-brand-text3'
                            }`}
                          >
                            <span className="text-brand-gold">&gt;</span>
                            <span>{log}</span>
                          </motion.div>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Mobile App Simulator */}
              {activeTab === 'mobile' && (
                <motion.div
                  key="mobile-screen"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="relative w-[280px] h-[520px] bg-[#0A0D14] border-4 border-brand-border2 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                >
                  {/* Phone Speaker & Camera Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-border2 rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-12 h-1 bg-[#141C26] rounded-full mr-2" />
                    <div className="w-2.5 h-2.5 bg-[#141C26] rounded-full" />
                  </div>

                  {/* Phone Header Status Bar */}
                  <div className="pt-7 px-6 pb-2 flex items-center justify-between text-[8px] font-bold text-brand-text3 select-none">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span>5G</span>
                      <div className="w-4 h-2 bg-brand-text3/30 border border-brand-text3/50 rounded-sm p-[1px] flex">
                        <div className="h-full w-4/5 bg-brand-text1 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Screen App Body */}
                  <div className="flex-grow flex flex-col p-4 space-y-4 overflow-y-auto hide-scrollbar relative">
                    
                    {/* Simulated App Bar */}
                    <div className="flex items-center justify-between select-none">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-[10px] font-bold text-brand-gold">
                          NS
                        </div>
                        <div>
                          <div className="text-[9px] font-extrabold text-brand-text1 leading-tight">Norstack Pay</div>
                          <div className="text-[7px] text-brand-text3 leading-none uppercase tracking-wider">Abuja Developer Sandbox</div>
                        </div>
                      </div>
                      <div className="relative">
                        <Bell size={12} className="text-brand-text3" />
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      </div>
                    </div>

                    {/* App Balance Card */}
                    <div className="bg-gradient-to-br from-brand-surface3 to-[#0E1520] border border-brand-border1 rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="text-[7px] font-extrabold text-brand-text3 uppercase tracking-widest mb-1">
                        Total Balance Available
                      </div>
                      <div className="text-xl font-heading font-extrabold text-brand-text1 flex items-baseline gap-1">
                        {mobileIsLoading ? (
                          <span className="text-xs text-brand-text3">Updating balances...</span>
                        ) : (
                          <>
                            <span className="text-xs text-brand-gold">₦</span>
                            <span>{mobileBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-[7px] font-bold text-brand-text2 mt-4 pt-3 border-t border-brand-border1/60">
                        <span>API Status: Live Vending</span>
                        <span className="text-brand-gold font-extrabold">Active Node</span>
                      </div>
                    </div>

                    {/* Quick Services Buttons */}
                    <div className="space-y-2">
                      <div className="text-[8px] font-bold text-brand-text3 uppercase tracking-wider">
                        Sandbox Service Vending
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={handleBuyDataSim}
                          disabled={mobileIsLoading || mobileBalance < 1200}
                          className="bg-brand-surface2 hover:bg-brand-surface3 border border-brand-border1 rounded-xl p-2.5 flex flex-col items-center justify-center text-center transition-colors disabled:opacity-40"
                        >
                          <span className="text-[8px] font-bold text-brand-text1">SME Data (1.2 GB)</span>
                          <span className="text-[7px] text-brand-gold font-extrabold mt-1">₦1,200.00</span>
                        </button>
                        <button
                          onClick={handleMobileRefetch}
                          disabled={mobileIsLoading}
                          className="bg-brand-surface2 hover:bg-brand-surface3 border border-brand-border1 rounded-xl p-2.5 flex flex-col items-center justify-center text-center transition-colors disabled:opacity-40"
                        >
                          <span className="text-[8px] font-bold text-brand-text1">Sandbox Top Up</span>
                          <span className="text-[7px] text-brand-gold font-extrabold mt-1">₦15,000.00</span>
                        </button>
                      </div>
                    </div>

                    {/* Transaction History */}
                    <div className="flex-grow flex flex-col min-h-[140px] space-y-2">
                      <div className="text-[8px] font-bold text-brand-text3 uppercase tracking-wider flex items-center justify-between">
                        <span>Transaction Ledger</span>
                        <span className="text-[7px] text-brand-gold select-none cursor-pointer">View All</span>
                      </div>

                      <div className="flex-grow bg-brand-surface2/50 border border-brand-border1/60 rounded-2xl p-2 space-y-2 max-h-[150px] overflow-y-auto hide-scrollbar">
                        {mobileTransactions.map((tx) => (
                          <div key={tx.id} className="flex items-center justify-between border-b border-brand-border1/40 pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0">
                            <div>
                              <div className="text-[8px] font-bold text-brand-text1">{tx.type}</div>
                              <div className="text-[6px] text-brand-text3 mt-0.5">{tx.time}</div>
                            </div>
                            <div className="text-right">
                              <div className={`text-[8px] font-extrabold ${tx.amount > 0 ? 'text-emerald-500' : 'text-brand-text1'}`}>
                                {tx.amount > 0 ? '+' : ''}₦{tx.amount.toLocaleString()}
                              </div>
                              <div className="text-[5px] text-emerald-400 font-bold uppercase mt-0.5 tracking-wider">
                                {tx.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone Bottom Gesture Bar */}
                  <div className="h-6 w-full flex items-end justify-center pb-2 select-none z-20">
                    <div className="w-24 h-1 bg-brand-text3/50 rounded-full" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  AlertTriangle, 
  Briefcase, 
  EyeOff, 
  BarChart2,
  DollarSign,
  ShieldAlert,
  Zap,
  Lock
} from "lucide-react";

// --- DUMMY DATA ---
const MARKET_TICKER = [
  { asset: "KAPITAL", roe: "+4.2%", status: "VOLATILE", up: true },
  { asset: "BAUM", roe: "-1.1%", status: "STABLE", up: false },
  { asset: "VIDEO CLUB", roe: "+8.9%", status: "BULLISH", up: true },
  { asset: "THEATRON", roe: "+2.4%", status: "HIGH LIQUIDITY", up: true },
  { asset: "OCTAVA", roe: "-3.5%", status: "HIGH CAPEX", up: false },
  { asset: "RADIO STAR", roe: "+12.1%", status: "VALUE INV.", up: true },
];

const TOP_ASSETS = [
  {
    id: "theatron",
    title: "THEATRON COMPLEX",
    tier: "BLUE CHIP",
    capex: "$$$",
    ebitda: "94.2%",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: "videoclub",
    title: "VIDEO CLUB",
    tier: "GROWTH",
    capex: "$$",
    ebitda: "88.1%",
    image: "https://images.unsplash.com/photo-1558317714-db1ccce122cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: "octava",
    title: "OCTAVA",
    tier: "PREMIUM",
    capex: "$$$$",
    ebitda: "76.5%",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: "candelariapub",
    title: "CANDELARIA DIVE",
    tier: "PENNY STOCK",
    capex: "$",
    ebitda: "120.4%",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-2 md:row-span-1",
  },
];

const RISKS = [
  { level: "CONSERVATIVE", name: "BBC Pubs", volatility: "Low", yield: "Steady", icon: Briefcase, color: "text-gray-400" },
  { level: "MODERATE", name: "Zona T Rooftops", volatility: "Medium", yield: "Variable", icon: Activity, color: "text-yellow-500" },
  { level: "SPECULATIVE", name: "Underground Raves", volatility: "Extreme", yield: "Uncapped", icon: AlertTriangle, color: "text-[#D90429]" },
];

export default function LandingPage() {
  const [acidTestValue, setAcidTestValue] = useState(1.2);

  // Simple interval to simulate real-time data changes in the Acid Test
  useEffect(() => {
    const interval = setInterval(() => {
      setAcidTestValue((prev) => +(prev + (Math.random() * 0.1 - 0.05)).toFixed(2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-[#00D964] selection:text-[#0A0A0A] overflow-hidden">
      
      {/* 1. LIVE MARKET TICKER */}
      <div className="w-full bg-black border-b border-[#222] py-2 overflow-hidden flex items-center z-50 relative">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...MARKET_TICKER, ...MARKET_TICKER, ...MARKET_TICKER].map((item, i) => (
            <div key={i} className="flex items-center space-x-3 mx-6 font-mono text-xs tracking-wider">
              <span className="font-bold text-gray-300">[{item.asset}]</span>
              <span className={item.up ? "text-[#00D964]" : "text-[#D90429]"}>
                {item.up ? <TrendingUp size={12} className="inline mr-1" /> : <TrendingDown size={12} className="inline mr-1" />}
                {item.roe}
              </span>
              <span className="text-gray-600">({item.status})</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-block border border-[#333] px-3 py-1 mb-6 rounded-full font-mono text-xs text-gray-400">
            <Activity className="inline mr-2" size={14} /> LIVE TERMINAL
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8" style={{ fontFamily: "'Inter Black', 'Anton', sans-serif" }}>
            BOGOTÁ <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">NIGHTLIFE</span> <br/>
            INTELLIGENCE.
          </h1>
          <p className="max-w-xl text-gray-400 font-mono text-sm leading-relaxed mb-10 border-l-2 border-[#D90429] pl-4">
            El Buen ROI is a premium cultural intelligence platform. We analyze urban entertainment through strict corporate finance metrics. Stop wasting capital on bad plans. Maximize your Return on Entertainment (ROE).
          </p>
          <button className="bg-white text-black px-8 py-4 font-bold tracking-widest hover:bg-[#00D964] transition-colors uppercase text-sm">
            Initialize Dashboard
          </button>
        </motion.div>
        
        {/* Background Noise & Gradients */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#111] to-transparent z-0 pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#D90429] rounded-full mix-blend-screen filter blur-[150px] opacity-10" />
      </section>

      {/* 2. TOP PERFORMING ASSETS (BENTO GRID) */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-[#222] pb-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight">Top Performing Assets</h2>
          <span className="font-mono text-xs text-gray-500">SORT BY: EBITDA (YTD)</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {TOP_ASSETS.map((asset, i) => (
            <motion.div 
              key={asset.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden border border-[#222] bg-black ${asset.colSpan}`}
            >
              <img src={asset.image} alt={asset.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500 grayscale" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="bg-black/80 backdrop-blur-sm border border-[#333] px-2 py-1 font-mono text-[10px] text-[#00D964]">
                    {asset.tier}
                  </span>
                  <BarChart2 className="text-gray-400" size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{asset.title}</h3>
                  <div className="flex space-x-4 font-mono text-xs">
                    <div>
                      <p className="text-gray-500">CAPEX</p>
                      <p className="text-white">{asset.capex}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">EBITDA</p>
                      <p className="text-[#00D964]">{asset.ebitda}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. RISK ASSESSMENT & 4. LIQUIDITY TOOL */}
      <section className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* RISK MODULE */}
        <div>
          <div className="mb-8 border-b border-[#222] pb-4 flex items-center">
            <ShieldAlert className="mr-3 text-[#D90429]" />
            <h2 className="text-2xl font-bold uppercase tracking-tight">Risk Assessment</h2>
          </div>
          <div className="space-y-4">
            {RISKS.map((risk, i) => (
              <div key={i} className="border border-[#222] p-5 bg-[#111] hover:border-[#444] transition-colors flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-3 bg-black border border-[#333] mr-4 ${risk.color}`}>
                    <risk.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm">{risk.level}</h4>
                    <p className="font-mono text-xs text-gray-500">{risk.name}</p>
                  </div>
                </div>
                <div className="text-right font-mono text-xs">
                  <p className="text-gray-500">VOL: {risk.volatility}</p>
                  <p className="text-gray-300">YLD: {risk.yield}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIQUIDITY TOOL */}
        <div>
          <div className="mb-8 border-b border-[#222] pb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="mr-3 text-[#00D964]" />
              <h2 className="text-2xl font-bold uppercase tracking-tight">La Prueba Ácida</h2>
            </div>
            <span className="font-mono text-xs text-[#00D964] animate-pulse">LIVE SYS</span>
          </div>
          <div className="bg-[#050505] border border-[#222] p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <DollarSign size={150} />
            </div>
            <p className="font-mono text-xs text-gray-400 mb-6 leading-relaxed">
              We discount mandatory minimum consumptions (Inventories) from the plan's perceived value to find true liquidity. If you can't exit the club without spending 200k, you are illiquid.
            </p>
            <div className="bg-black border border-[#333] p-4 font-mono text-sm mb-6 flex justify-center">
              <span className="text-gray-500">(Activos Corrientes - <span className="text-[#D90429]">Consumo Mínimo</span>) / Pasivos</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] text-gray-500 mb-1">MARKET AVERAGE ACID TEST</p>
                <p className="text-4xl font-mono text-white">
                  {acidTestValue.toFixed(2)}x
                </p>
              </div>
              <button className="text-xs uppercase font-bold border-b border-white hover:text-[#00D964] hover:border-[#00D964] transition-colors pb-1">
                Run Simulation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSIDER TRADING (EXCLUSIVE EVENTS) */}
      <section className="px-6 py-24 bg-black border-t border-b border-[#222]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-[#D90429]/10 text-[#D90429] border border-[#D90429]/30 px-3 py-1 mb-4 rounded font-mono text-[10px] flex items-center w-fit">
              <Lock size={12} className="mr-2" /> RESTRICTED ASSETS
            </div>
            <h2 className="text-4xl font-black uppercase mb-4">Insider Trading</h2>
            <p className="font-mono text-sm text-gray-400 max-w-md">
              Non-public offerings. Speakeasies, private after-parties, and password-protected cultural assets. Access requires high institutional trust and proof of capital.
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <div className="border border-[#333] bg-[#0A0A0A] p-6 relative group cursor-not-allowed">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                <Lock size={24} className="text-gray-500 mb-2" />
                <span className="font-mono text-xs text-gray-500">CLEARANCE REQUIRED</span>
              </div>
              <h3 className="font-bold text-lg mb-2 blur-sm">Project: Midnight</h3>
              <p className="font-mono text-xs text-gray-600 blur-sm">Location: [REDACTED]</p>
              <div className="mt-4 pt-4 border-t border-[#222] flex justify-between blur-sm">
                <span className="font-mono text-[10px]">MIN. INVESTMENT</span>
                <span className="font-mono text-[10px]">$500,000 COP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARKET SENTIMENT (VIBE CHECK) */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold uppercase tracking-tight mb-10 text-center border-b border-[#222] pb-6">
          Macroeconomic Night Sentiment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="border border-[#00D964]/30 bg-gradient-to-b from-[#00D964]/5 to-transparent p-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black text-[#00D964] uppercase">Bull Market</h3>
              <TrendingUp className="text-[#00D964]" size={32} />
            </div>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center justify-between border-b border-[#222] pb-2">
                <span className="text-gray-300">Afrobeat & Amapiano Events</span>
                <span className="text-[#00D964]">+45%</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#222] pb-2">
                <span className="text-gray-300">Listening Bars (Hi-Fi)</span>
                <span className="text-[#00D964]">+22%</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="text-gray-300">Chapinero Natural Wine Bars</span>
                <span className="text-[#00D964]">+18%</span>
              </li>
            </ul>
          </div>

          <div className="border border-[#D90429]/30 bg-gradient-to-b from-[#D90429]/5 to-transparent p-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black text-[#D90429] uppercase">Bear Market</h3>
              <TrendingDown className="text-[#D90429]" size={32} />
            </div>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center justify-between border-b border-[#222] pb-2">
                <span className="text-gray-300">Overpriced Reggaeton VIPs</span>
                <span className="text-[#D90429]">-30%</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#222] pb-2">
                <span className="text-gray-300">Generic Gastro-bars</span>
                <span className="text-[#D90429]">-15%</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="text-gray-300">Cover Charges > 50k for local DJs</span>
                <span className="text-[#D90429]">-25%</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER TICKER CSS INJECTION */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
      `}} />
    </div>
  );
}


import React from 'react';
import { LineChart, Line, ResponsiveContainer, BarChart, Bar, Cell, XAxis, Tooltip, CartesianGrid } from 'recharts';
import { Droplets, Sun, Zap, ArrowUpRight, TrendingUp, CloudSun, Sprout } from 'lucide-react';

const DataWidgets: React.FC = () => {
  const weatherData = [
    { day: 'Lun', temp: 22 }, { day: 'Mar', temp: 23 }, { day: 'Mer', temp: 21 }, 
    { day: 'Jeu', temp: 24 }, { day: 'Ven', temp: 26 }, { day: 'Sam', temp: 25 }, 
    { day: 'Dim', temp: 24 }, { day: 'Lun', temp: 23 }
  ];

  // Prix du marché export convertis en Dhs (ex: Clémentine sur Rungis ramené en prix départ station)
  const marketPrices = [
    { name: 'S38', price: 9.20 }, { name: 'S39', price: 9.95 }, { name: 'S40', price: 9.50 },
    { name: 'S41', price: 11.90 }, { name: 'S42', price: 12.40 }, { name: 'S43', price: 13.20 }, 
    { name: 'S44', price: 12.80 }, { name: 'S45', price: 13.50 }, { name: 'S46', price: 13.90 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Climate Widget */}
      <div className="bg-white p-5 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between group hover:border-amber-200 transition-colors">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Météo (Souss)</span>
            <div className="flex items-center gap-2">
              <CloudSun size={20} className="text-amber-500" />
              <span className="text-2xl font-bold text-slate-800">24°C</span>
            </div>
          </div>
          <div className="px-2 py-1 bg-amber-50 text-amber-600 rounded text-[10px] font-bold uppercase">
            Ensoleillé
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3 text-xs font-medium text-slate-500">
           <span>H: 65%</span>
           <span>V: 12 km/h</span>
           <span>UV: 6</span>
        </div>

        <div className="h-24 w-full mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weatherData}>
              <Line 
                type="monotone" 
                dataKey="temp" 
                stroke="#f59e0b" 
                strokeWidth={3} 
                dot={{ r: 2, fill: "#f59e0b" }}
                strokeOpacity={1}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Prices Widget (Updated to Dhs) */}
      <div className="bg-white p-5 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between group hover:border-sage-200 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cours Export (Dhs/Kg)</span>
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-sage-600" />
              <span className="text-2xl font-bold text-slate-800">13.90 Dhs</span>
            </div>
          </div>
           <div className="flex items-center gap-1 bg-sage-50 text-sage-700 px-1.5 py-1 rounded text-xs font-bold">
            <ArrowUpRight size={12} />
            +5.8%
          </div>
        </div>
        
        <div className="h-24 w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketPrices}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <Tooltip 
                        contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                        itemStyle={{ color: '#fff' }}
                        labelStyle={{ display: 'none' }}
                        formatter={(value: number) => [`${value} Dhs`, 'Prix']}
                    />
                    <Line type="stepAfter" dataKey="price" stroke="#38a776" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Hydric Status Widget */}
      <div className="bg-white p-5 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between group hover:border-cyan-200 transition-colors">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Irrigation (Secteur 4)</span>
            <div className="flex items-center gap-2">
              <Droplets size={20} className="text-cyan-500" />
              <span className="text-2xl font-bold text-slate-800">-12%</span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">Économie Eau</span>
        </div>

        <div className="space-y-3 mt-2">
            <div>
                <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-slate-500 flex items-center gap-1"><Sprout size={10}/> Besoins Sol</span>
                    <span className="text-slate-800">Satisfait</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-cyan-500 h-1.5 rounded-full w-[98%]"></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-slate-500">Volume Réservoir</span>
                    <span className="text-slate-800">840 m³</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-cyan-400 h-1.5 rounded-full w-[65%]"></div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default DataWidgets;

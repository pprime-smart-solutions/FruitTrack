
import React from 'react';
import { 
  Truck, Calendar, MapPin, Package, Anchor, Clock, 
  Thermometer, Droplets, FileText, CheckCircle2, AlertCircle,
  User, Settings, Save, Download, Filter, Search, Sprout, 
  TrendingUp, AlertTriangle, DollarSign, Activity, Snowflake
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area, Legend 
} from 'recharts';

// --- 1. ENTRÉES (Réception Camions) ---
export const InboundView = () => {
  // Matricules Marocains : [Numéro] - [Lettre] - [Code Région]
  // 33 = Agadir, 48 = Berkane, 6 = Casablanca, 40 = Tanger
  const trucks = [
    { id: 'REC-24-001', plate: '45892-A-33', farm: 'Domaine Ait Melloul (Secteur 3)', driver: 'Mohamed A.', time: '08:30', variety: 'Nadorcott', weight: '24.5 T', status: 'À Quai' },
    { id: 'REC-24-002', plate: '12903-B-48', farm: 'Coop. Moulouya (Berkane)', driver: 'Youssef B.', time: '09:15', variety: 'Clémentine', weight: '18.2 T', status: 'Pesée' },
    { id: 'REC-24-003', plate: '88210-A-33', farm: 'Domaine Taroudant Bio', driver: 'Brahim E.', time: '10:45', variety: 'Navel', weight: '22.0 T', status: 'En Attente' },
    { id: 'REC-24-004', plate: '67341-D-33', farm: 'Domaine Belfaa', driver: 'Omar K.', time: '11:20', variety: 'Citron Eureka', weight: '12.5 T', status: 'En Route' },
    { id: 'REC-24-005', plate: '99231-H-6', farm: 'Agri-Souss (Ouled Teima)', driver: 'Hassan L.', time: '12:00', variety: 'Nadorcott', weight: '25.0 T', status: 'Planifié' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-xs font-bold uppercase">Total Réception Jour</p>
          <p className="text-3xl font-bold text-slate-800 mt-2">102.2 <span className="text-sm text-slate-400">Tonnes</span></p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-xs font-bold uppercase">Camions Attendus</p>
          <p className="text-3xl font-bold text-sage-600 mt-2">12 <span className="text-sm text-slate-400">Véhicules</span></p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-xs font-bold uppercase">Temps Moyen Déchargement</p>
          <p className="text-3xl font-bold text-amber-500 mt-2">45 <span className="text-sm text-slate-400">Minutes</span></p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Truck className="text-slate-400" size={20} /> Pont-Bascule & Réception
          </h3>
          <button className="text-sm text-sage-600 font-bold hover:bg-sage-50 px-3 py-1 rounded-lg transition-colors">
            + Nouvelle Entrée
          </button>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
            <tr>
              <th className="px-6 py-4">Bon ID</th>
              <th className="px-6 py-4">Matricule</th>
              <th className="px-6 py-4">Origine (Domaine)</th>
              <th className="px-6 py-4">Variété</th>
              <th className="px-6 py-4">Poids Net</th>
              <th className="px-6 py-4">Heure</th>
              <th className="px-6 py-4">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {trucks.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-mono text-slate-600">{t.id}</td>
                <td className="px-6 py-4 font-bold text-slate-800">{t.plate}</td>
                <td className="px-6 py-4 text-slate-600">{t.farm}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-slate-100 rounded text-slate-600 text-xs font-bold">{t.variety}</span></td>
                <td className="px-6 py-4 font-bold">{t.weight}</td>
                <td className="px-6 py-4 text-slate-500">{t.time}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold border ${
                    t.status === 'À Quai' ? 'bg-green-50 text-green-700 border-green-200' :
                    t.status === 'Pesée' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                    'bg-slate-50 text-slate-500 border-slate-200'
                  }`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- 2. SORTIES (Logistique Export) ---
export const OutboundView = () => {
  const shipments = [
    { container: 'MSKU-903211', line: 'Maersk', dest: 'Rotterdam (NL)', etd: '24/10 (Agadir)', eta: '28/10', cargo: 'Nadorcott', pallets: 22, status: 'Chargé' },
    { container: 'CMAU-102938', line: 'CMA CGM', dest: 'Marseille (FR)', etd: '25/10 (Tanger)', eta: '27/10', cargo: 'Clémentine', pallets: 20, status: 'Douane' },
    { container: 'HLBU-554120', line: 'Hapag-Lloyd', dest: 'Hamburg (DE)', etd: '26/10 (Agadir)', eta: '01/11', cargo: 'Maroc Late', pallets: 24, status: 'Planifié' },
    { container: 'MSKU-882100', line: 'Maersk', dest: 'St. Petersburg (RU)', etd: '27/10 (Agadir)', eta: '05/11', cargo: 'Nadorcott', pallets: 22, status: 'Planifié' },
    { container: 'TGHU-772190', line: 'Trucking', dest: 'Perpignan (FR)', etd: 'Aujourd\'hui', eta: 'Demain', cargo: 'Divers', pallets: 26, status: 'En Route' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Anchor size={20}/></div>
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">Conteneurs Mer</p>
                    <p className="text-xl font-bold text-slate-800">14 <span className="text-xs font-normal">Port d'Agadir</span></p>
                </div>
            </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-50 rounded-lg text-amber-600"><Truck size={20}/></div>
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">Camions TIR</p>
                    <p className="text-xl font-bold text-slate-800">8 <span className="text-xs font-normal">via Tanger Med</span></p>
                </div>
            </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-sage-50 rounded-lg text-sage-600"><CheckCircle2 size={20}/></div>
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">Conformité</p>
                    <p className="text-xl font-bold text-slate-800">100% <span className="text-xs font-normal">Morocco Foodex</span></p>
                </div>
            </div>
        </div>
         <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-50 rounded-lg text-purple-600"><MapPin size={20}/></div>
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">Top Destination</p>
                    <p className="text-xl font-bold text-slate-800">UE (Rungis)</p>
                </div>
            </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-800">Planning Expéditions (Départ Maroc)</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                <tr>
                <th className="px-6 py-4">Conteneur N°</th>
                <th className="px-6 py-4">Armateur</th>
                <th className="px-6 py-4">Destination</th>
                <th className="px-6 py-4">ETD</th>
                <th className="px-6 py-4">ETA</th>
                <th className="px-6 py-4">Marchandise</th>
                <th className="px-6 py-4">Statut</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
                {shipments.map((s, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-medium text-slate-700">{s.container}</td>
                    <td className="px-6 py-4 text-slate-600">{s.line}</td>
                    <td className="px-6 py-4 font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-300"></span> {s.dest}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{s.etd}</td>
                    <td className="px-6 py-4 text-slate-600">{s.eta}</td>
                    <td className="px-6 py-4">{s.cargo} ({s.pallets} Pal)</td>
                    <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                            s.status === 'Chargé' ? 'bg-sage-100 text-sage-700' :
                            s.status === 'Douane' ? 'bg-yellow-100 text-yellow-700' :
                            s.status === 'En Route' ? 'bg-blue-100 text-blue-700' :
                            'bg-slate-100 text-slate-500'
                        }`}>{s.status}</span>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

// --- 3. INVENTAIRE (Stock & Frigo) ---
export const InventoryView = () => {
  const rooms = [
    { id: 'FRIGO-01', temp: '4.5°C', setpoint: '4.5°C', hum: '90%', capacity: '85%', type: 'Nadorcott', status: 'Optimal' },
    { id: 'FRIGO-02', temp: '5.2°C', setpoint: '5.0°C', hum: '88%', capacity: '40%', type: 'Clémentine', status: 'Optimal' },
    { id: 'DEVERD-A', temp: '22.0°C', setpoint: '22.0°C', hum: '95%', capacity: '100%', type: 'Maroc Late', status: 'Déverdissage (48h)' },
    { id: 'FRIGO-03', temp: '4.8°C', setpoint: '4.5°C', hum: '89%', capacity: '0%', type: 'Vide', status: 'Arrêt' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-center">
            <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm shadow-blue-200">Vue Chambres</button>
                <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">Liste Palettes</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room) => {
                // Logic to distinguish style between Cold Storage (Blue) and Degreening (Amber)
                const isDegreening = room.status.includes('Déverd');
                const isOff = room.status === 'Arrêt';
                const isCold = !isDegreening && !isOff;

                let borderClass = 'border-slate-200 shadow-sm';
                if (isDegreening) borderClass = 'border-amber-200 shadow-amber-50';
                if (isCold) borderClass = 'border-blue-200 shadow-[0_4px_20px_rgba(59,130,246,0.05)]';

                return (
                    <div key={room.id} className={`bg-white p-5 rounded-2xl border relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 ${borderClass}`}>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className="flex items-center gap-2">
                                {isDegreening ? 
                                    <SunIcon size={18} className="text-amber-600" /> : 
                                    <Snowflake size={18} className={isOff ? 'text-slate-300' : 'text-blue-500'} />
                                }
                                <h3 className="font-bold text-slate-700">{room.id}</h3>
                            </div>
                            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
                                isCold ? 'bg-blue-100 text-blue-700' :
                                isOff ? 'bg-slate-100 text-slate-400' :
                                'bg-amber-100 text-amber-700'
                            }`}>
                                {room.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-bold">Temp.</p>
                                <div className="flex items-end gap-1">
                                    <span className={`text-2xl font-bold ${isCold ? 'text-blue-900' : 'text-slate-800'}`}>{room.temp}</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-bold">Hygro.</p>
                                <div className="flex items-end gap-1">
                                    <span className={`text-2xl font-bold ${isCold ? 'text-blue-500' : 'text-cyan-600'}`}>{room.hum}</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between text-xs mb-1 font-medium">
                                <span className="text-slate-500">{room.type}</span>
                                <span className="text-slate-800">{room.capacity} Plein</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                <div className={`h-2 rounded-full transition-all duration-1000 ${
                                    parseInt(room.capacity) > 90 ? 'bg-red-500' : 
                                    (isDegreening ? 'bg-amber-500' : (isOff ? 'bg-slate-300' : 'bg-blue-500'))
                                }`} style={{ width: room.capacity }}></div>
                            </div>
                        </div>
                        
                        {/* Background deco */}
                        {isDegreening && (
                            <div className="absolute -bottom-4 -right-4 text-amber-100 opacity-50">
                                <SunIcon size={100} />
                            </div>
                        )}
                        {isCold && (
                            <div className="absolute -bottom-6 -right-6 text-blue-50 opacity-60 rotate-12">
                                <Snowflake size={110} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-4">Mouvements de Stock Récents</h3>
            <div className="space-y-3">
                {[1,2,3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-slate-200 text-slate-400 font-bold text-xs">OUT</div>
                            <div>
                                <p className="text-sm font-bold text-slate-700">Lot AG-2024-89{i} <span className="text-slate-400 font-normal">vers Zone Expédition</span></p>
                                <p className="text-xs text-slate-400">Il y a {i * 15} minutes • Opérateur: Hamid</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-slate-600">- 22 Palettes</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

// --- 4. TRAÇABILITÉ (Verger) ---
export const TraceabilityView = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
         <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                       <Sprout className="text-sage-600" /> Fiche Parcellaire: Secteur Souss 4
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">Producteur: <span className="font-bold text-slate-700">Domaine El Baraka (Sebt El Guerdane)</span> • Code GGN: <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-xs">4050123000012</span></p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200 flex items-center gap-1"><CheckCircle2 size={12}/> GlobalG.A.P.</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200 flex items-center gap-1"><CheckCircle2 size={12}/> GRASP</span>
                </div>
            </div>
            
            {/* SATELLITE MAP SIMULATION */}
            <div className="relative h-[400px] w-full bg-slate-900 group">
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Satellite Map" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Overlays */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500 mb-1">
                        <MapPin size={14} /> Localisation GPS (Maroc)
                    </div>
                    <p className="font-mono font-bold text-slate-800">30°25'41.0"N 9°03'26.0"W</p>
                    <p className="text-xs text-slate-600 font-bold mt-1">Sebt El Guerdane, Souss-Massa</p>
                </div>

                {/* Parcel Markers */}
                <div className="absolute top-1/3 left-1/4 flex flex-col items-center group/marker cursor-pointer">
                    <div className="w-4 h-4 bg-sage-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <div className="mt-2 px-3 py-1 bg-black/70 text-white text-xs rounded font-bold backdrop-blur-sm">
                        Parcelle A (Nadorcott)
                    </div>
                </div>
                
                <div className="absolute bottom-1/3 right-1/3 flex flex-col items-center group/marker cursor-pointer">
                    <div className="w-4 h-4 bg-amber-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="mt-2 px-3 py-1 bg-black/70 text-white text-xs rounded font-bold backdrop-blur-sm">
                        Parcelle B (Navel)
                    </div>
                </div>

                <div className="absolute bottom-4 right-4">
                    <button className="px-4 py-2 bg-white text-slate-800 text-sm font-bold rounded-lg shadow-lg hover:bg-slate-50 flex items-center gap-2">
                        <MapPin size={16} /> Vue Plein Écran
                    </button>
                </div>
            </div>
         </div>

         <div className="bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-800">Registre des Traitements (30 derniers jours)</h3>
            </div>
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-medium">
                    <tr>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Matière Active</th>
                        <th className="px-6 py-3">Commercial</th>
                        <th className="px-6 py-3">Dose / Ha</th>
                        <th className="px-6 py-3">DAR (Jours)</th>
                        <th className="px-6 py-3">Statut (ONSSA)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    <tr>
                        <td className="px-6 py-4">10/10/2024</td>
                        <td className="px-6 py-4 font-bold text-slate-700">Abamectine</td>
                        <td className="px-6 py-4">Vertimec</td>
                        <td className="px-6 py-4">0.75 L</td>
                        <td className="px-6 py-4">14 J</td>
                        <td className="px-6 py-4"><span className="text-sage-600 font-bold flex items-center gap-1"><CheckCircle2 size={14}/> Homologué</span></td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">25/09/2024</td>
                        <td className="px-6 py-4 font-bold text-slate-700">Spinosad</td>
                        <td className="px-6 py-4">Success 4</td>
                        <td className="px-6 py-4">1.2 L</td>
                        <td className="px-6 py-4">7 J</td>
                        <td className="px-6 py-4"><span className="text-sage-600 font-bold flex items-center gap-1"><CheckCircle2 size={14}/> Homologué Bio</span></td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">15/09/2024</td>
                        <td className="px-6 py-4 font-bold text-slate-700">Cuivre</td>
                        <td className="px-6 py-4">Nordox</td>
                        <td className="px-6 py-4">2.0 Kg</td>
                        <td className="px-6 py-4">21 J</td>
                        <td className="px-6 py-4"><span className="text-sage-600 font-bold flex items-center gap-1"><CheckCircle2 size={14}/> Homologué Bio</span></td>
                    </tr>
                </tbody>
            </table>
         </div>
    </div>
  );
};

// --- 5. QUALITÉ (Laboratoire) ---
export const QualityView = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-100 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Brix Moyen (Jour)</p>
                <p className="text-3xl font-bold text-slate-800">12.4<span className="text-lg text-slate-400">°</span></p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Acidité (pH)</p>
                <p className="text-3xl font-bold text-slate-800">0.95</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Ratio E/A</p>
                <p className="text-3xl font-bold text-sage-600">13.1</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Taux Jus</p>
                <p className="text-3xl font-bold text-blue-500">48<span className="text-lg text-slate-400">%</span></p>
            </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Journal du Laboratoire (Dernières 24h)</h3>
                <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700">
                    <Filter size={16} /> Filtrer
                </button>
            </div>
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-medium">
                    <tr>
                        <th className="px-6 py-3">Heure</th>
                        <th className="px-6 py-3">Lot ID</th>
                        <th className="px-6 py-3">Variété</th>
                        <th className="px-6 py-3">Brix</th>
                        <th className="px-6 py-3">Acidité</th>
                        <th className="px-6 py-3">Jus %</th>
                        <th className="px-6 py-3">Pépins/Fruit</th>
                        <th className="px-6 py-3">Décision</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                     {[
                         {h: '14:30', id: 'AG-891', v: 'Nadorcott', b: 13.2, a: 0.9, j: 51, p: 0.2, d: 'Conforme'},
                         {h: '13:15', id: 'BK-104', v: 'Clémentine', b: 11.5, a: 0.85, j: 46, p: 0.0, d: 'Conforme'},
                         {h: '11:45', id: 'GH-055', v: 'Maroc Late', b: 10.8, a: 1.1, j: 49, p: 1.5, d: 'Conforme'},
                         {h: '10:20', id: 'BM-012', v: 'W. Sanguine', b: 9.2, a: 1.4, j: 38, p: 2.1, d: 'Rejeté (Brix)'},
                     ].map((row, i) => (
                        <tr key={i} className={row.d.includes('Rejet') ? 'bg-red-50/30' : ''}>
                             <td className="px-6 py-4 text-slate-500 font-mono">{row.h}</td>
                             <td className="px-6 py-4 font-bold text-slate-700">{row.id}</td>
                             <td className="px-6 py-4 text-slate-600">{row.v}</td>
                             <td className="px-6 py-4 font-bold">{row.b}</td>
                             <td className="px-6 py-4">{row.a}</td>
                             <td className="px-6 py-4">{row.j}%</td>
                             <td className="px-6 py-4">{row.p}</td>
                             <td className="px-6 py-4">
                                 <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                                     row.d.includes('Rejet') ? 'bg-red-100 text-red-700' : 'bg-sage-100 text-sage-700'
                                 }`}>
                                     {row.d}
                                 </span>
                             </td>
                        </tr>
                     ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

// --- 6. RAPPORTS (BI) ---
export const ReportsView = () => {
    // DATA FOR CHARTS
    const volumeData = [
        { name: 'Nadorcott', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Clémentine', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Maroc Late', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Navel', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Salustiana', uv: 1890, pv: 4800, amt: 2181 },
    ];

    const rejectionData = [
        { name: 'Écart de Triage', value: 45, color: '#f87171' },
        { name: 'Calibre', value: 25, color: '#fbbf24' },
        { name: 'Pourriture', value: 10, color: '#94a3b8' },
        { name: 'Brix Insuffisant', value: 20, color: '#60a5fa' },
    ];

    const weeklyTrendData = [
        { name: 'S38', export: 120, local: 40 },
        { name: 'S39', export: 132, local: 38 },
        { name: 'S40', export: 145, local: 45 },
        { name: 'S41', export: 160, local: 35 },
        { name: 'S42', export: 190, local: 50 },
        { name: 'S43', export: 210, local: 48 },
        { name: 'S44', export: 205, local: 42 },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase">Volume Exporté</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">1,245 T</h3>
                        </div>
                        <div className="p-2 bg-sage-50 text-sage-600 rounded-lg">
                            <Package size={20} />
                        </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs font-bold text-sage-600">
                        <TrendingUp size={12} /> +12% vs S-1
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase">Prix Moyen Vente</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">11.85 Dhs/Kg</h3>
                        </div>
                        <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                            <DollarSign size={20} />
                        </div>
                    </div>
                     <div className="mt-2 flex items-center gap-1 text-xs font-bold text-slate-400">
                        Stable
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase">Taux de Rejet</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">4.2%</h3>
                        </div>
                        <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                            <AlertTriangle size={20} />
                        </div>
                    </div>
                     <div className="mt-2 flex items-center gap-1 text-xs font-bold text-red-500">
                        +0.5% (Attention)
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase">Rendement Station</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">22 T/h</h3>
                        </div>
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Activity size={20} />
                        </div>
                    </div>
                     <div className="mt-2 flex items-center gap-1 text-xs font-bold text-sage-600">
                        Optimal
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {/* Volume Chart */}
                 <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                     <h3 className="font-bold text-slate-800 mb-4">Volume Export par Variété (Tonnes)</h3>
                     <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={volumeData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9"/>
                                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                                <Bar dataKey="uv" fill="#38a776" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                     </div>
                 </div>

                 {/* Rejection Pie Chart */}
                 <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                     <h3 className="font-bold text-slate-800 mb-4">Analyse des Motifs de Rejet (Station)</h3>
                     <div className="h-64 w-full flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={rejectionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {rejectionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                     </div>
                 </div>
            </div>

            {/* Trend Chart */}
             <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                 <h3 className="font-bold text-slate-800 mb-4">Évolution Hebdomadaire des Expéditions</h3>
                 <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={weeklyTrendData}>
                            <defs>
                                <linearGradient id="colorExport" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#38a776" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#38a776" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorLocal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
                            <Area type="monotone" dataKey="export" stroke="#38a776" fillOpacity={1} fill="url(#colorExport)" strokeWidth={3} name="Export UE/Russie" />
                            <Area type="monotone" dataKey="local" stroke="#f59e0b" fillOpacity={1} fill="url(#colorLocal)" strokeWidth={3} name="Marché Local" />
                            <Legend verticalAlign="top" height={36} align="right" iconType="circle" />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
             </div>
        </div>
    );
};

// --- 7. UTILISATEURS (RH) ---
export const UsersView = () => {
    const users = [
        { name: 'Karim Benali', role: 'Resp. Qualité', email: 'k.benali@primestation.ma', status: 'Actif', access: 'Admin' },
        { name: 'Fatima Zohra', role: 'Resp. Station', email: 'f.zohra@primestation.ma', status: 'Actif', access: 'Admin' },
        { name: 'Ahmed Idrissi', role: 'Chef d\'Équipe (Réception)', email: 'a.idrissi@primestation.ma', status: 'Actif', access: 'Éditeur' },
        { name: 'Sarah M.', role: 'Laborantine', email: 's.m@primestation.ma', status: 'Absent', access: 'Lecture' },
        { name: 'Rachid T.', role: 'Logistique', email: 'r.t@primestation.ma', status: 'Actif', access: 'Éditeur' },
    ];
    return (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                 <h3 className="font-bold text-slate-800">Équipe Station Souss-Pack 1</h3>
                 <button className="bg-sage-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-sage-700">Ajouter Membre</button>
             </div>
             <table className="w-full text-sm text-left">
                 <thead className="bg-slate-50 text-slate-500 font-medium">
                     <tr>
                         <th className="px-6 py-3">Nom</th>
                         <th className="px-6 py-3">Rôle</th>
                         <th className="px-6 py-3">Email</th>
                         <th className="px-6 py-3">Accès</th>
                         <th className="px-6 py-3">Statut</th>
                     </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                     {users.map((u, i) => (
                         <tr key={i} className="hover:bg-slate-50 transition-colors">
                             <td className="px-6 py-4 font-bold text-slate-800 flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 text-xs">{u.name.substring(0,2).toUpperCase()}</div>
                                 {u.name}
                             </td>
                             <td className="px-6 py-4 text-slate-600">{u.role}</td>
                             <td className="px-6 py-4 text-slate-500">{u.email}</td>
                             <td className="px-6 py-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">{u.access}</span></td>
                             <td className="px-6 py-4">
                                 <span className={`w-2 h-2 rounded-full inline-block mr-2 ${u.status === 'Actif' ? 'bg-green-500' : 'bg-red-400'}`}></span>
                                 {u.status}
                             </td>
                         </tr>
                     ))}
                 </tbody>
             </table>
        </div>
    );
};

// --- 8. PARAMÈTRES ---
export const SettingsView = () => {
    return (
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Settings size={18} /> Configuration Générale (Maroc)</h3>
                <div className="grid grid-cols-1 gap-4">
                     <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Nom de la Station</label>
                         <input type="text" defaultValue="Station de Conditionnement Souss-Pack 1" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sage-500 outline-none" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Devise Principale</label>
                            <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sage-500 outline-none bg-white">
                                <option>Dirham (MAD) - Local</option>
                                <option>Euro (€) - Export</option>
                                <option>Dollar ($) - USA</option>
                            </select>
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-slate-700 mb-1">Zone Export Par Défaut</label>
                             <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sage-500 outline-none bg-white">
                                 <option>Union Européenne (UE)</option>
                                 <option>Amérique du Nord (USA/CAN)</option>
                                 <option>Russie</option>
                                 <option>Moyen-Orient</option>
                             </select>
                        </div>
                     </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><AlertCircle size={18} /> Seuils d'Alerte Qualité (IA)</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-700">Brix Minimum (Nadorcott)</span>
                        <div className="flex items-center gap-2">
                            <input type="number" defaultValue="11.0" className="w-20 text-center border border-slate-200 rounded px-2 py-1 text-sm" />
                            <span className="text-slate-400 text-xs">°Bx</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-700">Tolérance Défauts (Cat I)</span>
                        <div className="flex items-center gap-2">
                            <input type="number" defaultValue="5" className="w-20 text-center border border-slate-200 rounded px-2 py-1 text-sm" />
                            <span className="text-slate-400 text-xs">%</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button className="bg-sage-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-sage-700 shadow-md flex items-center gap-2">
                        <Save size={16} /> Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper icon component for Inventory
const SunIcon = ({size, className}: {size:number, className?: string}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="5"></circle>
        <path d="M12 1v2"></path><path d="M12 21v2"></path>
        <path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path>
        <path d="M1 12h2"></path><path d="M21 12h2"></path>
        <path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path>
    </svg>
);


import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import BatchCard from './components/BatchCard';
import DataWidgets from './components/DataWidgets';
import Passport from './components/Passport';
import BatchList from './components/BatchList';
import * as Views from './components/PageViews'; // Import des nouvelles vues
import { BatchData, PassportData, BatchHistoryItem } from './types';
import { Search, Bell } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  
  // DONNÉES FICTIVES : Passeport initial pré-rempli (pour éviter l'écran vide)
  const INITIAL_PASSPORT: PassportData = {
    score: 97,
    grade: "Nadorcott Afourer Supreme",
    tastingNotes: "Équilibre sucre/acide parfait (Ratio E/A: 14). Arômes intenses de mandarine fraîche. Jutosité exceptionnelle.",
    marketReadiness: "Conforme Export Premium (USA / Canada / UK). Calibre homogène. Origine Maroc Certifiée.",
    certificationId: "ONSSA-2024-AG-9942X"
  };

  // 1. Données du Lot Actuel (Déjà analysé pour la démo)
  const [currentBatch, setCurrentBatch] = useState<BatchData>({
    id: 'AG-2024-892',
    crop: 'Agrumes',
    variety: 'Nadorcott',
    harvestDate: 'Aujourd\'hui, 06:30',
    volume: '18,500 kg',
    status: 'Certified', 
    imageUrl: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1000&auto=format&fit=crop' 
  });

  const [passport, setPassport] = useState<PassportData | null>(INITIAL_PASSPORT);

  // 2. Données Historiques "Gonflées" (Souss-Massa, Oriental, Gharb, Tadla)
  const batchHistory: BatchHistoryItem[] = [
    { id: 'AG-2024-891', date: 'Aujourd\'hui 09:15', variety: 'Nadorcott', origin: 'Domaine Ait Melloul', volume: 22.4, destination: 'Perpignan (FR)', status: 'Export Ready', qualityScore: 96 },
    { id: 'BK-2024-104', date: 'Hier 18:30', variety: 'Clémentine Berkane', origin: 'Coop. Moulouya', volume: 15.2, destination: 'Montréal (CA)', status: 'Export Ready', qualityScore: 94 },
    { id: 'GH-2024-055', date: 'Hier 14:20', variety: 'Maroc Late', origin: 'Gharb - Kenitra', volume: 28.0, destination: 'St Petersburg (RU)', status: 'Export Ready', qualityScore: 91 },
    { id: 'AG-2024-888', date: '22 Oct', variety: 'Navel Lane Late', origin: 'Domaine Taroudant', volume: 12.5, destination: 'Marché Local (Casa)', status: 'Local Market', qualityScore: 78 },
    { id: 'BM-2024-012', date: '22 Oct', variety: 'Washington Sanguine', origin: 'Beni Mellal', volume: 8.4, destination: 'Jus Industriel', status: 'Rejected', qualityScore: 62 },
    { id: 'AG-2024-887', date: '21 Oct', variety: 'Nadorcott', origin: 'Domaine Belfaa', volume: 19.8, destination: 'London Gateway (UK)', status: 'Export Ready', qualityScore: 98 },
    { id: 'BK-2024-103', date: '21 Oct', variety: 'Nour', origin: 'Berkane Secteur 3', volume: 14.0, destination: 'Rotterdam (NL)', status: 'Export Ready', qualityScore: 89 },
    { id: 'GH-2024-054', date: '20 Oct', variety: 'Salustiana', origin: 'Sidi Slimane', volume: 25.5, destination: 'Hambourg (DE)', status: 'Export Ready', qualityScore: 85 },
    { id: 'AG-2024-886', date: '20 Oct', variety: 'Citron Eureka', origin: 'Biougra', volume: 10.2, destination: 'Rungis (FR)', status: 'Export Ready', qualityScore: 92 },
    { id: 'BM-2024-011', date: '19 Oct', variety: 'Navel', origin: 'Fquih Ben Salah', volume: 16.0, destination: 'Marché Local (Marrakech)', status: 'Local Market', qualityScore: 75 },
    { id: 'AG-2024-885', date: '19 Oct', variety: 'Nadorcott', origin: 'Sebt El Guerdane', volume: 21.0, destination: 'New Jersey (USA)', status: 'Export Ready', qualityScore: 95 },
    { id: 'BK-2024-102', date: '18 Oct', variety: 'Clémentine Fine', origin: 'Ahfir', volume: 13.5, destination: 'Marseille (FR)', status: 'Analyzed', qualityScore: 88 },
    { id: 'GH-2024-053', date: '18 Oct', variety: 'Maroc Late', origin: 'Larache', volume: 30.0, destination: 'Jebel Ali (UAE)', status: 'Export Ready', qualityScore: 93 },
    { id: 'AG-2024-884', date: '17 Oct', variety: 'Pamplemousse Star', origin: 'Ouled Teima', volume: 5.5, destination: 'Scandinavie', status: 'Export Ready', qualityScore: 90 },
    { id: 'BM-2024-010', date: '17 Oct', variety: 'Maroc Late', origin: 'Afourer', volume: 18.2, destination: 'Jus Industriel', status: 'Rejected', qualityScore: 58 },
  ];

  const handleAnalysisComplete = (data: PassportData) => {
    setPassport(data);
    setCurrentBatch(prev => ({ ...prev, status: 'Certified' }));
  };

  const getPageDetails = (pageId: string) => {
    switch (pageId) {
      case 'inbound': return { title: 'Réception Lots', desc: 'Enregistrement pont-bascule et pré-tri.' };
      case 'outbound': return { title: 'Logistique Export', desc: 'Planning conteneurs et formalités douanières.' };
      case 'inventory': return { title: 'Chambres Froides', desc: 'Gestion stocks frigo et déverdissage.' };
      case 'traceability': return { title: 'Traçabilité Verger', desc: 'Suivi parcellaire et intrants phytosanitaires.' };
      case 'quality': return { title: 'Laboratoire Qualité', desc: 'Analyses brix, acidité et résidus.' };
      case 'reports': return { title: 'Business Intelligence', desc: 'KPIs export et rendement station.' };
      case 'users': return { title: 'Équipe Station', desc: 'Gestion des chefs d\'équipe et techniciens.' };
      case 'settings': return { title: 'Configuration', desc: 'Paramètres calibrage et marchés cibles.' };
      default: return { title: 'Module', desc: 'Section en cours de développement.' };
    }
  };

  // Render Logic for Main Content
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              <div className="xl:col-span-5 flex flex-col gap-6">
                 <div className="flex items-center justify-between mb-[-10px]">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Lot en cours de traitement</h3>
                    <span className="text-xs font-mono text-slate-400">#SCAN-REQ-004</span>
                 </div>
                 <BatchCard batch={currentBatch} onAnalysisComplete={handleAnalysisComplete} />
                 <DataWidgets />
              </div>
              <div className="xl:col-span-7 h-full min-h-[500px]">
                <Passport data={passport} />
              </div>
            </div>
            <div className="pt-4">
               <BatchList history={batchHistory} />
            </div>
          </div>
        );
      case 'inbound': return <Views.InboundView />;
      case 'outbound': return <Views.OutboundView />;
      case 'inventory': return <Views.InventoryView />;
      case 'traceability': return <Views.TraceabilityView />;
      case 'quality': return <Views.QualityView />;
      case 'reports': return <Views.ReportsView />;
      case 'users': return <Views.UsersView />;
      case 'settings': return <Views.SettingsView />;
      default: return <div>Page non trouvée</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sage-200 selection:text-sage-900">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="md:ml-64 p-4 lg:p-8 min-h-screen transition-all duration-300 ease-in-out">
        
        {/* Header */}
        <header className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sage-100 text-sage-700 uppercase tracking-wider">Campagne 2024-2025</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="text-xs font-medium text-slate-500">Semaine 44</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
              {activePage === 'home' ? "Station Souss-Pack 1" : getPageDetails(activePage).title}
            </h1>
            <p className="text-slate-500 mt-1 text-sm font-medium flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {activePage === 'home' ? "Activité Intense • Zone Industrielle Ait Melloul" : getPageDetails(activePage).desc}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
             <div className="relative w-full sm:w-auto group z-10">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sage-500 transition-colors" size={18} />
                <input 
                   type="text" 
                   placeholder="Chercher lot, producteur..." 
                   className="w-full sm:w-64 pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 shadow-sm transition-all placeholder:text-slate-400"
                />
             </div>
             
             <button className="relative p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-sage-600 hover:bg-sage-50 transition-colors">
                <Bell size={20} />
                <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </button>

             <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-slate-800">Karim B.</p>
                    <p className="text-xs text-slate-500">Resp. Qualité</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-sage-100 border border-sage-200 flex items-center justify-center text-sage-700 font-bold">
                    KB
                </div>
             </div>
          </div>
        </header>

        {/* Content Area */}
        {renderContent()}
      </main>
    </div>
  );
};

export default App;

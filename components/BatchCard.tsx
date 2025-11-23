import React, { useState } from 'react';
import { BatchData, PassportData } from '../types';
import { MapPin, Calendar, Package, Loader2, CheckCircle2, Citrus } from 'lucide-react';
import { analyzeBatchQuality } from '../services/geminiService';

interface BatchCardProps {
  batch: BatchData;
  onAnalysisComplete: (data: PassportData) => void;
}

const BatchCard: React.FC<BatchCardProps> = ({ batch, onAnalysisComplete }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (batch.status === 'Certified') return;
    
    setIsAnalyzing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      const data = await analyzeBatchQuality(batch.id, batch.variety);
      onAnalysisComplete(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'Pending': return 'En Attente';
      case 'Analyzing': return 'Analyse...';
      case 'Certified': return 'Certifié';
      default: return status;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-sage-600 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
            <Citrus size={14} /> Détails du Lot Actuel
          </h2>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Lot N°{batch.id}</h3>
            </div>
            <p className="text-lg text-slate-500 font-medium">{batch.variety} <span className="text-slate-300 mx-2">|</span> {batch.crop}</p>
          </div>
        </div>
        
        {batch.status === 'Certified' && (
          <div className="px-4 py-2 bg-sage-50 text-sage-700 text-xs font-bold uppercase rounded-lg border border-sage-200 shadow-sm flex items-center gap-2 tracking-wide">
            <div className="w-2 h-2 bg-sage-500 rounded-full animate-pulse"></div>
            Prêt pour Export
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 group shadow-md ring-1 ring-slate-100">
        <img 
          src={batch.imageUrl} 
          alt={batch.variety} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-90"></div>
        
        {/* Status Overlay */}
        <div className="absolute top-4 left-4">
           <div className={`backdrop-blur-md px-3 py-1.5 rounded-full border flex items-center gap-2 shadow-sm ${
             batch.status === 'Certified' 
               ? 'bg-white/90 border-white text-sage-700' 
               : 'bg-white/90 border-white text-slate-600'
           }`}>
              {batch.status === 'Certified' ? <CheckCircle2 size={14} className="text-sage-600" /> : <Loader2 size={14} className={isAnalyzing ? "animate-spin" : ""} />}
              <span className="text-xs font-bold tracking-wide">{getStatusLabel(batch.status)}</span>
           </div>
        </div>

        {/* Location Overlay */}
        <div className="absolute bottom-5 left-5 text-white">
          <div className="flex items-center gap-2 mb-1 opacity-80">
            <MapPin size={14} />
            <p className="text-xs font-bold uppercase tracking-wider">Verger Source</p>
          </div>
          <p className="text-xl font-bold tracking-tight text-white text-shadow-sm">Région Souss-Massa, Secteur 4</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase mb-1">
            <Calendar size={14} /> Date Récolte
          </div>
          <span className="font-bold text-slate-800">{batch.harvestDate}</span>
        </div>
        <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase mb-1">
            <Package size={14} /> Volume Net
          </div>
          <span className="font-bold text-slate-800">{batch.volume}</span>
        </div>
        <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase mb-1">
            <MapPin size={14} /> Origine
          </div>
          <span className="font-bold text-slate-800">Maroc (MA)</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing || batch.status === 'Certified'}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 text-sm tracking-wide ${
            batch.status === 'Certified'
              ? 'bg-slate-50 text-slate-400 border border-slate-100 cursor-default'
              : 'bg-sage-600 text-white hover:bg-sage-700 hover:shadow-lg hover:shadow-sage-200 shadow-md shadow-sage-100'
          }`}
        >
          {isAnalyzing ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Analyse IA en Cours...
            </>
          ) : batch.status === 'Certified' ? (
            <>
              <CheckCircle2 size={18} />
              Analyse Terminée
            </>
          ) : (
            <>
              Lancer l'Analyse Qualité
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default BatchCard;
import React from 'react';
import { PassportData } from '../types';
import { CheckCircle2, QrCode, Globe, FileText, Share2, ShieldCheck, MapPin, Clock, Truck } from 'lucide-react';

interface PassportProps {
  data: PassportData | null;
}

const Passport: React.FC<PassportProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 h-full flex flex-col items-center justify-center text-center min-h-[600px]">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 relative">
          <div className="absolute inset-0 border-4 border-slate-100 rounded-full border-t-sage-200 animate-spin"></div>
          <ShieldCheck size={40} className="text-slate-300" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">En attente d'analyse</h3>
        <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
          Veuillez initier le scan qualité sur le lot pour générer le Passeport Qualité PrimeFruit officiel.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 p-0 h-full flex flex-col overflow-hidden relative">
      
      {/* Decorative Top Banner */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 p-8 pb-12 relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sage-500 via-yellow-400 to-sage-500"></div>
        
        <div className="flex justify-between items-start relative z-10">
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 border border-yellow-200 bg-yellow-50 text-yellow-700 text-[10px] font-bold uppercase tracking-widest rounded">
                        Document Officiel
                    </span>
                </div>
                <h1 className="text-3xl font-serif font-bold text-slate-900 leading-tight mb-1">
                    Passeport Qualité <br/> <span className="text-sage-700">PrimeFruit Maroc</span>
                </h1>
            </div>
            {/* Gold Seal */}
            <div className="relative">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 shadow-lg flex items-center justify-center border-4 border-white ring-1 ring-yellow-100">
                    <div className="w-16 h-16 rounded-full border border-yellow-200/50 flex items-center justify-center">
                        <ShieldCheck size={32} className="text-white drop-shadow-md" />
                    </div>
                 </div>
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                     <span className="text-[10px] font-bold text-sage-700 uppercase tracking-wider bg-white/80 backdrop-blur px-2 py-0.5 rounded-full border border-sage-100">
                         Certifié par FruitTrack
                     </span>
                 </div>
            </div>
        </div>
      </div>

      <div className="px-8 -mt-8 relative z-10 flex-1 flex flex-col">
        {/* Quality Score Card */}
        <div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 mb-8">
            <div className="flex items-center gap-6">
                <div className="relative">
                    <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="2.5" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#38a776" strokeWidth="2.5" strokeDasharray={`${data.score}, 100`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-slate-800">{data.score}</span>
                        <span className="text-[9px] text-slate-400 font-bold uppercase">Score</span>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Globe size={14} className="text-sage-500" />
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Classification</h4>
                    </div>
                    <p className="text-2xl font-bold text-slate-800 mb-2">{data.grade}</p>
                    <p className="text-xs text-slate-500 font-medium bg-slate-50 inline-block px-2 py-1 rounded border border-slate-100">
                        ID: <span className="font-mono">{data.certificationId}</span>
                    </p>
                </div>
            </div>
        </div>

        {/* Details Grid */}
        <div className="space-y-6 mb-8">
            <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase mb-3 tracking-wide border-b border-slate-100 pb-2">Traçabilité Vérifiée</h4>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 text-sage-500"><CheckCircle2 size={16} /></div>
                        <div>
                            <p className="text-sm text-slate-700 font-medium leading-snug">{data.marketReadiness}</p>
                            <p className="text-xs text-slate-400 mt-0.5">Conformité Export Vérifiée</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-sage-50/50 rounded-xl p-4 border border-sage-100">
                <h4 className="text-xs font-bold text-sage-800 uppercase mb-2 tracking-wide">Profil Sensoriel</h4>
                <p className="text-sm text-slate-600 italic leading-relaxed font-medium">
                    "{data.tastingNotes}"
                </p>
            </div>
        </div>

        {/* Actions & QR */}
        <div className="mt-auto pb-8">
            <div className="flex items-end justify-between gap-4">
                <div className="flex-1 flex flex-col gap-3">
                    <button className="w-full py-3 bg-sage-600 text-white rounded-xl text-sm font-bold shadow-md shadow-sage-200 hover:bg-sage-700 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <FileText size={18} /> Télécharger PDF
                    </button>
                    <button className="w-full py-3 bg-white text-slate-600 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-slate-800 transition-all flex items-center justify-center gap-2">
                        <Share2 size={18} /> Partager Lien (Export)
                    </button>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                    <QrCode size={88} className="text-slate-800" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Passport;
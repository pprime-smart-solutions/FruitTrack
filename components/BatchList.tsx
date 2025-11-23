
import React from 'react';
import { BatchHistoryItem } from '../types';
import { MoreHorizontal, ArrowUpRight, AlertCircle, CheckCircle2, Clock, Activity } from 'lucide-react';

interface BatchListProps {
  history: BatchHistoryItem[];
}

const BatchList: React.FC<BatchListProps> = ({ history }) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Export Ready':
        return 'bg-sage-50 text-sage-700 border-sage-200';
      case 'Local Market':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Rejected':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Analyzed':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Export Ready': return <CheckCircle2 size={14} />;
      case 'Rejected': return <AlertCircle size={14} />;
      case 'Pending': return <Clock size={14} />;
      case 'Analyzed': return <Activity size={14} />;
      default: return <ArrowUpRight size={14} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col max-h-[500px]">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Historique des Lots (Flux Temps Réel)</h3>
          <p className="text-sm text-slate-500">Derniers mouvements enregistrés sur la plateforme</p>
        </div>
        <button className="text-sm text-sage-600 font-bold hover:text-sage-700 transition-colors">
          Voir tout l'historique ({history.length})
        </button>
      </div>
      
      <div className="overflow-y-auto custom-scrollbar">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-100 sticky top-0 z-10 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-4">ID Lot</th>
              <th className="px-6 py-4">Variété</th>
              <th className="px-6 py-4">Origine</th>
              <th className="px-6 py-4">Destination</th>
              <th className="px-6 py-4">Volume (T)</th>
              <th className="px-6 py-4">Score IA</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {history.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4 font-mono font-medium text-slate-600">{item.id}</td>
                <td className="px-6 py-4 font-bold text-slate-800">{item.variety}</td>
                <td className="px-6 py-4 text-slate-600">{item.origin}</td>
                <td className="px-6 py-4 text-slate-500">{item.destination}</td>
                <td className="px-6 py-4 font-medium text-slate-700">{item.volume} T</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-slate-100 rounded-full h-1.5 w-12">
                      <div 
                        className={`h-1.5 rounded-full ${item.qualityScore > 90 ? 'bg-sage-500' : item.qualityScore > 70 ? 'bg-yellow-400' : 'bg-red-400'}`} 
                        style={{ width: `${item.qualityScore}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-slate-600">{item.qualityScore}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusStyle(item.status)}`}>
                    {getStatusIcon(item.status)}
                    {item.status === 'Export Ready' ? 'Export UE' : 
                     item.status === 'Local Market' ? 'Marché Local' : 
                     item.status === 'Rejected' ? 'Rejeté' : 
                     item.status === 'Analyzed' ? 'Analysé' : 'En cours'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BatchList;

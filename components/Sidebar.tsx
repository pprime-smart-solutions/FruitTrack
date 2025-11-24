
import React from 'react';
import { 
  LayoutDashboard, 
  ArrowDownRight, 
  ArrowUpRight, 
  Package, 
  GitCommit, 
  ClipboardCheck, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut 
} from 'lucide-react';
import Logo from '../assets/FruitTrack_2.svg';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: LayoutDashboard, label: 'Accueil' },
    { id: 'inbound', icon: ArrowDownRight, label: 'Entrées' },
    { id: 'outbound', icon: ArrowUpRight, label: 'Sorties' },
    { id: 'inventory', icon: Package, label: 'Inventaire' },
    { id: 'traceability', icon: GitCommit, label: 'Traçabilité' },
    { id: 'quality', icon: ClipboardCheck, label: 'Qualité' },
    { id: 'reports', icon: BarChart3, label: 'Rapports' },
    { id: 'users', icon: Users, label: 'Utilisateurs' },
    { id: 'settings', icon: Settings, label: 'Paramètres' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col hidden md:flex fixed left-0 top-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <a href="http://194.164.76.81:8023/" className="p-8 flex items-center justify-center hover:opacity-80 transition-opacity">
        <img src={Logo} alt="Logo" width={80} />
      </a>

      <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative group ${
              activePage === item.id
                ? 'bg-sage-50 text-sage-700 shadow-sm ring-1 ring-sage-100 border border-sage-100'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 border border-transparent'
            }`}
          >
            {activePage === item.id && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-sage-500 rounded-r-full"></div>
            )}
            <item.icon size={20} className={`transition-colors ${activePage === item.id ? 'text-sage-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-50">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors hover:bg-slate-50 rounded-xl">
          <LogOut size={18} />
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

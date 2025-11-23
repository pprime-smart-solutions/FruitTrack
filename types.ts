
export interface BatchData {
  id: string;
  crop: string;
  variety: string;
  harvestDate: string;
  volume: string;
  status: 'Pending' | 'Analyzing' | 'Certified' | 'Rejected';
  imageUrl: string;
}

export interface QualityMetrics {
  brix: number; // Sugar content
  acidity: number; // pH
  juiceContent: number; // percentage
  sizeAvg: number; // mm
}

export interface PassportData {
  score: number;
  grade: string;
  tastingNotes: string;
  marketReadiness: string;
  certificationId: string;
}

export interface BatchHistoryItem {
  id: string;
  date: string;
  variety: string;
  origin: string; // ex: Domaine Berkane
  volume: number; // en Tonnes
  destination: string;
  status: 'Export Ready' | 'Local Market' | 'Rejected' | 'Pending' | 'Analyzed';
  qualityScore: number;
}
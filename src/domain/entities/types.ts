export interface ValueItem {
  title: string;
  desc: string;
  iconName: 'Handshake' | 'Zap' | 'ShieldCheck' | 'Target';
}

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  iconName: 'Code' | 'Bot' | 'Smartphone' | 'Cloud' | 'LineChart' | 'Database';
  imageUrl: string;
  benefits: string[];
  solutions: string;
  value: string;
  industries: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Factory' | 'GraduationCap' | 'Stethoscope' | 'Hotel' | 'Utensils' | 'Shirt' | 'Users' | 'Store' | 'Landmark' | 'BrainCircuit';
  imageUrl: string;
  features: string[];
  benefit: string;
  badge: string;
}

export interface ApproachItem {
  step: string;
  title: string;
  desc: string;
}

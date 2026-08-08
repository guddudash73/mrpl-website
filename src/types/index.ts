export type PlotStatus = 'Available' | 'Reserved' | 'Sold';
export type PlotType = 'Residential' | 'Commercial' | 'Investment' | 'Plotting & Duplex';

export interface Plot {
  id: string;
  title: string;
  location: string;
  address: string;
  sizeSqFt: number;
  availableSizes?: string;
  customSizeNote?: string;
  pricePerSqFt: number;
  totalPrice: number;
  plotType: PlotType;
  status: PlotStatus;
  image: string;
  description: string;
  features: string[];
  dimensions?: string;
  facing: 'North' | 'South' | 'East' | 'West' | 'North-East' | 'South-East';
  isFeatured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Duplex' | 'Master-Planned' | 'Standard Duplex' | 'Premium Duplex';
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  image: string;
  description: string;
  totalUnits?: number;
  completionYear: string;
  features: string[];
  isSignature?: boolean;
}

export interface FilterState {
  location: string;
  plotType: string;
  sizeRange: string;
  searchQuery: string;
  sortBy: 'price-asc' | 'price-desc' | 'size-asc' | 'size-desc';
}

export interface SiteVisitRequest {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  plotInterest?: string;
  message?: string;
}

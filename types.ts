export enum UserRole {
  SHIPPER = 'Shipper/Exporter/Importer',
  SHIPPING_LINE = 'Shipping Line',
  CHA = 'Customs House Agent',
  STAFF = 'CONCOR Staff',
  GOVT_OFFICER = 'Government Officer/Agent'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  organization: string;
  email: string;
}

export interface FMLMRequest {
  id: string;
  containerNumber: string;
  terminal: string;
  pickupAddress: string;
  truckId: string;
  driverName: string;
  driverRating: number;
  eta: string;
  amount: number;
  status: 'Draft' | 'Matching' | 'Scheduled' | 'Completed';
}

export interface Booking {
  id: string;
  origin: string;
  destination: string;
  containerCount: number;
  serviceType: 'Rail' | 'Road';
  status: 'Draft' | 'Confirmed' | 'Completed';
  createdAt: string;
}

export interface PDATransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'Debit' | 'Credit';
}

export interface Filing {
  id: string;
  category: 'Import' | 'Export' | 'FMLM';
  type: string;
  status: 'Draft' | 'Pending' | 'Processed' | 'Rejected';
  timestamp: string;
  aiConfidence?: number;
  riskProbability?: number;
}

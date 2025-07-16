export enum RequestStatus {
  Pending    = 'Pending',
  InProgress = 'InProgress',
  Completed  = 'Completed'
}

export interface CarRequest {
  id: string;
  userId: string;
  makes: string[];                    // e.g. ['Toyota', 'Honda']
  yearRange: [number, number];        // [minYear, maxYear]
  models: Record<string, string[]>;   // { 'Toyota': ['Corolla','Camry'], ... }
  comments: string;                   // additional user notes
  name: string;
  email: string;
  phone?: string;
  status: RequestStatus;
  createdAt: string;                  // ISO date string
}

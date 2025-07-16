export enum UserRole {
  Admin = 'Admin',
  User  = 'User'
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  roles: UserRole[];
  isConfirmed: boolean;  // true after email confirmation
  createdAt: string;     // ISO date string
}

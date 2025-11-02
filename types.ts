
export interface User {
  name: string;
  email: string;
  imageUrl: string;
  phone?: string;
  isPhoneVerified?: boolean;
}

export enum Tab {
  Earnings = 'earnings',
  Withdrawal = 'withdrawal',
  History = 'history',
}

export type Language = 'ar' | 'en';

export type Translations = {
  [key: string]: string;
};

export type WithdrawalRecord = {
  id: string;
  amount: number;
  method: 'paypal';
  status: 'pending' | 'completed';
  date: string;
  details: string;
  userEmail: string;
};
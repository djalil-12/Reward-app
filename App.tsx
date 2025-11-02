import React, { useState, useCallback, useMemo, useEffect } from 'react';
import type { User, Language, Translations, WithdrawalRecord } from './types';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import { translations } from './translations';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    name: 'مستخدم جديد',
    email: 'user@example.com',
    imageUrl: 'https://picsum.photos/200',
    phone: '',
    isPhoneVerified: false,
  });
  const [balance, setBalance] = useState<number>(150);
  const [language, setLanguage] = useState<Language>('ar');
  const [withdrawals, setWithdrawals] = useState<WithdrawalRecord[]>([]);


  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t: Translations = useMemo(() => {
    const translationMap: { [key: string]: { [lang in Language]: string } } = translations;
    const selectedTranslations: Translations = {};
    for (const key in translationMap) {
      selectedTranslations[key] = translationMap[key][language];
    }
    return selectedTranslations;
  }, [language]);

  const handleLogin = useCallback((googleUser: { name: string; email: string; imageUrl: string }) => {
    setUser(prevUser => ({
      ...prevUser,
      name: googleUser.name,
      email: googleUser.email,
      imageUrl: googleUser.imageUrl,
    }));
    setIsLoggedIn(true);
  }, []);

  const updateUser = useCallback((updatedUser: Partial<User>) => {
    setUser(prevUser => ({ ...prevUser, ...updatedUser }));
  }, []);

  const addBalance = useCallback((amount: number) => {
    setBalance(prev => prev + amount);
  }, []);

  const subtractBalance = useCallback((amount: number) => {
    setBalance(prev => Math.max(0, prev - amount));
  }, []);
  
  const addWithdrawalRequest = useCallback((request: Omit<WithdrawalRecord, 'id' | 'date' | 'status'>) => {
    const newRequest: WithdrawalRecord = {
      ...request,
      id: new Date().getTime().toString(),
      date: new Date().toISOString(),
      status: 'pending',
    };
    setWithdrawals(prev => [newRequest, ...prev]);
    subtractBalance(request.amount);
  }, [subtractBalance]);

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {isLoggedIn ? (
        <MainScreen
          user={user}
          balance={balance}
          withdrawals={withdrawals}
          onUpdateUser={updateUser}
          onAddBalance={addBalance}
          onAddWithdrawalRequest={addWithdrawalRequest}
          language={language}
          onLanguageChange={setLanguage}
          t={t}
        />
      ) : (
        <LoginScreen onLogin={handleLogin} t={t} language={language} />
      )}
    </div>
  );
};

export default App;
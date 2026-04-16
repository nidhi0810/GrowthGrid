'use client';

import { useEffect, useState } from 'react';

const PREMIUM_STORAGE_KEY = 'growthgrid_student_premium';

export function usePremium() {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(PREMIUM_STORAGE_KEY);
    setIsPremium(saved === 'true');
  }, []);

  const updatePremium = (value: boolean) => {
    setIsPremium(value);
    window.localStorage.setItem(PREMIUM_STORAGE_KEY, String(value));
  };

  return { isPremium, setIsPremium: updatePremium };
}


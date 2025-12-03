
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistrationPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/registration/private-ltd');
  }, [router]);

  return null;
}

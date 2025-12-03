
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CompliancePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/compliance/bookkeeping');
  }, [router]);

  return null;
}

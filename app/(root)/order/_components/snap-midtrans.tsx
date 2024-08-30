'use client';

import { useEffect } from 'react';

export const SnapMidtrans = () => {
  useEffect(() => {
    const snapScript: string = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const clientKey: any = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;

    const script = document.createElement('script');
    script.src = snapScript;

    script.setAttribute('data-client-key', clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

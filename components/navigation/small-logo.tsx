'use client';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export const SmallLogo = () => {
  const router = useRouter();
  return (
    <span
      className={cn('cursor-not-allowed font-anton text-2xl uppercase')}
      onCanPlay={() => router.push('/')}
    >
      Sepatood
    </span>
  );
};

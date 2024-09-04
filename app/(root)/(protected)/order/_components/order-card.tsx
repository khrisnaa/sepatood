'use client';

import { formatDate, formatPrice } from '@/lib/utils';
import { Order } from '@prisma/client';
import { useRouter } from 'next/navigation';

export const OrderCard = ({ data }: { data: Order }) => {
  const router = useRouter();
  return (
    <div
      className="grid grid-cols-3 border-2 border-primary p-4"
      onClick={() => router.push(`/order/${data.id}`)}
    >
      <span>{formatDate(data.createdAt)}</span>
      <span>{formatPrice(data.totalPrice)}</span>
      <span>{data.status}</span>
    </div>
  );
};

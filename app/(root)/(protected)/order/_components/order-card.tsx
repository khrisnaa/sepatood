'use client';

import { Order } from '@prisma/client';
import { useRouter } from 'next/navigation';

export const OrderCard = ({ data }: { data: Order }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/order/${data.id}`)}
      className="cursor-pointer"
    >
      {data.status} -- {data.totalPrice}
    </div>
  );
};

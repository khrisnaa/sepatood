'use client';

import { Prisma } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export type ShoeData = Prisma.ShoeGetPayload<{
  include: {
    brand: true;
    condition: true;
    shoeCategories: { include: { category: true } };
    shoeColors: { include: { color: true } };
    shoeImages: true;
    size: true;
  };
}>;

interface ShoeCardProps {
  data: ShoeData;
}

export const ShoeCard = ({ data }: ShoeCardProps) => {
  const router = useRouter();
  return (
    <div
      className="flex max-w-xs cursor-pointer flex-col"
      onClick={() => router.push(`/shoes/${data.id}`)}
    >
      <div className="aspect-square h-72">
        <Image
          src={data.shoeImages[0].url}
          height={300}
          width={300}
          alt="shoe image"
          className="h-full object-cover"
        />
      </div>
      <div>
        <p>{data.model}</p>
        <span>{data.price}</span>
      </div>
    </div>
  );
};

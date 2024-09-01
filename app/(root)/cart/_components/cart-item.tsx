'use client';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { formatPrice } from '@/lib/utils';
import { CartItemData, ShoeData } from '@/types/definition';
import Image from 'next/image';

export const CartItem = ({ data }: { data: CartItemData }) => {
  return (
    <TableRow className="border-y-2 border-primary">
      <TableCell>
        <Button
          variant={'ghost'}
          className="h-full sm:max-h-[80px] lg:max-h-[100px]"
        >
          X
        </Button>
      </TableCell>
      <TableCell className="aspect-square border-x-2 border-primary p-1 sm:max-h-[80px] lg:max-h-[100px]">
        <Image
          src={data.shoe.shoeImages[0].url}
          alt="shoe image"
          height={150}
          width={150}
          className="h-full w-full object-cover"
        />
      </TableCell>
      <TableCell className="text-center">{`${data.shoe.brand.name}  ${data.shoe.model}`}</TableCell>
      <TableCell className="text-center">{data.shoe.size.size}</TableCell>
      <TableCell className="text-center">{data.shoe.condition.name}</TableCell>
      <TableCell className="text-center">
        {formatPrice(data.shoe.price)}
      </TableCell>
    </TableRow>
  );
};

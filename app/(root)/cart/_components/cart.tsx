'use client';

import { CartItemData } from '@/types/definition';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CartSummary } from '@/app/(root)/cart/_components/cart-summary';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

interface CartProps {
  data: CartItemData[];
}

export const Cart = ({ data }: CartProps) => {
  const subTotal = data
    .map((item) => {
      return item.shoe.price;
    })
    .reduce((acc, num) => {
      return acc + num;
    }, 0);

  return (
    <div className="hidden sm:block">
      <div className="container flex items-center justify-center gap-8 p-8 sm:flex-col lg:flex-row lg:items-start">
        <div className="w-full max-w-[800px] sm:max-w-[600px]">
          {data.length !== 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead className="h-full sm:max-h-[80px] lg:max-h-[100px]"></TableHead>
                  <TableHead className="text-center">Items</TableHead>
                  <TableHead className="text-center">Sizes</TableHead>
                  <TableHead className="text-center">Conditions</TableHead>
                  <TableHead className="text-center">Prices</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border-b-2 border-primary">
                {data.map((item) => (
                  <TableRow className="border-y-2 border-primary" key={item.id}>
                    <TableCell>
                      <Button
                        variant={'ghost'}
                        className="h-full sm:max-h-[80px] lg:max-h-[100px]"
                      >
                        X
                      </Button>
                    </TableCell>
                    <TableCell className="aspect-square min-w-[80px] border-x-2 border-primary p-1 sm:max-h-[80px] lg:max-h-[100px]">
                      <Image
                        src={item.shoe.shoeImages[0].url}
                        alt="shoe image"
                        height={150}
                        width={150}
                        className="h-full w-full object-cover"
                      />
                    </TableCell>
                    <TableCell className="text-center">{`${item.shoe.brand.name}  ${item.shoe.model}`}</TableCell>
                    <TableCell className="text-center">
                      {item.shoe.size.size}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.shoe.condition.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {formatPrice(item.shoe.price)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div>NO ITEMS</div>
          )}
        </div>
        <CartSummary
          subTotal={subTotal}
          cartId={data.length != 0 ? data[0].cartId : ''}
        />
      </div>
    </div>
  );
};

'use client';

import { CartItemData } from '@/types/definition';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MobileCartItem } from '@/app/(root)/cart/_components/mobile-cart-item';
import { CartSummary } from '@/app/(root)/cart/_components/cart-summary';
import { CartItem } from '@/app/(root)/cart/_components/cart-item';

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

  const tax = (subTotal * 10) / 100;

  return (
    <>
      <div className="sm:hidden">
        {data.length !== 0 ? (
          <div className="flex flex-col gap-4 p-4 md:hidden">
            {data.map((item) => (
              <MobileCartItem data={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div>NO ITEMS</div>
        )}

        <CartSummary
          subTotal={subTotal}
          cartId={data.length != 0 ? data[0].cartId : ''}
        />
      </div>

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
                    <CartItem data={item} key={item.id} />
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
    </>
  );
};

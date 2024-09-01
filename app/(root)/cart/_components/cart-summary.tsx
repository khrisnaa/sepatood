import { CheckoutButton } from '@/app/(root)/cart/_components/checkout-button';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';

interface CartSummaryProps {
  subTotal: number;
  cartId: string;
}

export const CartSummary = ({ subTotal, cartId }: CartSummaryProps) => {
  const tax = (subTotal * 10) / 100;
  return (
    <>
      <div className="fixed bottom-0 flex w-full items-end justify-between p-4 shadow-2xl sm:hidden">
        <div>
          <h4 className="text-base text-muted-foreground">Total</h4>
          <h4 className="font-bol text-xl">
            {formatPrice(subTotal + tax)}{' '}
            <span className="ml-2 text-xs">tax 10%</span>
          </h4>
        </div>
        <CheckoutButton cartId={cartId} totalPrice={subTotal + tax} />
      </div>

      <div className="hidden w-full flex-col border-2 border-primary p-4 sm:flex sm:max-w-[600px] sm:gap-6 lg:max-w-[380px] lg:gap-8 xl:max-w-[450px]">
        <h3 className="text-center font-anton text-3xl uppercase">Summary</h3>
        <Separator />
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>{formatPrice(subTotal)}</p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p>Tax 10%</p>
          <p>{formatPrice(tax)}</p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p>Total</p>
          <p>{formatPrice(subTotal + tax)}</p>
        </div>
        <CheckoutButton cartId={cartId} totalPrice={subTotal + tax} />
      </div>
    </>
  );
};

import { CartSummary } from '@/app/(root)/cart/_components/cart-summary';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { CartItemData } from '@/types/definition';
import Image from 'next/image';

interface MobileCartProps {
  data: CartItemData[];
}
export const MobileCart = ({ data }: MobileCartProps) => {
  const subTotal = data
    .map((item) => {
      return item.shoe.price;
    })
    .reduce((acc, num) => {
      return acc + num;
    }, 0);
  return (
    <div className="sm:hidden">
      {data.length !== 0 ? (
        <div className="flex flex-col gap-4 p-4 md:hidden">
          {data.map((item) => (
            <div className="flex items-center justify-between gap-2 border border-primary p-2 shadow-md">
              <div className="max-w-[80px] xxs:max-w-[100px] xs:max-w-[120px]">
                <Image
                  src={item.shoe.shoeImages[0].url}
                  alt="shoe image"
                  height={150}
                  width={150}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="line-clamp-1 text-sm xxs:text-base">{`${item.shoe.brand.name}  ${item.shoe.model}`}</h4>
                <p className="text-xs text-muted-foreground xxs:text-sm">
                  {formatPrice(item.shoe.price)}
                </p>
              </div>
              <div className="flex items-center">
                <Button
                  variant={'ghost'}
                  className="h-full w-full rounded-none"
                >
                  X
                </Button>
              </div>
            </div>
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
  );
};

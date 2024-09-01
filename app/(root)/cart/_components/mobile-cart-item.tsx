import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { CartItemData, ShoeData } from '@/types/definition';
import Image from 'next/image';

export const MobileCartItem = ({ data }: { data: CartItemData }) => {
  return (
    <div className="flex items-center justify-between gap-2 border border-primary p-2 shadow-md">
      <div className="max-w-[80px] xxs:max-w-[100px] xs:max-w-[120px]">
        <Image
          src={data.shoe.shoeImages[0].url}
          alt="shoe image"
          height={150}
          width={150}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h4 className="line-clamp-1 text-sm xxs:text-base">{`${data.shoe.brand.name}  ${data.shoe.model}`}</h4>
        <p className="text-xs text-muted-foreground xxs:text-sm">
          {formatPrice(data.shoe.price)}
        </p>
      </div>
      <div className="flex items-center">
        <Button variant={'ghost'} className="h-full w-full rounded-none">
          X
        </Button>
      </div>
    </div>
  );
};

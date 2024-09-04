'use client';

import { createOrder } from '@/actions/checkouts';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { OrderType } from '@/types/definition';
import { OrderStatus } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface CheckoutButtonProps {
  cartId: String;
  totalPrice: number;
}

export const CheckoutButton = ({ cartId, totalPrice }: CheckoutButtonProps) => {
  const { userData, error, loading } = useCurrentUser();
  const router = useRouter();
  const onCheckout = async () => {
    try {
      const data: OrderType = {
        userId: String(userData?.id),
        cartId: String(cartId),
        totalPrice,
        status: OrderStatus.PENDING,
      };
      await createOrder(data);
      router.push('/order');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      variant={'flatPrimary'}
      className="uppercase sm:mt-6 sm:w-full sm:py-6 lg:mt-8"
      onClick={onCheckout}
    >
      Make Order
    </Button>
  );
};

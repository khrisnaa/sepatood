'use client';

import { createOrder } from '@/actions/checkouts';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { OrderType } from '@/types/definition';
import { OrderStatus } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface CheckoutButtonProps {
  cartId: String;
}

export const CheckoutButton = ({ cartId }: CheckoutButtonProps) => {
  const { userData, error, loading } = useCurrentUser();
  const router = useRouter();
  const onCheckout = async () => {
    const data: OrderType = {
      userId: String(userData?.id),
      cartId: String(cartId),
    };
    await createOrder(data);
    router.refresh();
  };
  return <Button onClick={onCheckout}>Checkout</Button>;
};

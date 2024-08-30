'use client';

import { addToCart } from '@/actions/carts';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export const AddToCart = ({ shoeId }: { shoeId: string }) => {
  const { userData, error, loading } = useCurrentUser();

  const onAddToCart = async () => {
    try {
      const data = {
        userId: userData?.id || '',
        shoeId,
      };
      const cart = await addToCart(data);
      console.log(cart);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={onAddToCart}>AddToCart</Button>;
};

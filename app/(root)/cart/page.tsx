import { getCartDetailsByUserId } from '@/actions/carts';
import { getUserById } from '@/actions/users';
import { Cart } from '@/app/(root)/cart/_components/cart';
import { CheckoutButton } from '@/app/(root)/cart/_components/checkout-button';
import { auth } from '@clerk/nextjs/server';

const Page = async () => {
  const { userId } = auth();
  const user = await getUserById({ clerkUserId: userId || '' });
  const cart = await getCartDetailsByUserId(user.user?.id || '');
  const cartItems = cart?.cartItems;

  return <Cart data={cartItems || []} />;
};

export default Page;

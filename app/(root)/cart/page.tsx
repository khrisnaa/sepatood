import { getCartDetailsByUserId } from '@/actions/carts';
import { getUserById } from '@/actions/users';
import { Cart } from '@/app/(root)/cart/_components/cart';
import { CheckoutButton } from '@/app/(root)/cart/_components/checkout-button';
import { MobileCart } from '@/app/(root)/cart/_components/mobile-cart';
import { auth } from '@clerk/nextjs/server';

const Page = async () => {
  const { userId } = auth();
  const user = await getUserById({ clerkUserId: userId || '' });
  const cart = await getCartDetailsByUserId(user.user?.id || '');
  const cartItems = cart?.cartItems;

  return (
    <main>
      <Cart data={cartItems || []} />;
      <MobileCart data={cartItems || []} />
    </main>
  );
};

export default Page;

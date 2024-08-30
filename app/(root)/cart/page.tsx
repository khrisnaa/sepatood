import { getCartDetailsByUserId } from '@/actions/carts';
import { getUserById } from '@/actions/users';
import { CheckoutButton } from '@/app/(root)/cart/_components/checkout-button';
import { auth } from '@clerk/nextjs/server';

const Page = async () => {
  const { userId } = auth();

  const user = await getUserById({ clerkUserId: userId || '' });

  const cart = await getCartDetailsByUserId(user.user?.id || '');
  const items = cart?.cartItems;
  return (
    <div>
      {items?.map((item, i) => (
        <div className="flex gap-4">
          <div>{item.shoe.brand.name}</div>
          <p>{item.shoe.model}</p>
          <p>{item.shoe.price}</p>
        </div>
      ))}

      <CheckoutButton cartId={cart?.id || ''} />
    </div>
  );
};

export default Page;

import { getUserById } from '@/actions/users';
import { OrderCard } from './_components/order-card';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { OrderStatus } from '@prisma/client';

interface PageProps {
  searchParams: {
    order_id: string;
    status_code: string;
    transaction_status: string;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { userId } = auth();
  const { user } = await getUserById({ clerkUserId: userId || '' });

  const orders = await db.order.findMany({
    where: { userId: user?.id },
    include: { orderItems: true },
  });

  if (searchParams.order_id) {
    await db.order.update({
      where: { id: searchParams.order_id },
      data: {
        status:
          searchParams.transaction_status === 'pending'
            ? OrderStatus.PENDING
            : OrderStatus.COMPLETE,
      },
    });
  }

  return (
    <div className="container space-y-6 p-8">
      <p>{searchParams.order_id}</p>
      <div className="grid grid-cols-3 px-4">
        <span>Date</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      {orders.map((item, i) => (
        <OrderCard data={item} />
      ))}
    </div>
  );
};
export default Page;

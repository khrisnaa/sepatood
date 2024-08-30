import { PayButton } from '@/app/(root)/order/_components/pay-button';
import { SnapMidtrans } from '@/app/(root)/order/_components/snap-midtrans';
import { db } from '@/lib/db';

const Page = async ({ params }: { params: { orderId: string } }) => {
  const order = await db.order.findUnique({
    where: { id: params.orderId },
    include: { orderItems: { include: { shoe: true } } },
  });
  return (
    <div className="flex flex-col gap-4">
      <SnapMidtrans />
      <p>{order?.id}</p>
      <p>STATUS : {order?.status}</p>
      <p>TOTAL PRICE : {order?.totalPrice}</p>
      <div>
        {order?.orderItems.map((item, i) => (
          <div>
            <p>{item.shoe.model}</p>
            <p>{item.shoe.price}</p>
          </div>
        ))}
      </div>
      <PayButton
        orderId={String(order?.id)}
        totalPrice={Number(order?.totalPrice)}
      />
    </div>
  );
};
export default Page;

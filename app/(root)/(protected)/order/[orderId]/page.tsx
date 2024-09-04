import { formatPrice } from '@/lib/utils';
import { PayButton } from '../_components/pay-button';
import { SnapMidtrans } from '../_components/snap-midtrans';
import { db } from '@/lib/db';
import { Separator } from '@/components/ui/separator';

const Page = async ({ params }: { params: { orderId: string } }) => {
  const order = await db.order.findUnique({
    where: { id: params.orderId },
    include: { orderItems: { include: { shoe: true } } },
  });
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <SnapMidtrans />

      <div className="fixed bottom-0 flex w-full items-end justify-between p-4 shadow-2xl sm:hidden">
        <div>
          <h4 className="text-base text-muted-foreground">Total</h4>
          <h4 className="font-bol text-xl">
            {formatPrice(order?.totalPrice || 0)}
            <span className="ml-2 text-xs">tax 10%</span>
          </h4>
        </div>
        <PayButton
          orderId={String(order?.id)}
          totalPrice={Number(order?.totalPrice)}
        />
      </div>

      <div className="hidden w-full flex-col border-2 border-primary p-4 sm:flex sm:max-w-[600px] sm:gap-6 lg:max-w-[380px] lg:gap-8 xl:max-w-[450px]">
        <h3 className="text-center font-anton text-3xl uppercase">Check Out</h3>
        <Separator />

        <div className="flex justify-between">
          <p>Total</p>
          <p>{formatPrice(order?.totalPrice || 0)}</p>
        </div>
        <PayButton
          orderId={String(order?.id)}
          totalPrice={Number(order?.totalPrice)}
        />
      </div>
    </div>
  );
};
export default Page;

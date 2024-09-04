import { ClientTable } from './_components/client-table';
import { db } from '@/lib/db';

const Page = async () => {
  const orders = await db.order.findMany();
  return (
    <div>
      <ClientTable data={orders} />
    </div>
  );
};
export default Page;

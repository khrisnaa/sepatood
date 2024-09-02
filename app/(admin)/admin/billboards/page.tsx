import { ClientTable } from './_components/client-table';
import { getBillboards } from '@/actions/billboards';

const Page = async () => {
  const data = await getBillboards();

  return <ClientTable data={data} />;
};
export default Page;

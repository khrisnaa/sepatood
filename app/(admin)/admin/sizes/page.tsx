import { ClientTable } from './_components/client-table';
import { getSizes } from '@/actions/sizes';

const Page = async () => {
  const data = await getSizes();
  return <ClientTable data={data} />;
};
export default Page;

import { ClientTable } from './_components/client-table';
import { getShoes } from '@/actions/shoes';

const Page = async () => {
  const data = await getShoes();
  return <ClientTable data={data} />;
};
export default Page;

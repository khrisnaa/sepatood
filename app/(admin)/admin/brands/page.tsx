import { getBrands } from '@/actions/brands';
import { ClientTable } from './_components/client-table';

const Page = async () => {
  const data = await getBrands();
  return <ClientTable data={data} />;
};
export default Page;

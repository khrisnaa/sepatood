import { ClientTable } from './_components/client-table';
import { getCategories } from '@/actions/categories';

const Page = async () => {
  const data = await getCategories();
  return <ClientTable data={data} />;
};
export default Page;

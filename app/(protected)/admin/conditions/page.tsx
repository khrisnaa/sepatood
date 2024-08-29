import { getConditions } from '@/actions/conditions';
import { ClientTable } from './_components/client-table';

const Page = async () => {
  const data = await getConditions();
  return <ClientTable data={data} />;
};
export default Page;

import { getColors } from '@/actions/colors';
import { ClientTable } from './_components/client-table';
import { db } from '@/lib/db';

const Page = async () => {
  const data = await getColors();
  return <ClientTable data={data} />;
};
export default Page;

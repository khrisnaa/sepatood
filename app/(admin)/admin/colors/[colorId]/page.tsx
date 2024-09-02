import { db } from '@/lib/db';
import { ColorForm } from '../_components/color-form';
import { getColor } from '@/actions/colors';

const Page = async ({ params }: { params: { colorId: string } }) => {
  const data = await getColor(params.colorId);

  return <ColorForm initialData={data} />;
};
export default Page;

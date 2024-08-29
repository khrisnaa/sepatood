import { SizeForm } from '../_components/size-form';
import { getSize } from '@/actions/sizes';

const Page = async ({ params }: { params: { sizeId: string } }) => {
  const data = await getSize(params.sizeId);
  return <SizeForm initialData={data} />;
};
export default Page;

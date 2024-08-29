import { getBillboard } from '@/actions/billboards';
import { BillboardForm } from '../_components/billboard-form';

const Page = async ({ params }: { params: { billboardId: string } }) => {
  const data = await getBillboard(params.billboardId);
  return <BillboardForm initialData={data} />;
};
export default Page;

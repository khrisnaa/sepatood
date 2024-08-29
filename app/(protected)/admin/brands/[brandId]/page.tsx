import { BrandForm } from '../_components/brand-form';
import { getBillboards } from '@/actions/billboards';
import { getBrand } from '@/actions/brands';

const Page = async ({ params }: { params: { brandId: string } }) => {
  const data = await getBrand(params.brandId);
  const billboards = await getBillboards();
  return <BrandForm initialData={data} billboards={billboards} />;
};
export default Page;

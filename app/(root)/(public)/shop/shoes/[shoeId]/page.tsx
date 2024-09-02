import { getShoe } from '@/actions/shoes';
import { ShoeDetail } from '../_components/shoe-detail';

const Page = async ({ params }: { params: { shoeId: string } }) => {
  const shoe = await getShoe(params.shoeId);
  if (!shoe) {
    return null;
  }
  return (
    <div>
      <ShoeDetail shoe={shoe} />
    </div>
  );
};
export default Page;

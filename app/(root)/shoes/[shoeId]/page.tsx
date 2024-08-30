import { getShoe } from '@/actions/shoes';
import { AddToCart } from '@/app/(root)/shoes/_components/add-to-cart';
import { ShoeCard } from '@/app/(root)/shoes/_components/shoe-card';

const Page = async ({ params }: { params: { shoeId: string } }) => {
  const shoe = await getShoe(params.shoeId);
  if (!shoe) {
    return;
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div>
        <ShoeCard data={shoe} />
        <AddToCart shoeId={shoe.id} />
      </div>
    </div>
  );
};
export default Page;

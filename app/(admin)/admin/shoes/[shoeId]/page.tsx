import { db } from '@/lib/db';
import { ShoesForm } from '../_components/shoes-form';
import { getShoe } from '@/actions/shoes';
import { getBrands } from '@/actions/brands';
import { getColors } from '@/actions/colors';
import { getSizes } from '@/actions/sizes';
import { getConditions } from '@/actions/conditions';
import { getCategories } from '@/actions/categories';

const Page = async ({ params }: { params: { shoeId: string } }) => {
  const data = await getShoe(params.shoeId);
  const brands = await getBrands();
  const colors = await getColors();
  const sizes = await getSizes();
  const conditions = await getConditions();
  const categories = await getCategories();

  return (
    <ShoesForm
      initialData={data}
      brands={brands}
      colors={colors}
      sizes={sizes}
      categories={categories}
      conditions={conditions}
    />
  );
};
export default Page;

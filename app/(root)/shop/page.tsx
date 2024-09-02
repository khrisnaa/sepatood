import { getBrands } from '@/actions/brands';
import { getCategories } from '@/actions/categories';
import { getColors } from '@/actions/colors';
import { getShoes } from '@/actions/shoes';
import { Filter } from '@/app/(root)/shop/_componennts/filter';
import { FilterDrawer } from '@/app/(root)/shop/_componennts/filter-drawer';
import { ShoeCard } from '@/app/(root)/shop/_componennts/shoe-card';

import { db } from '@/lib/db';

interface PageProps {
  searchParams: {
    brandId: string;
    colorId: string;
    categoryId: string;
  };
}
const Page = async ({ searchParams }: PageProps) => {
  // const shoes = await getShoes();

  const { brandId, categoryId, colorId } = searchParams;
  const shoes = await db.shoe.findMany({
    where: {
      brandId,
      shoeColors: { some: { colorId } },
      shoeCategories: { some: { categoryId } },
    },
    include: {
      brand: true,
      condition: true,
      shoeCategories: { include: { category: true } },
      shoeColors: { include: { color: true } },
      shoeImages: true,
      size: true,
    },
  });
  const brands = await getBrands();
  const categories = await getCategories();
  const colors = await getColors();
  return (
    <div className="sm:container">
      <div className="container flex max-w-[416px] justify-end p-1 sm:max-w-none sm:p-4">
        <FilterDrawer>
          <Filter name="Brands" valueKey="brandId" data={brands} />
          <Filter name="Categories" valueKey="categoryId" data={categories} />
          <Filter name="Colors" valueKey="colorId" data={colors} />
        </FilterDrawer>
      </div>

      <main className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
        {shoes.length == 0 && (
          <div className="w-full text-center">NO RESULTS</div>
        )}
        {shoes.map((data, i) => (
          <div className="sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]">
            <ShoeCard shoe={data} key={i} />
          </div>
        ))}
        {shoes.map((data, i) => (
          <div className="sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]">
            <ShoeCard shoe={data} key={i} />
          </div>
        ))}
        {shoes.map((data, i) => (
          <div className="sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]">
            <ShoeCard shoe={data} key={i} />
          </div>
        ))}
        {shoes.map((data, i) => (
          <div className="sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]">
            <ShoeCard shoe={data} key={i} />
          </div>
        ))}
      </main>
    </div>
  );
};
export default Page;

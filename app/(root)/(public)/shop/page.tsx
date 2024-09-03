import { getBrands } from '@/actions/brands';
import { getCategories } from '@/actions/categories';
import { getColors } from '@/actions/colors';
import { Filter } from './_components/filter';
import { FilterDrawer } from './_components/filter-drawer';
import { ShoeCard } from '@/components/product/shoe-card';
import { getFilteredShoes } from '@/actions/shoes';

interface PageProps {
  searchParams: {
    brandId?: string;
    colorId?: string;
    categoryId?: string;
    query?: string;
  };
}
const Page = async ({ searchParams }: PageProps) => {
  const shoes = await getFilteredShoes(searchParams);
  const brands = await getBrands();
  const categories = await getCategories();
  const colors = await getColors();

  return (
    <main className="sm:container">
      <div className="container flex max-w-[416px] justify-end p-1 sm:max-w-none sm:p-4">
        <FilterDrawer>
          <Filter name="Brands" valueKey="brandId" data={brands} />
          <Filter name="Categories" valueKey="categoryId" data={categories} />
          <Filter name="Colors" valueKey="colorId" data={colors} />
        </FilterDrawer>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
        {shoes.length == 0 && (
          <div className="w-full text-center">NO RESULTS</div>
        )}
        {shoes.map((data, i) => (
          <div className="flex-shrink-0 sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]">
            <ShoeCard shoe={data} key={i} />
          </div>
        ))}
        {shoes.map((data, i) => (
          <div className="flex-shrink-0 sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]">
            <ShoeCard shoe={data} key={i} />
          </div>
        ))}
        {shoes.map((data, i) => (
          <div className="flex-shrink-0 sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]">
            <ShoeCard shoe={data} key={i} />
          </div>
        ))}
      </div>
    </main>
  );
};
export default Page;

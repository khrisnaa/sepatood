import { getBrands } from '@/actions/brands';
import { getCategories } from '@/actions/categories';
import { getColors } from '@/actions/colors';
import { Filter } from './_components/filter';
import { FilterDrawer } from './_components/filter-drawer';
import { ShoeCard } from '@/components/product/shoe-card';
import { getFeaturedShoes, getFilteredShoes } from '@/actions/shoes';
import { BillboardCarousel } from '@/app/(root)/(public)/home/_components/billboard-carousel';
import Image from 'next/image';
import { MotionButton } from '@/components/motion-button';
import { FeaturedCarousel } from '@/app/(root)/(public)/home/_components/featured-carousel';

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

  const featuredShoes = await getFeaturedShoes();

  return (
    <main>
      <div className="relative h-[360px] md:h-[400px] lg:h-[480px] xl:h-[560px]">
        <Image
          src="https://res.cloudinary.com/daq0ltjrn/image/upload/v1725074589/z3b5542jainjanhudna2.webp"
          fill
          alt="carousel images"
          className="object-cover"
        />
        <section className="absolute right-4 h-full w-full max-w-[200px] sm:max-w-[400px] lg:max-w-[720px]">
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <h3 className="font-anton text-5xl uppercase text-secondary sm:text-6xl md:text-7xl lg:text-8xl">
              ARE YOU READY TO LEAD THE WAY
            </h3>

            <div className="mr-auto">
              <MotionButton className="bg-accent-lime px-6 text-primary">
                VIEW MORE
              </MotionButton>
            </div>
          </div>
        </section>
      </div>

      <div className="py-8 sm:container">
        <FeaturedCarousel shoes={featuredShoes} />
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
      </div>
    </main>
  );
};
export default Page;

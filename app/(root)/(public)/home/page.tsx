import { BrandList } from '@/app/(root)/(public)/home/_components/brand-list';
import { BillboardCarousel } from './_components/billboard-carousel';
import { Hero } from './_components/hero';
import { FeaturedCarousel } from '@/app/(root)/(public)/home/_components/featured-carousel';
import { db } from '@/lib/db';
import { getFeaturedShoes } from '@/actions/shoes';

const Page = async () => {
  const shoes = await getFeaturedShoes();
  return (
    <main className="space-y-4">
      <div>
        <Hero />
      </div>
      <div>
        <BillboardCarousel />
      </div>
      <div>
        <BrandList />
      </div>
      <div className="p-8">
        <FeaturedCarousel shoes={shoes} />
      </div>
      <div className="h-screen bg-slate-300"></div>
    </main>
  );
};
export default Page;

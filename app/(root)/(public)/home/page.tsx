import { BrandList } from '@/app/(root)/(public)/home/_components/brand-list';
import { BillboardCarousel } from './_components/billboard-carousel';
import { Hero } from './_components/hero';
import { FeaturedCarousel } from '@/app/(root)/(public)/home/_components/featured-carousel';
import { db } from '@/lib/db';
import { getFeaturedShoes } from '@/actions/shoes';
import { Footer } from '@/components/footer';

const Page = async () => {
  const shoes = await getFeaturedShoes();
  return (
    <main className="space-y-4">
      <Hero />
      <BillboardCarousel />
      <BrandList />
      <div className="p-8">
        <FeaturedCarousel shoes={shoes} />
      </div>
      <div className="p-8">
        <FeaturedCarousel shoes={shoes} />
      </div>
      <Footer />
    </main>
  );
};
export default Page;

import { BrandList } from '@/app/(root)/(public)/home/_components/brand-list';
import { BillboardCarousel } from './_components/billboard-carousel';
import { Hero } from './_components/hero';
import { FeaturedCarousel } from '@/app/(root)/(public)/home/_components/featured-carousel';
import { db } from '@/lib/db';
import { getFeaturedShoes } from '@/actions/shoes';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';

const Page = async () => {
  const shoes = await getFeaturedShoes();
  return (
    <main className="space-y-4 md:space-y-8">
      <Hero />

      <Separator className="bg-primary" />

      <BillboardCarousel />

      <Separator className="bg-primary" />

      <BrandList />
      <Separator className="bg-primary" />
      <div className="p-8">
        <FeaturedCarousel shoes={shoes} />
      </div>
      <div className="p-8">
        <FeaturedCarousel shoes={shoes} />
      </div>
      <Separator className="bg-primary" />
      <Footer />
    </main>
  );
};
export default Page;

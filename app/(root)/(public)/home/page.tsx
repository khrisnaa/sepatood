import { BrandList } from '@/app/(root)/(public)/home/_components/brand-list';
import { BillboardCarousel } from './_components/billboard-carousel';
import { Hero } from './_components/hero';

const Page = () => {
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
      <div className="h-screen bg-slate-300"></div>
    </main>
  );
};
export default Page;

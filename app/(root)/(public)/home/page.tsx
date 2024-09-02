import { BillboardCarousel } from './_components/billboard-carousel';
import { Hero } from './_components/hero';

const Page = () => {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <BillboardCarousel />
      </div>
      <div className="h-screen bg-slate-300"></div>
    </main>
  );
};
export default Page;

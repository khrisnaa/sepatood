import { About } from '@/components/about';
import { Home } from '@/components/home';
import { FeaturedShoesSection } from '@/components/home/featured-shoes-section';
import { UserButton } from '@clerk/nextjs';

export default function Page() {
  return (
    <main>
      {/* <div className="h-screen bg-slate-300"></div> */}
      {/* <Home />
      <FeaturedShoesSection />
      <About /> */}
      <div className="h-screen bg-slate-300"></div>
      <div className="h-screen bg-slate-500"></div>
    </main>
  );
}

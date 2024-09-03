import { AboutHero } from '@/app/(root)/(public)/about/_components/about-hero';
import { AboutList } from '@/app/(root)/(public)/about/_components/about-list';

const Page = () => {
  return (
    <main>
      <AboutHero />
      <AboutList />
      <div className="h-screen bg-slate-400"></div>

      <div className="h-screen bg-slate-400"></div>
      <div className="h-screen bg-slate-300"></div>
    </main>
  );
};
export default Page;

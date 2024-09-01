import { HomeSection } from '@/components/home/home';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <div className="h-screen bg-orange-500"></div>
      <HomeSection />
      <div className="h-screen bg-orange-500"></div>
    </main>
  );
}

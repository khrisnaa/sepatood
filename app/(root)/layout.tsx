import { MobileNavigation } from '@/components/navigation/mobile-navigation';
import { Navigation } from '@/components/navigation/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <MobileNavigation />
    </div>
  );
};
export default Layout;

import { Navigation } from '@/components/navigation/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navigation />
      {children}
    </main>
  );
};
export default Layout;

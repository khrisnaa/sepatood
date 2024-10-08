import { Toaster } from '@/components/ui/toaster';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
      <Toaster />
    </div>
  );
};
export default Layout;

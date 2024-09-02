import { AdminNav } from '@/components/admin-nav';
import { Toaster } from '@/components/ui/toaster';
import { checkRole } from '@/lib/roles';
import { redirect } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  if (!checkRole('admin')) {
    redirect('/');
  }

  return (
    <main className="container min-h-screen space-y-8">
      <AdminNav />
      {children}
      <Toaster />
    </main>
  );
};
export default Layout;

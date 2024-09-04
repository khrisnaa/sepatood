import { AdminNav } from '@/components/admin-nav';
import { BreadcrumbDemo } from '@/components/breadrumb';
import { Toaster } from '@/components/ui/toaster';
import { checkRole } from '@/lib/roles';
import { redirect } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  if (!checkRole('admin')) {
    redirect('/home');
  }

  return (
    <main className="container min-h-screen space-y-8">
      <AdminNav />
      <BreadcrumbDemo />
      {children}
      <Toaster />
    </main>
  );
};
export default Layout;

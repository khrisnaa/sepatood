import { checkRole } from '@/lib/roles';
import { redirect } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  if (!checkRole('admin')) {
    redirect('/');
  }

  return <main>{children}</main>;
};
export default Layout;

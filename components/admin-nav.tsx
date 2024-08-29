import { AdminNavLinks } from '@/components/admin-nav-links';

import { UserButton } from '@clerk/nextjs';

export const AdminNav = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b px-4">
      <AdminNavLinks />
      <div className="flex items-center gap-4">
        <UserButton />
      </div>
    </div>
  );
};

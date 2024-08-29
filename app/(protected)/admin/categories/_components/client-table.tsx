'use client';

import { CategoryColumns, columns } from './columns';
import { DataTable } from '@/components/data-table/data-table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import { DashboardHeading } from '@/components/dashboard-heading';

export const ClientTable = ({ data }: { data: CategoryColumns[] }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between">
        <DashboardHeading
          title={`Categories (${data.length})`}
          description="Manage your existing categories to keep your store promotions up to date."
        />
        <Button onClick={() => router.push('/admin/categories/new')}>
          <Plus className="mr-4 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable keyword="name" columns={columns} data={data} />
    </div>
  );
};

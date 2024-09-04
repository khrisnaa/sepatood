'use client';

import { OrderColumns, columns } from './columns';
import { DataTable } from '@/components/data-table/data-table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import { DashboardHeading } from '@/components/dashboard-heading';

export const ClientTable = ({ data }: { data: OrderColumns[] }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between">
        <DashboardHeading
          title={`orders (${data.length})`}
          description="Manage your existing orders to keep your store promotions up to date."
        />
      </div>
      <Separator />
      <DataTable keyword="price" columns={columns} data={data} />
    </div>
  );
};

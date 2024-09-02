'use client';

import { ColumnDef } from '@tanstack/react-table';

import { BillboardType } from '@/types/definition';
import { format } from 'date-fns';
import { Actions } from './actions';
import { DataTableColumnHeader } from '@/components/data-table/tabel-header';
import { formatDate } from '@/lib/utils';

export type BillboardColumns = BillboardType & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<BillboardColumns>[] = [
  {
    id: 'label',
    accessorKey: 'label',
    header: 'Label',
  },
  {
    id: 'description',
    accessorKey: 'description',
    header: 'Description',
  },
  {
    id: 'date',
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const date = row.original.createdAt;
      return <div>{formatDate(date)}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const billboard = row.original;
      return <Actions data={billboard} />;
    },
  },
];

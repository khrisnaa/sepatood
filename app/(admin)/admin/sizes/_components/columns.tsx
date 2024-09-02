'use client';

import { ColumnDef } from '@tanstack/react-table';
import { SizeType } from '@/types/definition';
import { Actions } from './actions';
import { DataTableColumnHeader } from '@/components/data-table/tabel-header';
import { formatDate } from '@/lib/utils';

export type SizeColumns = SizeType & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<SizeColumns>[] = [
  {
    id: 'size',
    accessorKey: 'size',
    header: 'Size',
  },
  {
    id: 'length',
    accessorKey: 'length',
    header: 'Length',
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
      const data = row.original;
      return <Actions data={data} />;
    },
  },
];

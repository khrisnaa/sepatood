'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ShoeType } from '@/types/definition';
import { Actions } from './actions';
import { DataTableColumnHeader } from '@/components/data-table/tabel-header';
import { formatDate, formatPrice } from '@/lib/utils';

export type ShoesColumns = ShoeType & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<ShoesColumns>[] = [
  {
    id: 'brand',
    accessorKey: 'brand.name',
    header: 'Brand',
  },
  {
    id: 'model',
    accessorKey: 'model',
    header: 'Model',
  },
  {
    id: 'price',
    accessorKey: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const price = row.original.price;
      return <span>{formatPrice(price)}</span>;
    },
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

'use client';

import { ColumnDef } from '@tanstack/react-table';
import { OrderType } from '@/types/definition';
import { DataTableColumnHeader } from '@/components/data-table/tabel-header';
import { formatDate, formatPrice } from '@/lib/utils';
import { OrderStatus } from '@prisma/client';

export type OrderColumns = {
  id: string;
  userId: string;
  totalPrice: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<OrderColumns>[] = [
  {
    id: 'user',
    accessorKey: 'userId',
    header: 'User',
  },

  {
    id: 'price',
    accessorKey: 'totalPrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const price = row.original.totalPrice;
      return <div>{formatPrice(price)}</div>;
    },
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: 'Status',
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
];

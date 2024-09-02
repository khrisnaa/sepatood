'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ConditionType } from '@/types/definition';
import { Actions } from './actions';
import { DataTableColumnHeader } from '@/components/data-table/tabel-header';
import { formatDate } from '@/lib/utils';

export type ConditionColumns = ConditionType & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<ConditionColumns>[] = [
  {
    id: 'name',
    accessorKey: 'name',
    header: 'Name',
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
      const data = row.original;
      return <Actions data={data} />;
    },
  },
];

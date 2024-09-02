'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ColorType } from '@/types/definition';
import { Actions } from './actions';
import { DataTableColumnHeader } from '@/components/data-table/tabel-header';
import { formatDate } from '@/lib/utils';

export type ColorColumns = ColorType & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<ColorColumns>[] = [
  {
    id: 'name',
    accessorKey: 'name',
    header: 'Name',
  },
  {
    id: 'value',
    accessorKey: 'hexValue',
    header: 'Hex Value',
    cell: ({ row }) => {
      const hex = row.original.hexValue;
      return (
        <div className="flex gap-2">
          <div className={`h-5 w-5 rounded-full border bg-[${hex}]`}></div>
          {hex}
        </div>
      );
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

'use client';

import { ConditionColumns } from './columns';
import { AlertModal } from '@/components/alert-modal';
import { CellActions } from '@/components/data-table/cell-actions';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAlertModal } from '@/hooks/use-alert-modal';
import { deleteCondition } from '@/actions/conditions';

export const Actions = ({ data }: { data: ConditionColumns }) => {
  const router = useRouter();
  const { toast } = useToast();
  const { open, setOpen } = useAlertModal();

  const [loading, setLoading] = useState(false);

  const onCopy = () => {
    toast({
      description: 'Condition ID copied to clipboard.',
    });
    data.id && navigator.clipboard.writeText(data.id);
  };

  const onUpdate = () => {
    router.push(`/admin/conditions/${data.id}`);
  };

  const onDelete = async () => {
    setLoading(true);
    try {
      await deleteCondition(data.id);
      toast({
        description: 'Condition deleted.',
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        description:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred.',
      });
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <AlertModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />

      <CellActions
        onCopy={onCopy}
        onUpdate={onUpdate}
        onDelete={() => setOpen(true)}
        loading={loading}
      />
    </div>
  );
};

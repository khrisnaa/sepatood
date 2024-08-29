'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AlertModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

export const AlertModal = ({
  open,
  onClose,
  onConfirm,
  loading,
}: AlertModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete and
            remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="pt-6 sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="w-32"
              size="sm"
              disabled={loading}
            >
              Close
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={onConfirm}
            className="w-32"
            size="sm"
            disabled={loading}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

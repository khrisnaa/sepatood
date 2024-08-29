'use client';

import { DashboardHeading } from '@/components/dashboard-heading';
import { Billboard } from '@prisma/client';
import { BillboardSchema } from '@/lib/zod';
import { BillboardType } from '@/types/definition';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ImageUpload } from '@/components/image-upload';
import { Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { AlertModal } from '@/components/alert-modal';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  createBillboard,
  deleteBillboard,
  updateBillboard,
} from '@/actions/billboards';
import { useAlertModal } from '@/hooks/use-alert-modal';

interface BillboardFormProps {
  initialData: Billboard | null;
}

export const BillboardForm = ({ initialData }: BillboardFormProps) => {
  const router = useRouter();
  const { billboardId } = useParams();
  const { toast } = useToast();
  const { open, setOpen } = useAlertModal();

  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Billboard' : 'Create a New Billboard';
  const description = initialData
    ? 'Make changes to your billboard'
    : 'Add a new billboard to your store';
  const action = initialData ? 'Save Changes' : 'Create Billboard';
  const toastMessage = initialData
    ? 'Billboard updated.'
    : 'Billboard created.';

  const form = useForm<BillboardType>({
    resolver: zodResolver(BillboardSchema),
    defaultValues: initialData || {
      label: '',
      backgroundUrl: '',
      description: '',
    },
  });

  const onSubmit = async (values: BillboardType) => {
    setLoading(true);
    try {
      if (initialData) {
        await updateBillboard(String(billboardId), values);
      } else {
        await createBillboard(values);
      }
      toast({
        description: toastMessage,
      });
      router.push(`/admin/billboards`);
      router.refresh();
    } catch (error) {
      toast({
        description:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred.',
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    setLoading(true);
    try {
      await deleteBillboard(String(billboardId));
      toast({
        description: 'Billboard deleted.',
      });
      router.refresh();
    } catch (error) {
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
    <div className="flex flex-col space-y-6">
      <AlertModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
      />
      <div className="flex justify-between">
        <DashboardHeading title={title} description={description} />
        {initialData && (
          <Button
            size="lg"
            className="p-4"
            onClick={() => setOpen(true)}
            disabled={loading}
          >
            <Trash className="h-5 w-5" />
          </Button>
        )}
      </div>

      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 py-8"
        >
          <FormField
            control={form.control}
            name="backgroundUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    onChange={(url) => {
                      field.onChange(url);
                    }}
                    onRemove={() => field.onChange('')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter billboard label" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter billboard description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full justify-center pt-8">
            <Button
              type="submit"
              size="lg"
              className="w-full max-w-md"
              disabled={loading}
            >
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

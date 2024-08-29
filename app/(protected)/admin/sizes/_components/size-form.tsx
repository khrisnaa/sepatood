'use client';

import { DashboardHeading } from '@/components/dashboard-heading';
import { Size } from '@prisma/client';
import { SizeSchema } from '@/lib/zod';
import { SizeType } from '@/types/definition';
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
import { Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { AlertModal } from '@/components/alert-modal';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

import { createSize, deleteSize, updateSize } from '@/actions/sizes';
import { useAlertModal } from '@/hooks/use-alert-modal';

interface SizeFormProps {
  initialData: Size | null;
}

export const SizeForm = ({ initialData }: SizeFormProps) => {
  const router = useRouter();
  const { sizeId } = useParams();
  const { toast } = useToast();
  const { open, setOpen } = useAlertModal();

  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Size' : 'Create a New Size';
  const description = initialData
    ? 'Make changes to your size'
    : 'Add a new size to your store';
  const action = initialData ? 'Save Changes' : 'Create Size';
  const toastMessage = initialData ? 'Size updated.' : 'Size created.';

  const form = useForm<SizeType>({
    resolver: zodResolver(SizeSchema),
    defaultValues: initialData || {
      size: undefined,
      length: 0,
    },
  });

  const onSubmit = async (values: SizeType) => {
    setLoading(true);
    try {
      if (initialData) {
        await updateSize(String(sizeId), values);
      } else {
        await createSize(values);
      }
      toast({
        description: toastMessage,
      });
      router.push(`/admin/sizes`);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    setLoading(true);
    try {
      await deleteSize(String(sizeId));
      toast({
        description: 'Size deleted.',
      });
      router.push(`/sizes`);
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
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="any"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      placeholder="Enter shoe size "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="length"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Length</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      step="any"
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                      placeholder="Enter size length"
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

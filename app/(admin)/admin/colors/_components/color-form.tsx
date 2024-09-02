'use client';

import { DashboardHeading } from '@/components/dashboard-heading';
import { Color } from '@prisma/client';
import { ColorSchema } from '@/lib/zod';
import { ColorType } from '@/types/definition';
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
import { createColor, deleteColor, updateColor } from '@/actions/colors';
import { useAlertModal } from '@/hooks/use-alert-modal';

interface ColorFormProps {
  initialData: Color | null;
}

export const ColorForm = ({ initialData }: ColorFormProps) => {
  const router = useRouter();
  const { colorId } = useParams();
  const { toast } = useToast();
  const { open, setOpen } = useAlertModal();

  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Color' : 'Create a New Color';
  const description = initialData
    ? 'Make changes to your color'
    : 'Add a new color to your store';
  const action = initialData ? 'Save Changes' : 'Create Color';
  const toastMessage = initialData ? 'Color updated.' : 'Color created.';

  const form = useForm<ColorType>({
    resolver: zodResolver(ColorSchema),
    defaultValues: initialData || {
      name: '',
      hexValue: '',
    },
  });

  const onSubmit = async (values: ColorType) => {
    setLoading(true);
    try {
      if (initialData) {
        await updateColor(String(colorId), values);
      } else {
        await createColor(values);
      }
      toast({
        description: toastMessage,
      });
      router.push(`/admin/colors`);
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
      await deleteColor(String(colorId));
      setOpen(false);
      router.push(`/admin/colors`);
      router.refresh();
    } catch (error) {
    } finally {
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter color name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hexValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hex Value</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter color hex value" />
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

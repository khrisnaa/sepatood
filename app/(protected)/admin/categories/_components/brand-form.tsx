'use client';

import { DashboardHeading } from '@/components/dashboard-heading';
import { Category } from '@prisma/client';
import { CategorySchema } from '@/lib/zod';
import { CategoryType } from '@/types/definition';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createBrand, deleteBrand, updateBrand } from '@/actions/brands';
import { useAlertModal } from '@/hooks/use-alert-modal';
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from '@/actions/categories';

interface CategoryFormProps {
  initialData: Category | null;
}

export const CategoryForm = ({ initialData }: CategoryFormProps) => {
  const router = useRouter();
  const { categoryId } = useParams();
  const { toast } = useToast();
  const { open, setOpen } = useAlertModal();

  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Category' : 'Create a New Category';
  const description = initialData
    ? 'Make changes to your category'
    : 'Add a new category to your store';
  const action = initialData ? 'Save Changes' : 'Create Category';
  const toastMessage = initialData ? 'Category updated.' : 'Category created.';

  const form = useForm<CategoryType>({
    resolver: zodResolver(CategorySchema),
    defaultValues: initialData || {
      name: '',
      description: '',
    },
  });

  const onSubmit = async (values: CategoryType) => {
    setLoading(true);
    try {
      if (initialData) {
        await updateCategory(String(categoryId), values);
      } else {
        await createCategory(values);
      }
      toast({
        description: toastMessage,
      });
      router.push(`/admin/categories`);
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
      await deleteCategory(String(categoryId));
      toast({
        description: 'Category deleted.',
      });
      router.push(`/admin/categories`);
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
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter brand name" />
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
                      placeholder="Enter brand description"
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

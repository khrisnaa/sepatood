'use client';

import { DashboardHeading } from '@/components/dashboard-heading';
import {
  Shoe,
  Brand,
  Color,
  Size,
  ShoeImage,
  ShoeColor,
  ShoeCategory,
  Condition,
  Category,
} from '@prisma/client';
import { ShoeSchema } from '@/lib/zod';
import { ShoeType } from '@/types/definition';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormDescription,
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
import { Checkbox } from '@/components/ui/checkbox';
import { createShoe, deleteShoe, updateShoe } from '@/actions/shoes';
import { useAlertModal } from '@/hooks/use-alert-modal';

interface ShoesFormProps {
  initialData:
    | (Shoe & {
        shoeImages: ShoeImage[];
        shoeCategories: ShoeCategory[];
        shoeColors: ShoeColor[];
      })
    | null;
  brands: Brand[];
  conditions: Condition[];
  sizes: Size[];
  colors: Color[];
  categories: Category[];
}

export const ShoesForm = ({
  initialData,
  brands,
  conditions,
  sizes,
  colors,
  categories,
}: ShoesFormProps) => {
  const router = useRouter();
  const { shoeId } = useParams();
  const { toast } = useToast();
  const { open, setOpen } = useAlertModal();

  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Shoes' : 'Create a New Shoes';
  const description = initialData
    ? 'Make changes to your shoes'
    : 'Add a new shoes to your store';
  const action = initialData ? 'Save Changes' : 'Create Shoes';
  const toastMessage = initialData ? 'Shoe updated.' : 'Shoe created.';

  const form = useForm<ShoeType>({
    resolver: zodResolver(ShoeSchema),
    defaultValues: initialData || {
      brandId: '',
      conditionId: '',
      sizeId: '',
      model: '',
      price: 0,
      stock: 1,
      description: '',
      isArchived: false,
      isFeatured: false,
      shoeImages: [],
      shoeColors: [],
      shoeCategories: [],
    },
  });

  const onSubmit = async (values: ShoeType) => {
    setLoading(true);
    try {
      if (initialData) {
        await updateShoe(String(shoeId), values);
      } else {
        await createShoe(values);
      }
      toast({
        description: toastMessage,
      });
      router.push(`/admin/shoes`);
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
      await deleteShoe(String(shoeId));
      toast({
        description: 'Shoe deleted.',
      });
      router.push(`/admin/shoes`);
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
          <FormField
            control={form.control}
            name="shoeImages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <ImageUpload
                    {...field}
                    value={field.value.map((image) => image.url)}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter((current) => current.url !== url),
                      ])
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="brandId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select
                    onValueChange={(e) => {
                      field.onChange(e);
                    }}
                    value={field.value}
                    defaultValue={field.value}
                    disabled={loading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a brand"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand.id} value={brand.id}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="conditionId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Condition</FormLabel>
                  <Select
                    onValueChange={(e) => {
                      field.onChange(e);
                    }}
                    value={field.value}
                    defaultValue={field.value}
                    disabled={loading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a condition"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition.id} value={condition.id}>
                          {condition.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sizeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <Select
                    onValueChange={(e) => {
                      field.onChange(e);
                    }}
                    value={field.value}
                    defaultValue={field.value}
                    disabled={loading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a size"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sizes.map((size) => (
                        <SelectItem key={size.id} value={size.id}>
                          {size.size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter shoe model" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      min={0}
                      {...field}
                      value={field.value === 0 ? '' : field.value}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                      placeholder="Enter shoe price"
                    />
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
                      placeholder="Enter shoes description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isFeatured"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Featured</FormLabel>
                  <div className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-0 space-y-1">
                      <FormDescription>
                        This product will appear on the home page
                      </FormDescription>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isArchived"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Archived</FormLabel>
                  <div className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-0 space-y-1">
                      <FormDescription>
                        This product will not appear on the product list
                      </FormDescription>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="hidden"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      placeholder="Enter shoe stock"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shoeColors"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Colors</FormLabel>
                    <FormDescription>Select colors.</FormDescription>
                  </div>
                  {colors.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="shoeColors"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.some(
                                  (color) => color.colorId === item.id,
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        { colorId: item.id },
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value.colorId !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shoeCategories"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Categories</FormLabel>
                    <FormDescription>Select categories.</FormDescription>
                  </div>
                  {categories.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="shoeCategories"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.some(
                                  (value) => value.categoryId === item.id,
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        { categoryId: item.id },
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value.categoryId !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
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

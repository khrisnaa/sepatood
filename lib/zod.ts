import { OrderStatus, Role } from '@prisma/client';
import { z } from 'zod';

export const RoleEnum = z.enum([Role.USER, Role.ADMIN], {
  errorMap: () => ({ message: "Role must be either 'USER' or 'ADMIN'." }),
});

export const StatusEnum = z.enum(
  [OrderStatus.PENDING, OrderStatus.COMPLETE, OrderStatus.CANCLE],
  {
    errorMap: () => ({
      message: "Status must be 'PENDING', 'COMPLETE', or 'CANCLE'.",
    }),
  },
);

export const UserSchema = z.object({
  clerkUserId: z.string().min(1, { message: 'Clerk User ID is required.' }),
  name: z.string().nullable().optional(),
  email: z.string().email({ message: 'Invalid email format.' }),
  role: RoleEnum,
  imageUrl: z
    .string()
    .url({ message: 'Invalid image URL format.' })
    .nullable()
    .optional(),
});

export const BillboardSchema = z.object({
  label: z.string().min(1, { message: 'Label is required.' }),
  description: z.string().min(1, { message: 'Description is required.' }),
  backgroundUrl: z.string().url({ message: 'Invalid background URL format.' }),
});

export const BrandSchema = z.object({
  billboardId: z.string().min(1, { message: 'Billboard ID is required.' }),
  name: z.string().min(1, { message: 'Name is required.' }),
  description: z.string().min(1, { message: 'Description is required.' }),
  logoUrl: z.string().url({ message: 'Invalid logo URL format.' }),
});

export const ConditionSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  description: z.string().min(1, { message: 'Description is required.' }),
});

export const SizeSchema = z.object({
  size: z.number().min(0, { message: 'Size must be a positive number.' }),
  length: z.number().min(0, { message: 'Length must be a positive number.' }),
});

export const ColorSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  hexValue: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, { message: 'Invalid hex color value.' }),
});

export const CategorySchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  description: z.string().min(1, { message: 'Description is required.' }),
});

export const ShoeSchema = z.object({
  brandId: z.string().min(1, { message: 'Brand ID is required.' }),
  model: z.string().min(1, { message: 'Model is required.' }),
  sizeId: z.string().min(1, { message: 'Size ID is required.' }),
  conditionId: z.string().min(1, { message: 'Condition ID is required.' }),
  price: z.number().min(0, { message: 'Price must be a positive number.' }),
  stock: z.number().min(0, { message: 'Stock must be a positive integer.' }),
  description: z.string().min(1, { message: 'Description is required.' }),
  isArchived: z.boolean().optional(),
  isFeatured: z.boolean().optional(),
  shoeImages: z
    .object({ url: z.string().url({ message: 'Invalid image URL format.' }) })
    .array(),
  shoeColors: z
    .object({
      colorId: z.string().min(1, { message: 'Color ID is required.' }),
    })
    .array(),
  shoeCategories: z
    .object({
      categoryId: z.string().min(1, { message: 'Category ID is required.' }),
    })
    .array(),
});

export const ShoeImageSchema = z.object({
  shoeId: z.string().min(1, { message: 'Shoe ID is required.' }),
  url: z.string().url({ message: 'Invalid image URL format.' }),
});

export const ShoeColorSchema = z.object({
  shoeId: z.string().min(1, { message: 'Shoe ID is required.' }),
  colorId: z.string().min(1, { message: 'Color ID is required.' }),
});

export const ShoeCategorySchema = z.object({
  shoeId: z.string().min(1, { message: 'Shoe ID is required.' }),
  categoryId: z.string().min(1, { message: 'Category ID is required.' }),
});

export const CartSchema = z.object({
  userId: z.string().min(1, { message: 'User ID is required.' }),
  shoeId: z.string().min(1, { message: 'Shoe ID is required.' }),
});

export const CartItemSchema = z.object({
  cartId: z.string().min(1, { message: 'Cart ID is required.' }),
  shoeId: z.string().min(1, { message: 'Shoe ID is required.' }),
});

export const OrderSchema = z.object({
  userId: z.string().min(1, { message: 'User ID is required.' }),
  // totalPrice: z
  //   .number()
  //   .min(0, { message: 'Total price must be a positive number.' }),
  // status: StatusEnum,
  cartId: z.string().min(1, { message: 'Cart ID is required.' }),
});

export const OrderItemSchema = z.object({
  orderId: z.string().min(1, { message: 'Order ID is required.' }),
  shoeId: z.string().min(1, { message: 'Shoe ID is required.' }),
});

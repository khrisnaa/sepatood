import {
  RoleEnum,
  StatusEnum,
  UserSchema,
  BillboardSchema,
  BrandSchema,
  ConditionSchema,
  SizeSchema,
  ColorSchema,
  CategorySchema,
  ShoeSchema,
  ShoeImageSchema,
  ShoeColorSchema,
  ShoeCategorySchema,
  CartSchema,
  CartItemSchema,
  OrderSchema,
  OrderItemSchema,
} from '@/lib/zod';
import { z } from 'zod';

export type RoleType = z.infer<typeof RoleEnum>;
export type StatusType = z.infer<typeof StatusEnum>;
export type UserType = z.infer<typeof UserSchema>;
export type BillboardType = z.infer<typeof BillboardSchema>;
export type BrandType = z.infer<typeof BrandSchema>;
export type ConditionType = z.infer<typeof ConditionSchema>;
export type SizeType = z.infer<typeof SizeSchema>;
export type ColorType = z.infer<typeof ColorSchema>;
export type CategoryType = z.infer<typeof CategorySchema>;
export type ShoeType = z.infer<typeof ShoeSchema>;
export type ShoeImageType = z.infer<typeof ShoeImageSchema>;
export type ShoeColorType = z.infer<typeof ShoeColorSchema>;
export type ShoeCategoryType = z.infer<typeof ShoeCategorySchema>;
export type CartType = z.infer<typeof CartSchema>;
export type CartItemType = z.infer<typeof CartItemSchema>;
export type OrderType = z.infer<typeof OrderSchema>;
export type OrderItemType = z.infer<typeof OrderItemSchema>;

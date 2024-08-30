'use server';

import { db } from '@/lib/db';
import { CartSchema } from '@/lib/zod';
import { CartType } from '@/types/definition';

export const addToCart = async (values: CartType) => {
  try {
    const validateFields = CartSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    const { shoeId, userId } = validateFields.data;

    const existingCart = await db.cart.findUnique({ where: { userId } });
    if (existingCart) {
      const cart = await db.cart.update({
        where: { id: existingCart.id },
        data: {
          userId,
          cartItems: {
            create: {
              shoeId,
            },
          },
        },
      });
      return cart;
    }
    const cart = await db.cart.create({
      data: {
        userId,
        cartItems: {
          create: {
            shoeId,
          },
        },
      },
    });
    return cart;
  } catch (error) {
    console.log('ADD_TO_CART => ', error);
    throw new Error('Unable add shoe to cart.');
  }
};

export const getCartDetailsByUserId = async (userId: string) => {
  try {
    const cart = await db.cart.findUnique({
      where: { userId },
      include: {
        cartItems: {
          include: {
            shoe: {
              include: {
                shoeImages: true,
                shoeCategories: true,
                shoeColors: true,
                brand: true,
                size: true,
                condition: true,
              },
            },
          },
        },
      },
    });

    return cart;
  } catch (error) {
    console.log('GET_CART_DETAILS => ', error);
    throw new Error('Unable get cart details.');
  }
};

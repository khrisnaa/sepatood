'use server';

import { db } from '@/lib/db';
import { OrderSchema } from '@/lib/zod';
import { OrderType } from '@/types/definition';
import { OrderStatus } from '@prisma/client';

export const createOrder = async (values: OrderType) => {
  try {
    const validateFields = OrderSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    const { userId, cartId, totalPrice } = validateFields.data;

    const cartItems = await db.cartItem.findMany({
      where: { cartId },
      include: { shoe: true },
    });

    const orderItems = cartItems.map((item) => {
      return { shoeId: item.shoeId };
    });

    await db.order.create({
      data: {
        userId,
        status: OrderStatus.PENDING,
        totalPrice,
        orderItems: {
          createMany: {
            data: [
              ...orderItems.map((orderItem: { shoeId: string }) => orderItem),
            ],
          },
        },
      },
    });

    await db.cart.delete({ where: { userId } });
  } catch (error) {
    console.log('CREATE_ORDER => ', error);
    throw new Error('Unable to create order.');
  }
};

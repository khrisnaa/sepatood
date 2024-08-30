'use server';

import { db } from '@/lib/db';
import { ShoeSchema } from '@/lib/zod';
import { ShoeType } from '@/types/definition';

export const createShoe = async (values: ShoeType) => {
  try {
    const validateFields = ShoeSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    const { shoeCategories, shoeColors, shoeImages } = validateFields.data;

    await db.shoe.create({
      data: {
        ...validateFields.data,
        shoeImages: {
          createMany: {
            data: [
              ...shoeImages.map((shoeImage: { url: string }) => shoeImage),
            ],
          },
        },
        shoeColors: {
          createMany: {
            data: [
              ...shoeColors.map((shoeColor: { colorId: string }) => shoeColor),
            ],
          },
        },
        shoeCategories: {
          createMany: {
            data: [
              ...shoeCategories.map(
                (shoeCategory: { categoryId: string }) => shoeCategory,
              ),
            ],
          },
        },
      },
    });
  } catch (error) {
    console.log('CREATE_SHOE => ', error);
    throw new Error('Unable to create size.');
  }
};

export const getShoes = async () => {
  try {
    const shoes = await db.shoe.findMany({
      include: {
        brand: true,
        condition: true,
        shoeCategories: { include: { category: true } },
        shoeColors: { include: { color: true } },
        shoeImages: true,
        size: true,
      },
    });

    return shoes;
  } catch (error) {
    console.log('GET_SHOES => ', error);
    throw new Error('Unable to get shoes.');
  }
};

export const getShoe = async (id: string) => {
  try {
    const shoe = await db.shoe.findUnique({
      where: { id },
      include: {
        brand: true,
        condition: true,
        shoeCategories: { include: { category: true } },
        shoeColors: { include: { color: true } },
        shoeImages: true,
        size: true,
      },
    });

    return shoe;
  } catch (error) {
    console.log('GET_SHOE => ', error);
    throw new Error('Unable to get the shoe.');
  }
};

export const updateShoe = async (id: string, values: ShoeType) => {
  try {
    const validateFields = ShoeSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    const { shoeCategories, shoeColors, shoeImages } = validateFields.data;

    await db.shoe.update({
      where: { id },
      data: {
        ...validateFields.data,
        shoeImages: {
          deleteMany: {},
        },
        shoeColors: {
          deleteMany: {},
        },
        shoeCategories: {
          deleteMany: {},
        },
      },
    });

    await db.shoe.update({
      where: { id },
      data: {
        ...validateFields.data,
        shoeImages: {
          createMany: {
            data: [
              ...shoeImages.map((shoeImage: { url: string }) => shoeImage),
            ],
          },
        },
        shoeColors: {
          createMany: {
            data: [
              ...shoeColors.map((shoeColor: { colorId: string }) => shoeColor),
            ],
          },
        },
        shoeCategories: {
          createMany: {
            data: [
              ...shoeCategories.map(
                (shoeCategory: { categoryId: string }) => shoeCategory,
              ),
            ],
          },
        },
      },
    });
  } catch (error) {
    console.log('UPDATE_SHOE => ', error);
    throw new Error('Unable to update shoe.');
  }
};

export const deleteShoe = async (id: string) => {
  try {
    await db.shoe.delete({ where: { id } });
  } catch (error) {
    console.log('DELETE_SHOE => ', error);
    throw new Error('Unable to delete shoe.');
  }
};

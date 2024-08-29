'use server';

import { db } from '@/lib/db';
import { ColorSchema } from '@/lib/zod';
import { ColorType } from '@/types/definition';

export const createColor = async (values: ColorType) => {
  try {
    const validateFields = ColorSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.color.create({
      data: validateFields.data,
    });
  } catch (error) {
    console.log('CREATE => ', error);
    throw new Error('Unable to create color.');
  }
};

export const getColors = async () => {
  try {
    const colors = await db.color.findMany();
    return colors;
  } catch (error) {
    console.log('GET_COLORS => ', error);
    throw new Error('Unable to get colors.');
  }
};

export const getColor = async (id: string) => {
  try {
    const color = await db.color.findUnique({ where: { id } });
    return color;
  } catch (error) {
    console.log('GET_COLOR => ', error);
    throw new Error('Unable to get the color.');
  }
};

export const updateColor = async (id: string, values: ColorType) => {
  try {
    const validateFields = ColorSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.color.update({
      where: { id },
      data: validateFields.data,
    });
  } catch (error) {
    console.log('UPDATE_COLOR => ', error);
    throw new Error('Unable to update color.');
  }
};

export const deleteColor = async (id: string) => {
  try {
    await db.color.delete({ where: { id } });
  } catch (error) {
    console.log('DELETE_COLOR => ', error);
    throw new Error('Unable to delete color.');
  }
};

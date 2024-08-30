'use server';

import { db } from '@/lib/db';
import { SizeSchema } from '@/lib/zod';
import { SizeType } from '@/types/definition';

export const createSize = async (values: SizeType) => {
  try {
    const validateFields = SizeSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.size.create({
      data: validateFields.data,
    });
  } catch (error) {
    console.log('CREATE_SIZE => ', error);
    throw new Error('Unable to create size.');
  }
};

export const getSizes = async () => {
  try {
    const sizes = await db.size.findMany({ orderBy: { size: 'asc' } });
    return sizes;
  } catch (error) {
    console.log('GET_SIZES => ', error);
    throw new Error('Unable to get sizes.');
  }
};

export const getSize = async (id: string) => {
  try {
    const size = await db.size.findUnique({ where: { id } });
    return size;
  } catch (error) {
    console.log('GET_SIZE => ', error);
    throw new Error('Unable to get the size.');
  }
};

export const updateSize = async (id: string, values: SizeType) => {
  try {
    const validateFields = SizeSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Inavlid input.');
    }

    await db.size.update({
      where: { id },
      data: validateFields.data,
    });
  } catch (error) {
    console.log('UPDATE_SIZE => ', error);
    throw new Error('Unable to update size.');
  }
};

export const deleteSize = async (id: string) => {
  try {
    await db.size.delete({ where: { id } });
  } catch (error) {
    console.log('DELETE_SIZE => ', error);
    throw new Error('Unable to delete size.');
  }
};

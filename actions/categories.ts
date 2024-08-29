'use server';

import { db } from '@/lib/db';
import { CategorySchema } from '@/lib/zod';
import { CategoryType } from '@/types/definition';

export const createCategory = async (values: CategoryType) => {
  try {
    const validateFields = CategorySchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.category.create({
      data: validateFields.data,
    });
  } catch (error) {
    console.log('CREATE_CATEGORY => ', error);
    throw new Error('Unable to create category.');
  }
};

export const getCategories = async () => {
  try {
    const categories = await db.category.findMany();
    return categories;
  } catch (error) {
    console.log('GET_CATEGORYS => ', error);
    throw new Error('Unable to get categories.');
  }
};

export const getCategory = async (id: string) => {
  try {
    const category = await db.category.findUnique({ where: { id } });
    return category;
  } catch (error) {
    console.log('GET_CATEGORY =>', error);
    throw new Error('Unable to get the category.');
  }
};

export const updateCategory = async (id: string, values: CategoryType) => {
  try {
    const validateFields = CategorySchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.category.update({
      where: { id },
      data: validateFields.data,
    });
  } catch (error) {
    console.log('UPDATE_CATEGORY => ', error);
    throw new Error('Unable to update category.');
  }
};

export const deleteCategory = async (id: string) => {
  try {
    await db.category.delete({ where: { id } });
  } catch (error) {
    console.log('DELETE_CATEGORY => ', error);
    throw new Error('Unable to delete category.');
  }
};

'use server';

import { db } from '@/lib/db';
import { BrandSchema } from '@/lib/zod';
import { BrandType } from '@/types/definition';

export const createBrand = async (values: BrandType) => {
  try {
    const validateFields = BrandSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.brand.create({
      data: validateFields.data,
    });
  } catch (error) {
    console.log('CREATE_BRAND => ', error);
    throw new Error('Unable to create brand.');
  }
};

export const getBrands = async () => {
  try {
    const brands = await db.brand.findMany();
    return brands;
  } catch (error) {
    console.log('GET_BRANDS => ', error);
    throw new Error('Unable to get brands.');
  }
};

export const getBrand = async (id: string) => {
  try {
    const brand = await db.brand.findUnique({ where: { id } });
    return brand;
  } catch (error) {
    console.log('GET_BRAND =>', error);
    throw new Error('Unable to get the brand.');
  }
};

export const updateBrand = async (id: string, values: BrandType) => {
  try {
    const validateFields = BrandSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.brand.update({
      where: { id },
      data: validateFields.data,
    });
  } catch (error) {
    console.log('UPDATE_BRAND => ', error);
    throw new Error('Unable to update brand.');
  }
};

export const deleteBrand = async (id: string) => {
  try {
    await db.brand.delete({ where: { id } });
  } catch (error) {
    console.log('DELETE_BRAND =>', error);
    throw new Error('Unable to delete brand.');
  }
};

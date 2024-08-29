'use server';

import { db } from '@/lib/db';
import { BillboardSchema } from '@/lib/zod';
import { BillboardType } from '@/types/definition';

export const createBillboard = async (values: BillboardType) => {
  try {
    const validateFields = BillboardSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.billboard.create({
      data: validateFields.data,
    });
  } catch (error) {
    console.log('CREATE_BILLBOARD => ', error);
    throw new Error('Unable to create billboard.');
  }
};

export const getBillboards = async () => {
  try {
    const billboards = await db.billboard.findMany();
    return billboards;
  } catch (error) {
    console.log('GET_BILLBOARDS => ', error);
    throw new Error('Unable to get billboards.');
  }
};

export const getBillboard = async (id: string) => {
  try {
    const billboard = await db.billboard.findUnique({
      where: { id },
      include: { brands: true },
    });
    return billboard;
  } catch (error) {
    console.log('GET_BILLBOARD => ', error);
    throw new Error('Unable to get the billboard.');
  }
};

export const updateBillboard = async (id: string, values: BillboardType) => {
  try {
    const validateFields = BillboardSchema.safeParse(values);
    if (!validateFields.success) {
      return { message: 'Invalid input.' };
    }

    await db.billboard.update({
      where: { id },
      data: validateFields.data,
    });
  } catch (error) {
    console.log('UPDATE_BILLBOARD => ', error);
    throw new Error('Unable to update billboard.');
  }
};

export const deleteBillboard = async (id: string) => {
  try {
    await db.billboard.delete({
      where: { id },
    });
  } catch (error) {
    console.log('DELETE_BILLBOARD => ', error);
    throw new Error('Unable to delete billboard.');
  }
};

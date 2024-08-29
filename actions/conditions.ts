'use server';

import { db } from '@/lib/db';
import { ConditionSchema } from '@/lib/zod';
import { ConditionType } from '@/types/definition';

export const createCondition = async (values: ConditionType) => {
  try {
    const validateFields = ConditionSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.condition.create({
      data: validateFields.data,
    });
  } catch (error) {
    console.log('CREATE_CONDITION => ', error);
    throw new Error('Unable to create condition.');
  }
};

export const getConditions = async () => {
  try {
    const conditions = await db.condition.findMany();
    return conditions;
  } catch (error) {
    console.log('GET_CONDITIONS => ', error);
    throw new Error('Unable to get conditions.');
  }
};

export const getCondition = async (id: string) => {
  try {
    const condition = await db.condition.findUnique({ where: { id } });
    return condition;
  } catch (error) {
    console.log('GET_CONDITION => ', error);
    throw new Error('Unable to get the condition.');
  }
};

export const updateCondition = async (id: string, values: ConditionType) => {
  try {
    const validateFields = ConditionSchema.safeParse(values);
    if (!validateFields.success) {
      throw new Error('Invalid input.');
    }

    await db.condition.update({
      where: { id },
      data: validateFields.data,
    });
  } catch (error) {
    console.log('UPDATE_CONDITION => ', error);
    throw new Error('Unable to update condition.');
  }
};

export const deleteCondition = async (id: string) => {
  try {
    await db.condition.delete({ where: { id } });
  } catch (error) {
    console.log('DELETE_CONDITION => ', error);
    throw new Error('Unable to delete condition.');
  }
};

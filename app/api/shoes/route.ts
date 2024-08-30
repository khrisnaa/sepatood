import { getShoes } from '@/actions/shoes';
import { db } from '@/lib/db';
import { ShoeSchema } from '@/lib/zod';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const body = await req.json();

  const validateFields = ShoeSchema.safeParse(body);
  if (!validateFields.success) {
    return new NextResponse('invalid input', { status: 400 });
  }

  const {
    brandId,
    conditionId,
    description,
    model,
    price,
    sizeId,
    stock,
    isArchived,
    isFeatured,
    shoeCategories,
    shoeColors,
    shoeImages,
  } = validateFields.data;

  const shoes = await db.shoe.create({
    data: {
      brandId,
      conditionId,
      description,
      model,
      price,
      sizeId,
      stock,
      isArchived,
      isFeatured,
      shoeImages: {
        createMany: {
          data: [...shoeImages.map((shoeImage: { url: string }) => shoeImage)],
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

  return NextResponse.json(shoes, { status: 200 });
};

export const GET = async () => {
  const shoes = await getShoes();

  return NextResponse.json(shoes);
};

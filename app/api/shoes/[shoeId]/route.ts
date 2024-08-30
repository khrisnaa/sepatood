import { getShoe } from '@/actions/shoes';
import { NextResponse } from 'next/server';

export const GET = async (
  req: Request,
  { params }: { params: { shoeId: string } },
) => {
  const shoe = await getShoe(params.shoeId);

  return NextResponse.json(shoe);
};

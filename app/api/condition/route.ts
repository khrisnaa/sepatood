import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const body = await req.json();

  const res = await db.condition.createMany({ data: [...body.conditions] });
  return NextResponse.json({ res });
};

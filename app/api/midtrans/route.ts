import { db } from '@/lib/db';
import Midtrans, { Snap } from 'midtrans-client';
import { NextResponse } from 'next/server';

let snap = new Snap({
  // Set to true if you want Production Environment (accept real transaction).
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY,
});

export const POST = async (req: Request) => {
  const body = await req.json();
  const { orderId, totalPrice } = body;

  const existingTransaction = await db.transaction.findFirst({
    where: { orderId },
  });

  if (existingTransaction && existingTransaction.token) {
    return NextResponse.json({ token: existingTransaction.token });
  }

  let parameter: any = {
    transaction_details: {
      order_id: orderId,
      gross_amount: Number(totalPrice),
    },
  };

  const token = await snap.createTransactionToken(parameter);

  await db.transaction.create({ data: { orderId, token } });
  return NextResponse.json({ token });

  //   const token = await snap.createTransaction(parameter)
  //   .then((transaction)=>{
  //       // transaction token
  //       let transactionToken = transaction.token;
  //       console.log('transactionToken:',transactionToken);
  //   })
};

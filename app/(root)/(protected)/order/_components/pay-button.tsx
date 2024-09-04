'use client';
import { MotionButton } from '@/components/motion-button';

import axios from 'axios';
interface PayButtonProps {
  orderId: string;
  totalPrice: number;
}
export const PayButton = ({ orderId, totalPrice }: PayButtonProps) => {
  const onPay = async () => {
    const res = await axios.post('/api/midtrans', {
      orderId,
      totalPrice,
    });
    // console.log(res.data.token);
    console.log(res.data.token);

    (window as any).snap.pay(res.data.token);
  };
  return <MotionButton onClick={onPay}>PAY</MotionButton>;
};

'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MotionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const MotionButton = ({
  children,
  onClick,
  className,
  ...rest
}: MotionButtonProps) => {
  return (
    <motion.button
      className={cn(
        'relative inline-flex h-12 items-center justify-center overflow-hidden whitespace-nowrap bg-primary px-8 font-anton text-xl uppercase text-secondary lg:text-2xl',
        className,
      )}
      initial="initial"
      whileHover="hovered"
      onClick={onClick}
    >
      <motion.div
        className="flex h-full items-center justify-center"
        variants={{ initial: { y: 0 }, hovered: { y: '-100%' } }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 flex h-full items-center justify-center"
        variants={{ initial: { y: '100%' }, hovered: { y: 0 } }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

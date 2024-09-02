'use client';

import { animate, useMotionValue, motion } from 'framer-motion';
import { BillboardCarousel } from './billboard-carousel';
import useMeasure from 'react-use-measure';
import { useEffect } from 'react';

export const BillboardCarouselSection = () => {
  let [ref, { width }] = useMeasure();

  const xTransaltion = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTransaltion, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTransaltion, width]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-secondary">
      <div className="overflow-hidden bg-primary py-2 text-secondary">
        <motion.div
          className="flex w-full gap-24"
          ref={ref}
          style={{ x: xTransaltion }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.p
              key={i}
              className="text-nowrap text-2xl font-thin uppercase"
            >
              ARE YOU READY TO LEAD THE WAY?
            </motion.p>
          ))}
        </motion.div>
      </div>
      <BillboardCarousel />
      <div className="overflow-hidden bg-primary py-2 text-secondary">
        <motion.div
          className="flex w-full gap-24"
          ref={ref}
          style={{ x: xTransaltion }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.p
              key={i}
              className="text-nowrap text-2xl font-thin uppercase"
            >
              ARE YOU READY TO LEAD THE WAY?
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

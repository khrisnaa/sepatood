'use client';

import { MotionButton } from '@/components/motion-button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { useEffect } from 'react';

export const BillboardCarousel = () => {
  const title = 'ARE YOU READY TO LEAD THE WAY?';

  let [ref, { width }] = useMeasure();

  const x = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
    controls = animate(x, [0, finalPosition], {
      ease: 'linear',
      duration: 15,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [x, width]);

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden bg-primary py-2 text-secondary">
        <motion.div className="flex w-full gap-24" ref={ref} style={{ x }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.p
              key={i}
              className="text-nowrap text-lg font-thin uppercase sm:text-xl lg:text-2xl"
            >
              {title}
            </motion.p>
          ))}
        </motion.div>
      </div>
      <Carousel className="h-full w-full cursor-default">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[360px] md:h-[400px] lg:h-[480px] xl:h-[560px] 2xl:h-[720px]">
                <Image
                  src="https://res.cloudinary.com/daq0ltjrn/image/upload/v1725074589/z3b5542jainjanhudna2.webp"
                  fill
                  alt="carousel images"
                  className="object-cover"
                />
                <section className="absolute right-4 h-full w-full max-w-[200px] sm:max-w-[400px] lg:max-w-[720px]">
                  <div className="flex h-full flex-col items-center justify-center gap-4">
                    <motion.h3 className="font-anton text-5xl uppercase text-secondary sm:text-6xl md:text-7xl lg:text-8xl">
                      <div>
                        {title.split('').map((l, i) => {
                          return (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{
                                duration: 0.25,
                                delay: i / 25,
                              }}
                            >
                              {l}
                            </motion.span>
                          );
                        })}
                      </div>
                    </motion.h3>

                    <motion.div
                      className="mr-auto"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 1.4,
                        delay: 1,
                        type: 'spring',
                      }}
                    >
                      <MotionButton className="bg-accent-lime px-6 text-primary">
                        VIEW MORE
                      </MotionButton>
                    </motion.div>
                  </div>
                </section>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="overflow-hidden bg-primary py-2 text-secondary">
        <motion.div className="flex w-full gap-24" ref={ref} style={{ x }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.p
              key={i}
              className="text-nowrap text-lg font-thin uppercase sm:text-xl lg:text-2xl"
            >
              {title}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

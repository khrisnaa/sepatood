'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  const slideRight = {
    start: { x: -100, opacity: 0 },
    end: { x: 0, opacity: 1 },
  };

  return (
    <div className="flex h-full max-h-[800px] w-full flex-col-reverse border-b-2 border-primary md:flex-row">
      <section className="flex flex-col justify-center gap-4 p-4 md:w-1/2 md:p-8">
        <motion.h1
          className="font-anton text-5xl uppercase md:text-8xl"
          variants={slideRight}
          initial="start"
          whileInView="end"
          transition={{
            delay: 0.3,
            type: 'spring',
          }}
        >
          SHOES TREASURES AWAIT YOU
        </motion.h1>
        <motion.p
          className="text-sm md:text-base"
          variants={slideRight}
          initial="start"
          whileInView="end"
          transition={{
            delay: 0.4,
            type: 'spring',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>
        <motion.div
          variants={slideRight}
          initial="start"
          whileInView="end"
          transition={{
            delay: 0.5,
            type: 'spring',
          }}
        >
          <Button className="w-fit rounded-none px-8 py-6 font-anton text-xl uppercase">
            SHOP NOW
          </Button>
        </motion.div>
      </section>
      <section className="relative flex h-[400px] w-full items-center justify-center overflow-hidden md:h-[700px] md:w-1/2">
        <motion.div
          className="absolute right-[15%] top-[5%] z-[2] h-[300px] w-[200px] bg-primary md:h-[540px] md:w-[360px] 3xl:right-[25%]"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: 'spring',
          }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[15%] z-[2] h-[300px] w-[200px] border-4 border-primary md:h-[540px] md:w-[360px] 3xl:left-[25%]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            type: 'spring',
          }}
        />
        <motion.div
          className="z-[3] aspect-square h-[400px] -translate-x-[5%] md:h-[700px]"
          initial={{ x: 100, opacity: 0, rotate: 0 }}
          whileInView={{ x: 0, opacity: 1, rotate: -15 }}
          transition={{
            delay: 0.8,
            type: 'spring',
          }}
        >
          <Image
            src="https://res.cloudinary.com/daq0ltjrn/image/upload/v1725206140/home-bg_gwjgif.png"
            alt="home image"
            width={400}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>
      </section>
    </div>
  );
};

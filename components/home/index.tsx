'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { BrandSection } from '@/components/home/brand-section';
import { FeaturedShoesSection } from '@/components/home/featured-shoes-section';

export const Home = () => {
  const container = useRef();
  return (
    <main className="space-y-12">
      <div className="flex h-full max-h-[800px] w-full border-b-2 border-primary">
        <section className="flex w-1/2 flex-col justify-center gap-4 p-8">
          <motion.h1
            className="font-anton text-8xl uppercase"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: 'spring',
            }}
          >
            SHOES TREASURES AWAIT YOU
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: 'spring',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: 'spring',
            }}
          >
            <Button
              variant={'flatPrimary'}
              className="w-fit px-8 py-6 font-anton text-xl uppercase"
            >
              SHOP NOW
            </Button>
          </motion.div>
        </section>
        <section className="relative flex h-[700px] w-1/2 items-center justify-center overflow-hidden">
          <motion.div
            className="absolute right-[15%] top-[5%] z-[2] h-[540px] w-[360px] bg-primary 3xl:right-[25%]"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: 'spring',
            }}
          />
          <motion.div
            className="absolute bottom-[5%] left-[15%] z-[2] h-[540px] w-[360px] border-4 border-primary 3xl:left-[25%]"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              type: 'spring',
            }}
          />
          <motion.div
            className="z-[3] aspect-square h-[700px] -translate-x-[5%]"
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
      <BrandSection />
    </main>
  );
};

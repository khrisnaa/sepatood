'use client';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const brands = [
  {
    logo: '/logos/nike-logo-w.svg',
    image:
      'https://res.cloudinary.com/daq0ltjrn/image/upload/v1725206641/shoes_1_rtwnmz.png',
  },
  {
    logo: '/logos/vans-logo-w.svg',
    image:
      'https://res.cloudinary.com/daq0ltjrn/image/upload/v1725076741/p9wian5gvu0xblyln6j9.png',
  },
  {
    logo: '/logos/converse-logo-w.svg',
    image:
      'https://res.cloudinary.com/daq0ltjrn/image/upload/v1725206586/11_c1t7b0.png',
  },
  {
    logo: '/logos/adidas-logo-w.svg',
    image:
      'https://res.cloudinary.com/daq0ltjrn/image/upload/v1725076461/dtjyrm8sp9gutagww3yp.png',
  },
];

export const BrandList = () => {
  return (
    <main className="space-y-8">
      <section>
        <motion.h1
          className="max-w-5xl font-anton text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: 'spring',
          }}
        >
          DISCOVER LIMITED SNEAKERS WIHTOUT LIMITATION
        </motion.h1>
      </section>
      <section className="flex flex-wrap">
        {brands.map((item, i) => (
          <BrandCard item={item} key={i} i={i} />
        ))}
      </section>
    </main>
  );
};

const BrandCard = ({ item, i }: { item: (typeof brands)[0]; i: number }) => {
  return (
    <motion.div
      className="group relative aspect-square w-[calc(50%)] cursor-pointer overflow-hidden border-2 border-primary bg-secondary md:w-[calc(25%)]"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{
        delay: i * 0.2,
        type: 'spring',
        stiffness: 250,
      }}
    >
      <span
        className={cn(
          'absolute z-[2] flex h-full w-full translate-y-[300%] items-center justify-center font-anton text-4xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100',
        )}
      >
        <span className="aspect-square max-w-[80px] sm:max-w-[150px]">
          <Image
            alt="shoes brand"
            src={item.logo}
            width={150}
            height={150}
            className="h-full w-full object-cover"
          />
        </span>
      </span>
      <span className="absolute left-0 top-0 z-[1] h-full w-full bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-60"></span>
      <div>
        <Image
          alt="shoes brand"
          src={item.image}
          width={300}
          height={300}
          className="z-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.2]"
        />
      </div>
    </motion.div>
  );
};

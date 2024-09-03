'use client';

import { MotionButton } from '@/components/motion-button';
import { ShoeCard } from '@/components/product/shoe-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { db } from '@/lib/db';
import { ShoeData } from '@/types/definition';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export const FeaturedCarousel = ({ shoes }: { shoes: ShoeData[] }) => {
  const router = useRouter();
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <motion.h1
          className="font-anton text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: '0%', opacity: 1 }}
          transition={{
            delay: 0.3,
            type: 'spring',
          }}
        >
          DEAL OF THE DAY
        </motion.h1>
        <MotionButton onClick={() => router.push('/shop')}>
          VIEW MORE
        </MotionButton>
      </div>
      <Carousel className="">
        <CarouselContent>
          {shoes.map((shoe, i) => (
            <CarouselItem
              key={i}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
            >
              <ShoeCard shoe={shoe} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" /> */}
      </Carousel>
    </div>
  );
};

'use client';

import { ShoeCard } from './shoe-card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ShoeData } from '@/types/definition';
import { motion } from 'framer-motion';

interface ShoesCarouselProps {
  title: string;
  shoes: ShoeData[];
}

export const ShoesCarousel = ({ title, shoes }: ShoesCarouselProps) => {
  return (
    <div className="p-16">
      <div className="flex items-end justify-between">
        <div className="w-1/2">
          <motion.h1
            className="font-anton text-8xl uppercase"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            {title}
          </motion.h1>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <Button
            variant={'flatPrimary'}
            className="px-8 py-6 font-anton text-lg uppercase"
          >
            View More
          </Button>
        </motion.div>
      </div>
      <Carousel className="w-full py-8">
        <CarouselContent>
          {shoes.map((data, i) => (
            <CarouselItem
              key={i}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ShoeCard shoe={data} key={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

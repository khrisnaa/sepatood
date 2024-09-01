'use client';

import { ImageContent } from './image-content';
import { ImageTrigger } from './image-trigger';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn, formatPrice } from '@/lib/utils';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Prisma } from '@prisma/client';
import { it } from 'node:test';
import { useUser } from '@clerk/nextjs';
import { addToCart } from '@/actions/carts';
import { ShoeData } from '@/types/definition';
import { Separator } from '@/components/ui/separator';

interface ShoeDetailProps {
  shoe: ShoeData;
}

export const ShoeDetail = ({ shoe }: ShoeDetailProps) => {
  //UNDO
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 md:flex-row">
      <Tabs defaultValue="1" className="flex justify-center gap-2 p-2 sm:gap-4">
        <TabsList className="flex h-full flex-col justify-start gap-4 bg-transparent">
          {shoe.shoeImages.map((item, index) => (
            <ImageTrigger key={index} value={String(index)} imgUrl={item.url} />
          ))}
        </TabsList>
        <div className="flex w-full max-w-md items-center justify-center border-2 border-primary">
          {shoe.shoeImages.map((item, index) => (
            <ImageContent key={index} value={String(index)} imgUrl={item.url} />
          ))}
        </div>
      </Tabs>

      <div className="flex w-full max-w-[400px] flex-col gap-4 p-4">
        <div>
          <h3 className="font-anton text-3xl uppercase">
            {shoe.brand.name} {shoe.model}
          </h3>
          <span>{shoe.shoeCategories[0].category.name} shoes</span>
        </div>
        <Separator />
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold uppercase">
              {formatPrice(shoe.price)}
            </h3>
            <h4>{shoe.size.size}</h4>
          </div>
          <div>
            <h4 className="text-lg font-bold">{shoe.condition.name}</h4>
            <p className="text-sm">{shoe.condition.description}</p>
          </div>
        </div>
        <Separator />
        <div className="min-h-[60px] xl:min-h-[120px]">
          <p className="text-sm"> {shoe.description}</p>
        </div>
        <Separator />
        <Button
          variant={'flatPrimary'}
          className="mt-4 py-6 font-anton text-xl uppercase"
        >
          Add to Bag
        </Button>
      </div>
    </div>
  );
};

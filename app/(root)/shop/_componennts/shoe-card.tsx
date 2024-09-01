'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { formatPriceTag } from '@/lib/utils';
import { ShoeData } from '@/types/definition';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const ShoeCard = ({ shoe }: { shoe: ShoeData }) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/shop/shoes/${shoe.id}`)}
      className="max-w-[160px] cursor-pointer rounded-none bg-secondary xxs:max-w-[180px] xs:max-w-[200px] sm:max-w-[400px]"
    >
      <CardHeader className="flex h-full max-h-[32px] flex-row items-center justify-between border-2 border-primary xxs:max-h-[36px] xs:max-h-[40px] sm:max-h-[80px]">
        <div className="aspect-square h-8 sm:h-10 md:h-12">
          <Image
            src={`/logos/${shoe.brand.name.toLocaleLowerCase()}-logo.svg`}
            alt="shoes logo"
            height={150}
            width={150}
            className="w-full bg-cover"
          />
        </div>
        <span className="w-fit font-anton sm:text-lg md:text-2xl">
          {formatPriceTag(shoe.price)}
        </span>
      </CardHeader>
      <CardContent className="aspect-square max-h-[160px] border-x-2 border-primary p-0 xxs:max-h-[180px] xs:max-h-[200px] sm:max-h-[400px]">
        <Image
          src={shoe.shoeImages[0].url}
          alt="shoes image"
          height={300}
          width={300}
          className="h-full w-full object-cover object-center"
        />
      </CardContent>
      <CardFooter className="flex h-full max-h-[48px] flex-col items-start justify-center border-2 border-primary xxs:max-h-[52px] xs:max-h-[60px] sm:max-h-[120px]">
        <h4 className="line-clamp-1 font-anton text-sm sm:text-lg md:text-2xl">{`${shoe.brand.name} ${shoe.model}`}</h4>
        <div className="hidden sm:block">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {shoe.description}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

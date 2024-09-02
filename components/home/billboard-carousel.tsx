import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export const BillboardCarousel = () => {
  return (
    <Carousel className="h-full w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[20vh] sm:h-[360px] md:h-[400px] lg:h-[480px] xl:h-[560px] 2xl:h-[720px]">
              <Image
                src="https://res.cloudinary.com/daq0ltjrn/image/upload/v1725074589/z3b5542jainjanhudna2.webp"
                fill
                alt="carousel images"
                className="object-cover"
              />
              <section className="absolute right-4 h-full w-full max-w-[200px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] 2xl:max-w-[720px]">
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <h3 className="font-anton text-8xl uppercase text-secondary">
                    ARE YOU READY TO LEAD THE WAY?
                  </h3>
                  <Button
                    variant={'flatSecondary'}
                    className="mr-auto w-fit rounded-none bg-accent-lime px-8 py-6 font-anton text-xl uppercase text-primary"
                  >
                    VIEW MORE
                  </Button>
                </div>
              </section>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

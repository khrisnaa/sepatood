'use client';

import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface AboutSectionProps {
  header: string;
  subHeader: string;
  paragraph: string;
}

export const AboutSection = ({
  header,
  subHeader,
  paragraph,
}: AboutSectionProps) => {
  const heading = useRef(null);
  const content = useRef(null);

  const { scrollYProgress: scrollContent } = useScroll({
    target: content,
    offset: ['start end', 'end 90%'],
  });

  const { scrollYProgress: scrollHeading } = useScroll({
    target: heading,
    offset: ['start end', 'end 60%'],
  });

  const headingValue = useTransform(scrollHeading, [0, 1], ['-100%', '0%']);
  const logoValue = useTransform(scrollHeading, [0, 1], ['100%', '0%']);

  const textValue = useTransform(scrollContent, [0, 1], ['-100%', '0%']);
  const imageValue = useTransform(scrollContent, [0, 1], ['100%', '0%']);
  const opacityValue = useTransform(scrollContent, [0, 1], [0, 1]);
  return (
    <div className="py-8 text-primary">
      <Separator className="bg-primary" />
      <section
        className="py-6lg:px-8 flex items-center p-4 xl:px-16"
        ref={heading}
      >
        <motion.div className="w-full" style={{ translateX: headingValue }}>
          <h1 className="text-center font-anton text-5xl uppercase sm:text-6xl md:text-start md:text-7xl lg:text-8xl">
            {header}
          </h1>
        </motion.div>
        <motion.div
          className="hidden w-full flex-col items-end gap-4 md:flex"
          style={{ translateX: logoValue }}
        >
          <span className="h-24 w-1/2 bg-accent-lime bg-[url('/assets/globe.svg')] bg-contain bg-center bg-no-repeat px-8 py-2" />
          <p className="w-full text-end text-xs italic">
            "Lorem ipsum dolor sit amet c onsectetur qui?"
          </p>
        </motion.div>
      </section>
      <Separator className="bg-primary" />
      <section className="flex flex-col-reverse md:flex-row" ref={content}>
        <motion.div
          className="flex w-full flex-col justify-between p-4 lg:p-8 xl:p-16"
          style={{ translateX: textValue, opacity: opacityValue }}
        >
          <div className="flex h-full max-w-xl flex-col justify-center gap-4">
            <h3 className="text-center font-anton text-4xl uppercase text-primary md:text-start md:text-7xl lg:text-5xl">
              {subHeader}
            </h3>

            <Accordion type="single" collapsible className="md:hidden">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-center text-center">
                  Read More
                </AccordionTrigger>
                <AccordionContent>
                  <p className="w-full font-grotesk text-sm">{paragraph}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p className="hidden w-full font-grotesk md:inline-block">
              {paragraph}
            </p>
          </div>

          <div className="relative hidden h-24 overflow-hidden bg-[url('/assets/checkboard.svg')] bg-contain bg-repeat md:flex">
            <span className="absolute left-0 top-0 h-full w-1/3 bg-accent-lime bg-[url('/assets/rings.svg')] bg-contain bg-center bg-no-repeat" />
          </div>
        </motion.div>
        <motion.div
          className="mx-auto aspect-square w-full min-w-72 max-w-80 p-4 lg:max-w-2xl"
          style={{ translateX: imageValue, opacity: opacityValue }}
        >
          <Image
            src="https://res.cloudinary.com/daq0ltjrn/image/upload/v1725247491/nike-just-do-it_1_mn9ex4.png"
            alt="shoes image"
            width={300}
            height={300}
            className="w-full object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
};

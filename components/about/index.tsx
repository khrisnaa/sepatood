'use client';

import { Separator } from '@/components/ui/separator';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const About = () => {
  const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, at? Neque ducimus saepe accusantium maiores hic quisquam, nostrum voluptate provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, ullam aspernatur numquam perferendis accusamus nesciunt rem velit quas? Deserunt, at.`;
  const title = 'BLA BLA BLA BLA';
  const words = paragraph.split(' ');
  const letters = title.split('');

  const element = useRef(null);
  const element2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  const ref = useRef(null);

  const { scrollYProgress: scrollX } = useScroll({
    target: ref,
    offset: ['start end', 'end 90%'],
  });

  const textValue = useTransform(scrollX, [0, 1], ['-100%', '0%']);
  const imageValue = useTransform(scrollX, [0, 1], ['100%', '0%']);
  const opacityValue = useTransform(scrollX, [0, 1], [0, 1]);
  return (
    <main>
      <section className="bg-primary">
        <div className="py-8 text-secondary">
          <Separator className="bg-secondary" />
          <section className="flex p-4 py-6 lg:px-8 xl:px-16">
            <div className="w-full">
              <h1 className="font-anton text-7xl uppercase">
                Where Style Meets the Streets
              </h1>
            </div>
            <div className="flex w-full flex-col items-end gap-4">
              <span className="h-24 w-1/2 bg-accent-lime bg-[url('/assets/globe.svg')] bg-contain bg-center bg-no-repeat px-8 py-2" />
              <p className="w-full text-end text-xs italic">
                "Lorem ipsum dolor sit amet c onsectetur qui?"
              </p>
            </div>
          </section>
          <Separator className="bg-secondary" />
          <section className="flex" ref={ref}>
            <motion.div
              className="flex w-full flex-col justify-between p-4 lg:p-8 xl:p-16"
              style={{ translateX: textValue, opacity: opacityValue }}
            >
              <div className="flex h-full flex-col justify-center gap-4">
                <motion.h3
                  className="font-anton text-4xl uppercase text-secondary lg:text-5xl"
                  style={{ opacity: scrollYProgress }}
                  ref={element2}
                >
                  {letters.map((letter, i) => {
                    const start = i / letters.length;
                    const end = start + 1 / letters.length;
                    const opacity = useTransform(
                      scrollYProgress,
                      [start, end],
                      [0, 1],
                    );
                    return (
                      <span className="relative">
                        <span className="absolute opacity-15">{letter}</span>
                        <motion.span
                          className="mr-1"
                          key={i}
                          style={{ opacity }}
                        >
                          {letter}
                        </motion.span>
                      </span>
                    );
                  })}
                </motion.h3>
                <motion.p
                  className="w-full max-w-xl"
                  style={{ opacity: scrollYProgress }}
                  ref={element}
                >
                  {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 1 / words.length;
                    const opacity = useTransform(
                      scrollYProgress,
                      [start, end],
                      [0, 1],
                    );
                    return (
                      <span className="relative inline-block">
                        <span className="absolute mr-1 opacity-10">{word}</span>
                        <motion.span
                          className="mr-1"
                          key={i}
                          style={{ opacity }}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </motion.p>
              </div>

              <div className="relative flex h-24 overflow-hidden bg-[url('/assets/checkboard.svg')] bg-contain bg-repeat">
                <span className="absolute left-0 top-0 h-full w-1/3 bg-accent-lime bg-[url('/assets/rings.svg')] bg-contain bg-center bg-no-repeat" />
              </div>
            </motion.div>

            <motion.div
              className="aspect-square w-full min-w-72 max-w-80 p-4 lg:max-w-2xl"
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
      </section>
    </main>
  );
};

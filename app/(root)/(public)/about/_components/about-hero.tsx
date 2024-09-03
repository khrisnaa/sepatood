'use client';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useRef } from 'react';

export const AboutHero = () => {
  const aboutUsIntro =
    'Welcome to Sepatood, your go-to destination for high-quality second-hand shoes. At Sepatood, we believe that style and sustainability go hand in hand. Our mission is to provide fashion-forward individuals with a curated selection of gently used shoes that not only look great but also help reduce waste and promote a more eco-friendly lifestyle.';
  const text = aboutUsIntro.split('');

  return (
    <div className="flex h-full min-h-[80vh] w-full items-center justify-center">
      <div className="space-y-8 p-8 lg:w-1/2 lg:space-y-16">
        <h1 className="text-center font-anton text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl">
          About Us
        </h1>
        <motion.p className="text-center font-grotesk">
          {text.map((l, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.01 * i, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {l}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

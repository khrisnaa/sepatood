'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useRef, useState } from 'react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-secondary">
      <div className="flex items-center justify-center font-anton text-5xl uppercase leading-tight tracking-tighter md:text-9xl">
        SEPATOOD
      </div>
      <Separator className="bg-secondary" />
      <div className="mx-auto flex max-w-xl items-center justify-between p-8 md:h-[300px]">
        <div>
          <h4 className="mb-4 font-semibold">Company</h4>
          <ul className="flex flex-col gap-4 text-sm font-light md:flex-row">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">Follow Us</h4>
          <ul className="hidden items-center gap-6 md:flex">
            <MagneticButton>
              <FaInstagram className="h-8 w-8" />
            </MagneticButton>
            <MagneticButton>
              <FaFacebookF className="h-8 w-8" />
            </MagneticButton>
            <MagneticButton>
              <FaYoutube className="h-8 w-8" />
            </MagneticButton>
            <MagneticButton>
              <FaTiktok className="h-8 w-8" />
            </MagneticButton>
          </ul>
          <ul className="flex flex-col gap-4 text-sm font-light md:hidden md:flex-row">
            <li>
              <Link href="/#">Instagram</Link>
            </li>
            <li>
              <Link href="/#">Facebook</Link>
            </li>
            <li>
              <Link href="/#">X</Link>
            </li>
            <li>
              <Link href="/#">WhatsApp</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      setPosition({ x, y });
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;

  return (
    <motion.div
      className="text-secondary"
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { FiInstagram } from 'react-icons/fi';

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
              <Link href="/#">Home</Link>
            </li>
            <li>
              <Link href="/#">Shop</Link>
            </li>
            <li>
              <Link href="/#">About</Link>
            </li>
            <li>
              <Link href="/#">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">Follow Us</h4>
          <ul className="hidden items-center gap-2 md:flex">
            <button className="grid place-content-center rounded-full bg-secondary p-2 text-primary md:h-12 md:w-12">
              <FiInstagram className="md:h-6 md:w-6" />
            </button>
            <button className="grid place-content-center rounded-full bg-secondary p-2 text-primary md:h-12 md:w-12">
              <FiInstagram className="md:h-6 md:w-6" />
            </button>
            <button className="grid place-content-center rounded-full bg-secondary p-2 text-primary md:h-12 md:w-12">
              <FiInstagram className="md:h-6 md:w-6" />
            </button>
            <button className="grid place-content-center rounded-full bg-secondary p-2 text-primary md:h-12 md:w-12">
              <FiInstagram className="h-4 w-4 md:h-6 md:w-6" />
            </button>
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

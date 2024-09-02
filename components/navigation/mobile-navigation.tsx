'use client';

import {
  CreditCard,
  Home,
  Info,
  ListOrdered,
  Mail,
  ShoppingCart,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home', icon: <Home /> },
  { href: '/shop', label: 'Shop', icon: <ShoppingCart /> },
  { href: '/about', label: 'About', icon: <Info /> },
  { href: '/contact', label: 'Contact', icon: <Mail /> },
  { href: '/order', label: 'Order', icon: <CreditCard /> },
];

export const MobileNavigation = () => {
  const pathname = usePathname();

  const bounce = {
    whileHover: { scale: 1.2, rotate: 10 },
    whileTap: { scale: 0.9, rotate: -10 },
    transition: { type: 'spring', stiffness: 300, bounce: 2.5 },
  };

  return (
    <div className="sticky bottom-0 z-40 h-16 bg-secondary sm:hidden">
      <nav className="flex h-full w-full items-center justify-between px-8">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <motion.button
              {...bounce}
              className={cn(
                'rounded-md p-2',
                // link.href === '/'
                //   ? pathname === link.href && 'bg-primary text-secondary'
                //   : pathname.startsWith(link.href) &&
                //       'bg-primary text-secondary',
              )}
            >
              {link.icon}
            </motion.button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

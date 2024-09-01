'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  label: string;
  index: number;
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: (params: { isActive: boolean; index: number }) => void;
}

export const NavigationLink = ({
  href,
  label,
  index,
  setSelectedLink,
  selectedLink,
}: NavigationLinkProps) => {
  const pathname = usePathname();
  const blur = {
    initial: {
      filter: 'blur(0px)',
      opacity: 1,
    },
    open: {
      filter: 'blur(1px)',
      opacity: 0.8,

      transition: { duration: 0.3 },
    },
    closed: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden text-sm before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:-translate-x-[100%] before:bg-primary before:transition-all before:duration-500 before:content-[''] hover:before:translate-x-0",
        href === '/'
          ? pathname === href && 'font-medium'
          : pathname.startsWith(href) && 'font-medium',
      )}
      whileHover={{ scale: 1.1 }}
    >
      <Link
        href={href}
        // onMouseOver={() => setSelectedLink({ isActive: true, index })}
        // onMouseLeave={() => setSelectedLink({ isActive: false, index })}
      >
        <motion.span
        //   variants={blur}
        //   initial="inital"
        //   animate={
        //     selectedLink.isActive && selectedLink.index != index
        //       ? 'open'
        //       : 'closed'
        //   }
        >
          {label}
        </motion.span>
      </Link>
    </motion.div>
  );
};

'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/billboards', label: 'Billboards' },
  { href: '/brands', label: 'Brands' },
  { href: '/categories', label: 'Categories' },
  { href: '/colors', label: 'Colors' },
  { href: '/sizes', label: 'Sizes' },
  { href: '/conditions', label: 'Conditions' },
  { href: '/shoes', label: 'Shoes' },
  { href: '/orders', label: 'Orders' },
];

export function AdminNavLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
            pathname.includes(link.href) && 'text-primary',
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/billboards', label: 'Billboards' },
  { href: '/admin/brands', label: 'Brands' },
  { href: '/admin/categories', label: 'Categories' },
  { href: '/admin/colors', label: 'Colors' },
  { href: '/admin/sizes', label: 'Sizes' },
  { href: '/admin/conditions', label: 'Conditions' },
  { href: '/admin/shoes', label: 'Shoes' },
  { href: '/admin/orders', label: 'Orders' },
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

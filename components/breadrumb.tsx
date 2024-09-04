'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';

export function BreadcrumbDemo() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  // full path
  const constructPath = (index: number) => {
    return '/' + pathNames.slice(0, index + 1).join('/');
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathNames.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={constructPath(index)}
                className={cn(
                  'capitalize',
                  paths === constructPath(index) && 'text-primary',
                )}
              >
                {path}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < pathNames.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

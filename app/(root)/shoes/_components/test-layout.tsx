'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const TestLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button onClick={onClick} className="absolute right-0 top-0">
        OPEN
      </Button>

      <div
        className={cn(
          'w-0 bg-red-600 transition-all duration-300',
          open && 'w-[40rem]',
        )}
      >
        {children}
      </div>
    </>
  );
};

'use client';

import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export const FilterDrawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="">
        <Button variant={'flatPrimary'}>
          Filter
          <SlidersHorizontal className="ml-2 h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen w-full bg-secondary sm:h-fit">
        <DrawerHeader>
          <DrawerTitle className="text-center">Filter</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col flex-wrap justify-evenly gap-4 sm:flex-row">
          {children}
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserButton } from '@clerk/nextjs';
import { Search, Settings, ShoppingBag, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, useAnimation } from 'framer-motion';
import { SearchBar } from '@/components/navigation/search-bar';
import Link from 'next/link';
export const NavigationActions = () => {
  const bounceControls = useAnimation();
  const searchControls = useAnimation();
  const rotateControls = useAnimation();

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <SearchBar />

      <Link href="/cart">
        <motion.button
          className="p-1"
          onClick={() => {
            bounceControls.start({
              rotate: [0, 15, -10, 0],
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            });
          }}
          onHoverStart={() => {
            bounceControls.start({
              rotate: [0, 15, -10, 0],
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            });
          }}
          onHoverEnd={() => {
            bounceControls.start({ rotate: 0, transition: { duration: 0.5 } });
          }}
          animate={bounceControls}
        >
          <ShoppingBag className="h-5 w-5" />
        </motion.button>
      </Link>

      <SettingsMenu>
        <motion.button
          className="p-1"
          onClick={() => {
            rotateControls.start({
              rotate: [0, 90, 0],
              transition: {
                duration: 0.8,
                ease: 'easeInOut',
              },
            });
          }}
          onHoverStart={() => {
            rotateControls.start({
              rotate: [0, 90],
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            });
          }}
          onHoverEnd={() => {
            rotateControls.start({ rotate: 0, transition: { duration: 0.5 } });
          }}
          animate={rotateControls}
        >
          <Settings className="h-5 w-5" />
        </motion.button>
      </SettingsMenu>
      {/* <UserButton /> */}
    </div>
  );
};

const SettingsMenu = ({ children }: { children: React.ReactNode }) => {
  const { setTheme, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserButton />
            <span className="ml-3">Profile settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }
          >
            <ModeToggle />
            <span className="pl-2">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

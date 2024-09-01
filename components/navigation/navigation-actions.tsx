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
export const NavigationActions = () => {
  const rotateControls = useAnimation();
  const searchControls = useAnimation();
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <motion.button
        className="p-1"
        onHoverStart={() => {
          searchControls.start({
            scale: [1, 1.2, 1],
            transition: {
              duration: 0.8,
              ease: 'easeInOut',
            },
          });
        }}
        onHoverEnd={() => {
          searchControls.start({ scale: 1, transition: { duration: 0.5 } });
        }}
        animate={searchControls}
      >
        <Search className="h-5 w-5" />
      </motion.button>
      <motion.button
        className="p-1"
        onHoverStart={() => {
          rotateControls.start({
            rotate: [0, 15, -10, 0],
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
        <ShoppingBag className="h-5 w-5" />
      </motion.button>
      <SettingsMenu>
        <motion.button
          className="p-1"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
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
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem
            onClick={() =>
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }
          >
            <ModeToggle />
            <span className="pl-2">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

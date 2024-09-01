'use client';

import { NavigationActions } from './navigation-actions';
import { NavigationMenu } from './navigation-menu';
import { SmallLogo } from './small-logo';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import { useState } from 'react';

export const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-secondary px-4"
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <SmallLogo />
      <NavigationMenu />
      <NavigationActions />
    </motion.nav>
  );
};

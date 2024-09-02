import { useState } from 'react';
import { NavigationLink } from './navigation-link';

const links = [
  { href: '/home', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const NavigationMenu = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <div className="absolute left-[50%] hidden -translate-x-[50%] gap-4 sm:flex md:gap-8">
      {links.map((link, i) => (
        <NavigationLink
          key={i}
          label={link.label}
          href={link.href}
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
          index={i}
        />
      ))}
    </div>
  );
};

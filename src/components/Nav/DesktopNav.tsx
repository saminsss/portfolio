'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavButton from './NavButton';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'blog',
    path: '/blog',
  },
];

const DesktopNav = () => {
  const path = usePathname();
  return (
    <nav className="flex gap-8 items-center capitalize transition-all">
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={
              path === link.path
                ? 'text-secondary border-b-2 border-secondary font-medium '
                : ''
            }>
            {link.name}
          </Link>
        );
      })}
      <NavButton href="/resume">Resume</NavButton>
    </nav>
  );
};

export default DesktopNav;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const Nav = () => {
  const path = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={
              path === link.path
                ? 'text-secondary border-b-2 border-secondary capitalize font-medium transition-all'
                : 'capitalize'
            }>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

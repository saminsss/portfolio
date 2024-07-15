'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Logo from './Logo';

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

const MobileNav = () => {
  const path = usePathname();
  return (
    <div className="ml-auto">
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-3xl text-secondary" />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-center items-center gap-36">
          <Logo />
          <nav className="flex flex-col gap-6 justify-center items-center capitalize transition-all text-center">
            {links.map((link) => (
              <Link
                href={link.path}
                key={link.path}
                className={
                  path === link.path
                    ? 'text-secondary border-b-2 border-secondary font-medium w-fit text-center'
                    : ''
                }>
                {link.name}
              </Link>
            ))}
            <Link href="/resume">
              <Button>Resume</Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

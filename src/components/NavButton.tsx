import Link from 'next/link';
import { ReactNode } from 'react';

type NavButtonType = {
  href: string;
  children: ReactNode;
};

const NavButton = ({ href, children }: NavButtonType) => {
  return (
    <Link
      href={href}
      className="bg-secondary px-8 py-2 rounded-md text-primary hover:bg-purple-400">
      {children}
    </Link>
  );
};

export default NavButton;

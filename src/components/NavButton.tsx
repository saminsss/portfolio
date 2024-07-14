import { ReactNode } from 'react';

type NavButtonType = {
  children: ReactNode;
};

const NavButton = ({ children }: NavButtonType) => {
  return (
    <button className="bg-secondary px-8 py-2 rounded-md text-primary hover:bg-purple-400">
      {children}
    </button>
  );
};

export default NavButton;

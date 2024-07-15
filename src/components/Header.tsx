import DesktopNav from './nav/DesktopNav';
import Logo from './nav/Logo';
import MobileNav from './nav/MobileNav';

const Header = () => {
  return (
    <header className="h-header flex text-quaternary bg-primary">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex">
          <DesktopNav />
        </div>
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

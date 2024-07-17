import DesktopNav from './nav/DesktopNav';
import Logo from './nav/Logo';
import MobileNav from './nav/MobileNav';

const Header = () => {
  return (
    <header className="h-header sticky top-0 z-50 flex text-quaternary bg-primary shadow-lg">
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

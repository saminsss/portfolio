import DesktopNav from './Nav/DesktopNav';
import Logo from './Nav/Logo';
import MobileNav from './Nav/MobileNav';

const Header = () => {
  return (
    <header className="h-header flex text-black bg-primary">
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

import Link from 'next/link';
import Nav from './Nav';
import NavButton from './NavButton';

const Header = () => {
  return (
    <header className="h-header flex text-black bg-primary">
      <div className="container flex justify-between items-center">
        {/** Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            samin<span className="text-secondary">.</span>
          </h1>
        </Link>
        <div className="flex gap-8 justify-center items-center">
          <Nav />
          <NavButton>Resume</NavButton>
        </div>
      </div>
    </header>
  );
};

export default Header;

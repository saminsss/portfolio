import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="py-6 md:py-8 text-black bg-primary">
      <div className="container flex justify-between items-center">
        {/** Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            samin<span className="text-secondary">.</span>
          </h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;

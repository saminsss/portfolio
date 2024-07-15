import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-4xl font-semibold">
        samin<span className="text-secondary">.</span>
      </h1>
    </Link>
  );
};

export default Logo;

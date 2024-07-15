import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/saminsss' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/saminislam/' },
];

type SocialsType = {
  containerClass?: string;
  iconClass?: string;
};

const Socials = ({ containerClass, iconClass }: SocialsType) => {
  return (
    <div className={twMerge('flex gap-4', containerClass)}>
      {socials.map((social) => (
        <Link
          key={social.path}
          href={social.path}
          rel="noopener noreferrer"
          target="_blank"
          className={iconClass}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

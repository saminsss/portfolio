import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Socials from '../Socials';
import { Button } from '../ui/button';
import HeroPhoto from './HeroPhoto';

const skills = ['AWS', 'Javascript', 'Typescript', 'NodeJS', 'React', 'Vue']
  .sort()
  .join(', ');

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
      <div className="flex flex-col gap-6 flex-1 order-2 md:order-none">
        <h4 className="text-secondary">Software Developer</h4>
        <h2>
          Hello! I&apos;m <br />{' '}
          <span className="text-secondary">Samin Islam</span>
        </h2>
        <p>
          I excel at developing full-stack applications on web platforms. <br />
          Proficient in <span className="font-semibold">{skills}.</span>
          <br />
          Based in <span className="font-semibold">Vancouver, BC, Canada.</span>
        </p>
        <div className="w-72 flex flex-col md:flex-row items-center gap-4 self-center md:self-auto">
          <Button variant="outline" className="uppercase">
            <Link
              href="https://drive.google.com/file/d/1eTf9oBcp6JW_Jp7FH76eOzrhMmjGmjil/view?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
              className="mr-4">
              Go To Resume
            </Link>
            <FiArrowRight className="text-lg" />
          </Button>
          <Socials iconClass="w-9 h-9 border border-secondary rounded-full flex justify-center items-center text-secondary hover:bg-secondary hover:text-quaternary hover:transition-all duration-200" />
        </div>
      </div>
      <HeroPhoto />
    </div>
  );
};

export default Hero;

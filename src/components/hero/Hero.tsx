import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Socials from '../Socials';
import { Button } from '../ui/button';
import HeroPhoto from './HeroPhoto';

const skills = ['AWS', 'Javascript', 'Typescript', 'Python', 'React', 'NextJS', 'Vue', 'NuxtJS', 'NestJS', 'AdonisJS', 'Mastra AI']
  .join(', ');

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
      <div className="flex flex-col gap-6 flex-1 order-2 md:order-none">
        <h4 className="text-secondary">Software Engineer, Co-founder</h4>
        <h2>
          Hello! I&apos;m <br />{' '}
          <span className="text-secondary">Samin Islam</span>
        </h2>
        <p>
          I excel at developing full-stack applications on web platforms. <br />
          Proficient in <span className="font-semibold">{skills}.</span>
          <br />
          Based in <span className="font-semibold">Vancouver, BC, Canada.</span>
          <br />
          I am currently working on building an automated event streamlining SaaS platform. See the early access at 
          <Link 
            href="https://jubiloop.ca"
            target="_blank"
            rel="noreferrer noopener"
            className="px-1 hover:text-secondary">
              jubiloop.ca.
          </Link>
        </p>
        <div className="w-72 flex flex-col md:flex-row items-center gap-4 self-center md:self-auto">
          <Button asChild variant="outline" className="uppercase p-0">
            <Link
              href="https://docs.google.com/document/d/1p7LGsK1Y7-e9Im0XJVpe4B34_o60vBm2/edit?usp=sharing&ouid=112065500866897896513&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer noopener"
              className="px-8">
              <div className="flex gap-4 items-center">
                <span>Go To Resume</span>
                <FiArrowRight className="text-lg" />
              </div>
            </Link>
          </Button>
          <Socials iconClass="w-9 h-9 border border-secondary rounded-full flex justify-center items-center text-secondary hover:bg-secondary hover:text-quaternary hover:transition-all duration-200" />
        </div>
      </div>
      <HeroPhoto />
    </div>
  );
};

export default Hero;

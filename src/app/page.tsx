import HeroPhoto from '@/components/HeroPhoto';
import Socials from '@/components/Socials';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
        <div className="flex flex-col gap-8 flex-1">
          <h4 className="text-secondary">Software Developer</h4>
          <h1>
            Hello! I&apos;m <br />{' '}
            <span className="text-secondary">Samin Islam</span>
          </h1>
          <p>
            I excel at developing full-stack applications on web platforms.{' '}
            <br />
            <span className="font-semibold">
              Based in Vancouver, BC, Canada.
            </span>
          </p>
          <div className="w-72 flex flex-col md:flex-row items-center gap-4 self-center md:self-auto">
            <Button variant="outline" className="uppercase">
              <span className="mr-4">Download Resume</span>
              <FiDownload className="text-lg" />
            </Button>
            <Socials iconClass="w-9 h-9 border border-secondary rounded-full flex justify-center items-center text-secondary hover:bg-secondary hover:text-quaternary hover:transition-all duration-200" />
          </div>
        </div>
        <HeroPhoto />
      </div>
    </main>
  );
}

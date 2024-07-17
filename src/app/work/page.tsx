'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowDownRight, BsGithub } from 'react-icons/bs';

const works = [
  {
    num: 1,
    title: 'Fullstack Project',
    description:
      'Client SPA for edtech startup. Includes custom checkout process and analytics for seamless course purchases.',
    live: 'https://uctitbd.com/',
    github: 'https://github.com/UCT-IT/training',
    stack: ['html5', 'tailwind css', 'nextjs', 'nodejs', 'mongodb'],
    image: '/assets/work/thumb1.png',
  },
  {
    num: 2,
    title: 'Frontend Project',
    description: 'Personal portfolio SPA showcasing my stack and projects.',
    live: '/',
    github: 'https://uctitbd.com/',
    stack: ['html5', 'tailwind css', 'nextjs'],
    image: '/assets/work/thumb2.png',
  },
  {
    num: 3,
    title: 'Fullstack Project',
    description:
      'Personal SaaS web application to provide a platform for educational institutions to manage/grow their businesses. Integrated reporting tools to help institutions track and optimize operations.',
    github: 'https://github.com/saminsss/Teachify',
    stack: ['html5', 'tailwind css', 'nextjs', 'nodejs', 'postgresql'],
  },
  {
    num: 4,
    title: 'Fullstack Project',
    description:
      'Client SPA for water filtration company. Includes custom checkout process integrated with a seamless ordering process for filtered bottled water products.',
    github: 'https://uctitbd.com/',
    stack: ['html5', 'tailwind css', 'nextjs', 'nodejs', 'mongodb'],
  },
];
const Work = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {works.map((work) => (
          <div
            key={work.live}
            className="h-full flex flex-col justify-start gap-4 bg-primary p-4 text-quaternary rounded-lg group shadow-xl group">
            <div className="w-full flex justify-between items-center">
              <h2 className="font-extrabold text-quaternary capitalize group-hover:text-secondary transition-all duration-200">
                {work.num}
              </h2>
              <div className="flex gap-2">
                {work.live && (
                  <Link
                    href={work.live}
                    rel="noopener noreferrer"
                    target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger>
                          <BsArrowDownRight className="w-14 h-14 p-4 rounded-full group-hover:text-quaternary group-hover:bg-secondary hover:-rotate-45 transition-all duration-200" />
                        </TooltipTrigger>
                        <TooltipContent>Live</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                <Link
                  href={work.github}
                  rel="noopener noreferrer"
                  target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsGithub className="w-14 h-14 p-4 rounded-full group-hover:text-quaternary group-hover:bg-secondary hover:p-3 transition-all duration-200" />
                      </TooltipTrigger>
                      <TooltipContent>Github</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
            <h4>{work.title}</h4>
            {work.image && (
              <div className="w-full h-96 relative rounded-lg">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover object-left-top rounded-lg border-2 border-primary"
                />
              </div>
            )}
            <p>{work.description}</p>
            <ul className="flex gap-2 lowercase">
              {work.stack.map((skill) => (
                <li
                  key={`${work.live}${skill}`}
                  className="bg-secondary py-1 px-2 rounded-lg text-ellipsis max-w-fit overflow-hidden whitespace-nowrap text-quaternary hover:bg-tertiary hover:-translate-y-1 transition-all duration-200">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

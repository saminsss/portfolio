'use client';

import TooltipButton from '@/components/TooltipButton';
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
  },
  {
    num: 2,
    title: 'Frontend Project',
    description: 'Personal portfolio SPA showcasing my stack and projects.',
    live: '/',
    github: 'https://github.com/saminsss/portfolio',
    stack: ['html5', 'tailwind css', 'nextjs'],
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
                {String(work.num).padStart(2, '0')}
              </h2>
              <div className="flex gap-2">
                {work.live && (
                  <TooltipButton
                    link={{ href: work.live }}
                    tooltipProvider={{ delayDuration: 100 }}
                    trigger={
                      <BsArrowDownRight className="w-14 h-14 p-4 rounded-full group-hover:text-quaternary group-hover:bg-secondary hover:-rotate-45 transition-all duration-200" />
                    }
                    content="Live"
                  />
                )}
                <TooltipButton
                  link={{ href: work.github }}
                  tooltipProvider={{ delayDuration: 100 }}
                  trigger={
                    <BsGithub className="w-14 h-14 p-4 rounded-full group-hover:text-quaternary group-hover:bg-secondary hover:p-3 transition-all duration-200" />
                  }
                  content="Github"
                />
              </div>
            </div>
            <h4>{work.title}</h4>
            <p>{work.description}</p>
            <ul className="flex gap-2 lowercase">
              {work.stack.map((skill) => (
                <li
                  key={`${work.github}${skill}`}
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

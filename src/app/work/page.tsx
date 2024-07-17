'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { BsArrowDownRight, BsGithub } from 'react-icons/bs';

const services = [
  {
    num: 1,
    title: 'Fullstack Project',
    description:
      'Client SPA for edtech startup. Includes custom checkout process and analytics for seamless course purchases.',
    live: 'https://uctitbd.com/',
    github: 'https://github.com/UCT-IT/training',
    skills: ['html5', 'tailwind css', 'nextjs', 'nodejs', 'mongodb'],
  },
  {
    num: 2,
    title: 'Frontend Project',
    description: 'Personal portfolio SPA showcasing my skills and projects.',
    live: '/',
    github: 'https://uctitbd.com/',
    skills: ['html5', 'tailwind css', 'nextjs'],
  },
  {
    num: 3,
    title: 'Fullstack Project',
    description:
      'Personal SaaS web application to provide a platform for educational institutions to manage/grow their businesses. Integrated reporting tools to help institutions track and optimize operations.',
    github: 'https://github.com/saminsss/Teachify',
    skills: ['html5', 'tailwind css', 'nextjs', 'nodejs', 'postgresql'],
  },
  {
    num: 4,
    title: 'Fullstack Project',
    description:
      'Client SPA for water filtration company. Includes custom checkout process integrated with a seamless ordering process for filtered bottled water products.',
    github: 'https://uctitbd.com/',
    skills: ['html5', 'tailwind css', 'nextjs', 'nodejs', 'mongodb'],
  },
];
const Work = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.live} className="flex flex-col">
            <div className=" h-full flex flex-col justify-start gap-4 bg-primary p-4 text-quaternary rounded-lg group shadow-xl group order-2 lg:order-none">
              <div className="w-full flex justify-between items-center">
                <h2 className="font-extrabold text-quaternary capitalize group-hover:text-secondary transition-all duration-200">
                  {service.num}
                </h2>
                <div className="flex gap-2">
                  {service.live && (
                    <Link
                      href={service.live}
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
                    href={service.github}
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
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <ul className="flex gap-2 lowercase">
                {service.skills.map((skill) => (
                  <li
                    key={`${service.live}${skill}`}
                    className="bg-secondary py-1 px-2 rounded-lg text-quaternary hover:bg-tertiary hover:-translate-y-1 transition-all duration-200">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

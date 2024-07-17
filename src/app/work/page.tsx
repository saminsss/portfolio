'use client';

import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: 1,
    title: 'Web Development',
    description:
      'Client requested React based SPA for edtech startup. Includes custom checkout process and analytics for seamless course purchases.',
    href: 'https://uctitbd.com/',
  },
  {
    num: 2,
    title: 'Web Development',
    description:
      'SaaS web application to provide a platform for educational institutions to manage/grow their businesses. Integrated reporting tools to help institutions track and optimize operations.',
    href: 'https://github.com/saminsss/Teachify',
  },
  {
    num: 3,
    title: 'Web Development',
    description:
      'Client requested React SPA for water filtration company. Includes custom checkout process integrated with a seamless ordering process for filtered bottled water products.',
    href: 'https://github.com/saminsss/fours-group',
  },
];
const Work = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.href}
            className="flex flex-col justify-center gap-6 bg-primary p-4 text-quaternary rounded-lg group shadow-xl group">
            <div className="w-full flex justify-between items-center">
              <h2 className="font-extrabold text-quaternary  group-hover:text-secondary transition-all duration-200">
                {service.num}
              </h2>
              <Link
                href={service.href}
                rel="noopener noreferrer"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-secondary hover:-rotate-45 transition-all duration-200">
                <BsArrowDownRight />
              </Link>
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

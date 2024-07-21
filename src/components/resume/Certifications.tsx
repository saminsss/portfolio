import Link from 'next/link';

import { BsArrowDownRightCircle } from 'react-icons/bs';
import { SiAdobe, SiStripe } from 'react-icons/si';

const certifications = {
  icon: '',
  title: 'My certifications',
  description: 'Certification exams taken and passed during my career.',
  items: [
    {
      company: 'Adobe',
      certificate: 'AEM Sites Developer',
      date: 'Jan 19, 2024',
      link: 'https://www.credly.com/badges/5b0d31a4-4ba1-483d-b55e-d5d9a482c003/print',
      icon: <SiAdobe className="text-red-500 rounded-full" />,
    },
    {
      company: 'Stripe',
      certificate: 'Stripe Associate Developer',
      date: 'Apr 6, 2024',
      link: 'https://stripecertifications.credential.net/ea446bba-2974-4fa8-80ee-0d9d8b9f8f86',
      icon: <SiStripe className="text-purple-500 rounded-full" />,
    },
    {
      company: 'Stripe',
      certificate: 'Stripe Professional Developer',
      date: 'Apr 11, 2024',
      link: 'https://stripecertifications.credential.net/33466bef-dafa-49cf-a706-d87fa244ec5f',
      icon: <SiStripe className="text-purple-500 rounded-full" />,
    },
  ],
};

const Certifications = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4>{certifications.title}</h4>
      <p className="mb-6">{certifications.description}</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.items.map((item) => (
          <li
            key={item.company}
            className="bg-quaternary py-6 px-10 rounded-xl flex flex-col justify-start items-center md:items-start gap-1 text-primary shadow-md">
            <p className="font-semibold text-secondary">{item.date}</p>
            <div className="font-bold text-lg flex gap-2 items-center">
              <p>{item.company}</p>
              {item.icon}
            </div>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center mt-auto group">
              <p className="font-bold text-xl">{item.certificate}</p>
              <BsArrowDownRightCircle className="w-8 h-8 flex-shrink-0 rounded-full group-hover:text-quaternary group-hover:bg-secondary group-hover:-rotate-45 transition-all duration-200" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;

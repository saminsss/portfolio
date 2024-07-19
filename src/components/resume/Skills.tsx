import { FaCss3, FaHtml5, FaJava, FaJs, FaNode, FaReact } from 'react-icons/fa';

import {
  SiAdobe,
  SiAmazonaws,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNuxtdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import TooltipButton from '../TooltipButton';

const skills = {
  title: 'My skills',
  description:
    'Throughout my career, I have honed my skills in AWS, Java, JavaScript, NextJS, Nuxt, Node, React, SQL, TypeScript, Vue. With a strong foundation in object-oriented programming (OOP), design patterns, best practices, algorithms, and data structures, I bring a comprehensive skill set to every project.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
      href: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
      href: 'https://react.dev/',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
      href: 'https://nextjs.org/',
    },
    {
      icon: <FaNode />,
      name: 'node.js',
      href: 'https://nodejs.org/en',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
      href: 'https://tailwindcss.com/',
    },
    {
      icon: <SiVuedotjs />,
      name: 'vue.js',
      href: 'https://vuejs.org/',
    },
    {
      icon: <FaJava />,
      name: 'java',
      href: 'https://www.java.com/en/',
    },
    {
      icon: <SiAmazonaws />,
      name: 'aws',
      href: 'https://aws.amazon.com/',
    },
    {
      icon: <SiDocker />,
      name: 'docker',
      href: 'https://www.docker.com/',
    },
    {
      icon: <SiNginx />,
      name: 'nginx',
      href: 'https://nginx.org/en/',
    },
    {
      icon: <SiMongodb />,
      name: 'mongodb',
      href: 'https://www.mongodb.com/',
    },
    {
      icon: <SiPostgresql />,
      name: 'postgresql',
      href: 'https://www.postgresql.org/',
    },
    {
      icon: <SiMysql />,
      name: 'mysql',
      href: 'https://www.mysql.com/',
    },
    {
      icon: <SiNuxtdotjs />,
      name: 'nuxt.js',
      href: 'https://nuxt.com/',
    },
    {
      icon: <SiAdobe />,
      name: 'adobe edge delivery services',
      href: 'https://www.aem.live/',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
      href: 'https://www.typescriptlang.org/',
    },
  ],
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4>{skills.title}</h4>
      <p className="mb-4">{skills.description}</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {skills.skillList
          .sort((sa, sb) => sa.name.localeCompare(sb.name))
          .map((skill) => (
            <li key={skill.name} className="self-center">
              <TooltipButton
                link={{ href: skill.href }}
                tooltipProvider={{ delayDuration: 100 }}
                trigger={
                  <div className="text-6xl hover:text-secondary transition-all duration-200">
                    {skill.icon}
                  </div>
                }
                content={skill.name.toLowerCase()}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Skills;

'use client';

import TooltipButton from '@/components/TooltipButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaCss3, FaHtml5, FaJava, FaJs, FaNode, FaReact } from 'react-icons/fa';

import {
  SiAmazonaws,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNuxtdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si';

const about = {
  title: 'About me',
  description: `I’m a Software Developer with 3+ years of professional experience in Agile environments, specializing in the entire software development lifecycle. My passion is to create robust software with seamless user experiences.

Throughout my career, I have honed my skills in Java, JavaScript, Node, React, and REST APIs. With a strong foundation in object-oriented programming (OOP), design patterns, best practices, algorithms, and data structures, I bring a comprehensive skill set to every project.

In addition to my technical expertise, I have excellent communication and team working skills. I believe that effective collaboration and open communication are key to successful software development. I actively engage with stakeholders, gather requirements, and ensure clear and concise communication within cross-functional teams, enabling us to deliver high-quality software solutions on time.

A little about why I chose software development as my career path; during my second year of university I was fascinated by the concept of how computer software operated. Starting from logic gates carrying out the instructions I write in assembly to the intricate algorithms using high level languages all grabbed my interest and fuelled a burning desire to learn more. That's when I started chasing my passion in software.

Driven by a passion for continuous growth and innovation, I seek new opportunities and collaborations that will challenge me professionally and contribute to my personal development. I would love to connect if you're looking for a dedicated and adaptable Software Developer who thrives in dynamic environments and values effective teamwork.

Please do not hesitate to reach out to me for exciting job opportunities and potential collaborations.`,
  items: [
    {
      fieldName: 'Name',
      fieldValue: 'Samin Islam',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 778 881 9252',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ Years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'saminsss@gmail.com',
    },
    { fieldName: 'Github', fieldValue: 'github.com/saminsss' },
    {
      fieldName: 'Linkedin',
      fieldValue: 'linkedin.com/in/saminislam/',
    },
    {
      fieldName: 'Location',
      fieldValue: 'Vancouver, BC. Canada.',
    },
  ],
};

const experience = {
  icon: '',
  title: 'My experience',
  description:
    'I’m a Software Developer with 3+ years of professional experience in Agile environments, specializing in the entire software development lifecycle.',
  items: [
    {
      company: 'Ensemble Systems Inc.',
      position: 'Intermediate Software Developer',
      duration: 'Sep, 2022 - Present',
    },
    {
      company: 'Jomar Softcorp Inc.',
      position: 'Software Developer',
      duration: 'May, 2021 - Sep, 2022',
    },
    {
      company: 'UCTIT BD',
      position: 'Tech Lead',
      duration: 'Dec, 2021 - Oct, 2022',
    },
  ],
};

const education = {
  icon: '',
  title: 'My education',
  description:
    "During my second year of university, I became fascinated by how computer software works. Seeing how logic gates execute simple assembly instructions and how complex algorithms come to life in high-level languages really grabbed my attention. This curiosity sparked a passion in me, and that's when I knew I wanted to dive deeper into the world of software development.",
  items: [
    {
      institution: 'University of British Columbia',
      degree: 'BASc. (Electrical Engineering)',
      duration: 'Sep, 2015 - May, 2021',
    },
  ],
};

const skills = {
  title: 'My skills',
  description:
    'Throughout my career, I have honed my skills in AWS, Java, JavaScript, Node, React, and REST APIs. With a strong foundation in object-oriented programming (OOP), design patterns, best practices, algorithms, and data structures, I bring a comprehensive skill set to every project.',
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
  ],
};

const Resume = () => {
  return (
    <Tabs
      defaultValue="experience"
      className="flex flex-col items-center md:items-start md:flex-row w-full h-full gap-8">
      <TabsList className="flex flex-col w-full max-w-md gap-4">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="aboutme">About me</TabsTrigger>
      </TabsList>

      <div className="text-center md:text-left w-full">
        <TabsContent value="experience">
          <div className="flex flex-col gap-4">
            <h4>{experience.title}</h4>
            <p className="mb-6">{experience.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
              {experience.items.map((item) => (
                <li
                  key={item.company}
                  className="bg-quaternary py-6 px-10 rounded-xl flex flex-col justify-start items-center md:items-start gap-1 text-primary h-full shadow-md">
                  <p className="font-semibold text-secondary">
                    {item.duration}
                  </p>
                  <p className="font-bold mb-4 text-xl">{item.position}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <p className="font-bold">{item.company}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="education">
          <div className="flex flex-col gap-4">
            <h4>{education.title}</h4>
            <p className="mb-6">{education.description}</p>
            <ul className="grid grid-cols-1 gap-4">
              {education.items.map((item) => (
                <li
                  key={item.institution}
                  className="bg-quaternary py-6 px-10 rounded-xl flex flex-col justify-start items-center md:items-start gap-1 text-primary h-full shadow-md">
                  <p className="font-semibold text-secondary">
                    {item.duration}
                  </p>
                  <p className="font-bold mb-4 text-xl">{item.degree}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <p className="font-bold">{item.institution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="skills">
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
        </TabsContent>
        <TabsContent value="aboutme">
          <div className="flex flex-col gap-4">
            <h4>{about.title}</h4>
            <p className="mb-4 whitespace-pre-wrap">{about.description}</p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              {about.items.map((item) => (
                <li
                  key={item.fieldName}
                  className="flex gap-4 justify-center items-center md:justify-start">
                  <span className="text-xs text-secondary font-semibold">
                    {item.fieldName}
                  </span>
                  <span>{item.fieldValue}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Resume;

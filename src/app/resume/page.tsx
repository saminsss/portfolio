'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';

import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const about = {
  title: 'About me',
  description: 'Lorem ipsum',
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

const skills = {
  title: 'My skills',
  description: 'Lorem ipsum',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
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
            <ScrollArea className="h-82 md:h-112 overflow-auto">
              <p className="mb-6">{experience.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
                {experience.items.map((item) => (
                  <li
                    key={item.company}
                    className="bg-quaternary py-6 px-10 rounded-xl flex flex-col justify-start items-center md:items-start gap-1 text-primary h-full">
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
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent value="education">Education</TabsContent>
        <TabsContent value="skills">Skills</TabsContent>
        <TabsContent value="aboutme">About me</TabsContent>
      </div>
    </Tabs>
  );
};

export default Resume;

'use client';

import About from '@/components/resume/About';
import Certifications from '@/components/resume/Certifications';
import Education from '@/components/resume/Education';
import Experience from '@/components/resume/Experience';
import Skills from '@/components/resume/Skills';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resume = () => {
  return (
    <Tabs
      defaultValue="experience"
      className="flex flex-col items-center md:items-start md:flex-row w-full h-full gap-8">
      <TabsList className="flex flex-col w-full max-w-md gap-4">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="certifications">Certifications</TabsTrigger>
        <TabsTrigger value="aboutme">About me</TabsTrigger>
      </TabsList>

      <div className="text-center md:text-left w-full">
        <TabsContent value="experience">
          <Experience />
        </TabsContent>
        <TabsContent value="education">
          <Education />
        </TabsContent>
        <TabsContent value="skills">
          <Skills />
        </TabsContent>
        <TabsContent value="certifications">
          <Certifications />
        </TabsContent>
        <TabsContent value="aboutme">
          <About />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Resume;

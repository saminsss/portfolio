import { ScrollArea } from '../ui/scroll-area';

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
      actions: [
        `Developed a full-stack serverless web application utilizing AWS (Amplify, Lambda, Cognito, DynamoDB, API
Gateway), Vue.js, and Node.js, significantly improving the checkout flow and user experience, which resulted in a 20% increase
in transaction completions.`,
        `Developed a full-stack identity management web application using React, TypeScript, Node.js, and AWS Cognito for secure
authentication, adhering to WCAG 2.0 accessibility standards. Optimized microservices with AWS Lambda and DynamoDB,
reducing server load by 12% and lowering operational costs by 15% through infrastructure enhancements.`,
        `Developed a front-end Edge Delivery Services (EDS) headless web application with JavaScript, achieving a perfect 100
Lighthouse score by optimizing Largest Contentful Paint (LCP), Total Blocking Time (TBT), Time to Interactive (TTI), and First
Input Delay (FID).`,
        `Achieved 90% test coverage through comprehensive testing with Jest and cypress, ensuring highly resilient and maintainable
codebases, leading to a 20% reduction in production bugs across multiple relevant projects.`,
      ],
    },
    {
      company: 'Jomar Softcorp Inc.',
      position: 'Software Developer',
      duration: 'May, 2021 - Sep, 2022',
      actions: [
        `Analyzed and enhanced ERP applications, implementing performance optimizations and guideline-aligned improvements using
Java, SQL, and Apache Tomcat, resulting in a 25% increase in overall system efficiency.`,
        `Developed and optimized backend controllers with Java and SQL, reducing API response time by 20% and significantly
improving system responsiveness, leading to faster user interactions.`,
        `Optimized database queries through advanced indexing and query restructuring, cutting data retrieval time by 20% and
improving overall application performance by 15%.`,
        `Implemented comprehensive testing protocols, achieving 90% unit test coverage with JUnit, ensuring application stability and
reducing production defects by 25%.`,
      ],
    },
    {
      company: 'UCTIT BD',
      position: 'Tech Lead',
      duration: 'Dec, 2021 - Oct, 2022',
      actions: [
        `Led the development of a responsive, SEO-optimized single-page application (SPA) and a certification web app using TypeScript,
Next.js, and MongoDB, ensuring accessibility compliance with WCAG standards, and improving user engagement by enhancing
performance and searchability.`,
        `Designed scalable code architecture and implementation strategies and optimized tool and package selections, reducing
overhead costs by 20% while mentoring junior developers and ensuring consistent code quality across the team.`,
        `Collaborated in an agile environment, conducting regular code reviews and ensuring project structure integrity, leading to a 50%
reduction in deployment time by streamlining development workflows and improving team productivity.`,
      ],
    },
  ],
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4>{experience.title}</h4>
      <p className="mb-6">{experience.description}</p>
      <ul className="grid grid-cols-1 gap-4">
        {experience.items.map((item) => (
          <li
            key={item.company}
            className="bg-quaternary py-6 px-10 rounded-xl flex flex-col justify-start items-center md:items-start gap-1 text-primary h-full shadow-md">
            <p className="font-semibold text-secondary">{item.duration}</p>
            <p className="font-bold text-xl">{item.position}</p>
            <div className="flex items-center mb-4 gap-2">
              <p className="font-bold">{item.company}</p>
            </div>
            <ScrollArea className="max-h-52">
              <ul className="flex flex-col gap-2">
                {item.actions.map((action) => (
                  <li key={action.slice(0, 20)} className="flex gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1"></span>
                    <span className="text-sm text-left">{action}</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

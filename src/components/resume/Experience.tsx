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
        `Implemented a streamlined checkout flow and subscription REST API microservice utilizing Vue.js, Typescript, AWS and Node.js
leading to a 30% reduction in churn and a 30% boost in conversion rates.`,
        `Implemented a notification flow and REST API microservice with event detection, notification handling and delivery preferences
utilizing React, Typescript, Node.js, Redis and MySQL improving CTR by 35%.`,
        `Developed pages/routes adhering to WCAG 2.0 accessibility standards using React, Next.js, Vue, Nuxt.js, Javascript and
TypeScript ensuring an inclusive user experience.`,
        `Contributed to SEO and performance enhancements using Adobe EDS, Google Search Console Tools, Vue.js, React, JavaScript,
and TypeScript, improving core web vitals such as LCP, FCP, CLS, and TTI, resulting in a 10x increase in organic traffic and a
notable improvement in user engagement.`,
        `Achieved 95% test coverage through comprehensive testing with Jest and Playwright, ensuring highly resilient and maintainable
codebases, leading to a 20% reduction in production bugs across multiple relevant projects.`,
      ],
    },
    {
      company: 'Jomar Softcorp Inc.',
      position: 'Software Developer',
      duration: 'May, 2021 - Sep, 2022',
      actions: [
        `Enhanced ERP applications by implementing performance optimizations using Java, SQL, and Apache Tomcat, resulting in a 25%
boost in system efficiency.`,
        `Developed and optimized backend controllers with Java, MS SQL/Oracle, reducing API response time by 20% and significantly
improving system responsiveness, driving faster user interactions.`,
        `Optimized database queries through advanced indexing and query restructuring, cutting data retrieval time by 20% and
increasing application performance by 15%.`,
        `Achieved 90% test coverage through comprehensive unit testing using JUnit, enhancing application stability and reducing
production defects by 25%.`,
      ],
    },
    {
      company: 'UCTIT BD',
      position: 'Tech Lead',
      duration: 'Dec, 2021 - Oct, 2022',
      actions: [
        `Led the development of a responsive, SEO-optimized SPA and certification web application in a team of three, using TypeScript,
Next.js, and MongoDB. Ensured WCAG compliance, resulting in increased user engagement through enhanced searchability and
overall performance improvements.`,
        `Designed scalable code architecture and implementation strategies, optimizing tool and package selections, reducing overhead
costs by 20%, and mentoring junior developers to ensure code consistency and quality across the team.`,
        `Collaborated in an agile environment, conducting code reviews and maintaining project structure integrity, reducing deployment
time by 50% by streamlining development workflows and increasing team productivity.`,
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

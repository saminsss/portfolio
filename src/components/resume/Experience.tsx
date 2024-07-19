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
        `Developed a Wordpress headless CMS app with AWS (Amplify, Cognito, DynamoDB, Lambda, API Gateway), Vue, Javascript and NodeJS. Sustained
healthy user growth through analytics optimizations and achieved 20% increased revenue through checkout integration.`,
        `Developed an identity data web application meeting WCAG 2.0 accessibility standards using React, TypeScript, Node.js, and MongoDB. It analyzes and
consolidates customers’ identity data into one platform. Implemented optimized microservices monitoring user session activities while streamlining
data consolidation reducing server load by 12%.`,
        `Developed an AEM Edge Delivery Services headless CMS app with JavaScript. Achieved a perfect 100 Lighthouse score in the frontend application by
optimizing TBT, TTI and FID.`,
        `Attained notable 90% test coverages through comprehensive unit testing in JavaScript/JEST and Cypress end-to-end testing framework, ensuring
resilient codebases.`,
        `Optimized deployment processes, resulting in a 15% reduction in system downtime using Docker and NGINX.`,
      ],
    },
    {
      company: 'Jomar Softcorp Inc.',
      position: 'Software Developer',
      duration: 'May, 2021 - Sep, 2022',
      actions: [
        `Analyzed and improved ERP applications, implementing guideline-aligned enhancements leading to a 25% increase in overall system efficiency using
Java, SQL, and Apache.`,
        `Developed backend controllers, reducing API response time by 20% and enhancing system responsiveness using Java and SQL.`,
        `Optimized database queries, slashing data retrieval time by 20% and boosting application performance by 15% using SQL.`,
        `Implemented testing protocols, achieving a 90% unit test coverage to ensure application stability in Java/JUnit and SQL.`,
        `Developed and implemented a data analysis tool using Python that reduced manual processing time by 50%, improving data accuracy and enabling
faster decision-making for the finance department.`,
      ],
    },
    {
      company: 'UCTIT BD',
      position: 'Tech Lead',
      duration: 'Dec, 2021 - Oct, 2022',
      actions: [
        `Led the development of responsive and SEO optimized SPA and a certification web application, ensuring accessibility compliance using TypeScript,
NextJS and MongoDB.`,
        `Established code architecture strategies, guided tool and package selections, and mentored developers reducing overhead costs by 80%.`,
        `Collaborated within an agile team of front-end developers, maintaining project structure and code quality through code reviews reducing time to
deploy by 50%.`,
        `Developed a sophisticated data visualization dashboard using DJ3 providing real-time insights, thereby enhancing analytical capabilities by 60%.`,
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

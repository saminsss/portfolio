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
        `Architected LLD for user checkout flow implementing responsive frontend components and backend microservices that drove a 30% increase in conversion rates through enhanced UI/UX features`,
        `Implemented a notification flow feature with frontend responsive components and backend microservices with event detection, notification handling and delivery preferences improving CTR by 35%`,
        `Implemented advanced SEO optimization techniques and performance enhancements, resulting in 10x growth of organic website traffic and improved user acquisition`,
        `Designed and developed accessibility-compliant user interfaces meeting WCAG 2.0 standards, ensuring inclusive digital experiences for users`,
        `Developed comprehensive testing strategy achieving 95% code coverage, significantly reducing potential system vulnerabilities and enhancing overall application reliability`,
      ],
    },
    {
      company: 'Jomar Softcorp Inc.',
      position: 'Software Developer',
      duration: 'May, 2021 - Sep, 2022',
      actions: [
        `Engineered performance improvements for enterprise ERP systems, enhancing overall system efficiency by 25% through strategic backend optimizations`,
        `Built custom backend controllers to support new business requirements, resulting in automated reporting capabilities and enhanced user and utility management features, improving user workflow efficiency for 10,000+ daily active users`,
        `Refined API architecture to reduce response times by 20%, dramatically improving real-time data processing and system responsiveness`,
        `Implemented advanced database optimization techniques, improving query performance and reducing computational overhead`,
        `Established rigorous testing protocols maintaining 90% test coverage, resulting in 25% reduction in production-level software defects`,
      ],
    },
    {
      company: 'UCTIT BD',
      position: 'Tech Lead',
      duration: 'Dec, 2021 - Oct, 2022',
      actions: [
        `Engineered web application development using cutting-edge technologies including Next.js and TypeScript`,
        `Streamlined development workflows, reducing deployment time by 50% and minimizing operational overhead`,
        `Strategically reduced project development costs by 20% through efficient resource allocation and process optimization`,
        `Provided technical mentorship to cross-functional development teams, fostering knowledge sharing and skill development`,
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

const about = {
  title: 'About me',
  description: `I’m a Software Developer with 3+ years of professional experience in Agile environments, specializing in the entire software development lifecycle. My passion is to create robust software with seamless user experiences.

Throughout my career, I have honed my skills in AWS, Java, JavaScript, NextJS, Nuxt, Node, React, SQL, TypeScript, Vue. With a strong foundation in object-oriented programming (OOP), design patterns, best practices, algorithms, and data structures, I bring a comprehensive skill set to every project.

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

const About = () => {
  return (
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
            <span className="font-semibold text-primary">
              {item.fieldValue}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;

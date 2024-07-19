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

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4>{education.title}</h4>
      <p className="mb-6">{education.description}</p>
      <ul className="grid grid-cols-1 gap-4">
        {education.items.map((item) => (
          <li
            key={item.institution}
            className="bg-quaternary py-6 px-10 h-fit rounded-xl flex flex-col justify-start items-center md:items-start gap-1 text-primary shadow-md">
            <p className="font-semibold text-secondary">{item.duration}</p>
            <p className="font-bold mb-4 text-xl">{item.degree}</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <p className="font-bold">{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;

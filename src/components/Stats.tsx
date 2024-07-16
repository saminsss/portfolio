'use client';

import CountUp from 'react-countup';

const stats = [
  {
    num: 3,
    text: 'Years of experience',
  },
  {
    num: 5,
    text: 'Projects completed',
  },
  {
    num: 5,
    text: 'Technologies mastered',
  },
  {
    num: 500,
    text: 'Code commits',
  },
];

const Stats = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center md:justify-items-start">
        {stats.map((stat) => (
          <div
            key={stat.text}
            className="flex flex-1 gap-4 items-center justify-center">
            <CountUp
              end={stat.num}
              duration={5}
              delay={1}
              className="text-5xl md:text-6xl font-extrabold text-secondary"
            />
            <p
              className={`${
                stat.text.length < 15 ? 'max-w-28' : 'max-w-36'
              } leading-snug`}>
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

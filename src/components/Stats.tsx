'use client';

import CountUp from 'react-countup';

const stats = [
  {
    num: 3,
    text: 'Years of experience',
    suffix: '+',
  },
  {
    num: 5,
    text: 'End-to-End Projects completed',
  },
  {
    num: 6,
    text: 'Technologies mastered',
  },
  {
    num: 10000,
    text: 'Code commits',
    duration: 2,
    suffix: '+',
  },
];

const Stats = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly gap-8">
        {stats.map((stat) => (
          <div
            key={stat.text}
            className="flex flex-col md:flex-row items-center justify-center">
            <CountUp
              suffix={stat.suffix ?? ''}
              end={stat.num}
              duration={stat.duration ?? 5}
              delay={1}
              className="text-5xl md:text-6xl font-extrabold text-secondary"
            />
            <p
              className={`${
                stat.text.length < 15 ? 'max-w-28' : 'max-w-36'
              } leading-snug text-center`}>
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

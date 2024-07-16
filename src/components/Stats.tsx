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
    num: 5000,
    text: 'Code commits',
    duration: 3,
    suffix: '+',
  },
];

const Stats = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center md:justify-items-start">
        {stats.map((stat) => (
          <div
            key={stat.text}
            className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
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

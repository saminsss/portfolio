'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const PageTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2, ease: 'easeIn' }}
        className="relative">
        <div className="w-72 h-72 relative">
          <Image
            src="/assets/photo.jpg"
            alt="Hero image"
            priority
            quality={100}
            fill
            className="object-cover rounded-full"
          />
          <motion.svg
            width="288"
            height="288"
            viewBox="0 0 144 144"
            className="absolute top-0 left-0 w-full h-full"
            initial="hidden"
            animate="visible">
            <motion.circle
              cx="72"
              cy="72"
              r="70"
              stroke="#E64833"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: '24 10 0 0' }}
              animate={{
                strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

'use client';

import { AnimatePresence, Spring, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type PageTransitionType = {
  children: ReactNode;
};

const transitionSpringPhysics: Spring = {
  type: 'spring',
  duration: 0.5,
};

const PageTransition = ({ children }: PageTransitionType) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname} className="overflow-auto h-screen-minus-header">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.2 },
          }}
          exit={{ opacity: 0, transition: { delay: 0, duration: 0 } }}>
          {children}
        </motion.div>
        <motion.div
          className="bg-primary fixed top-header w-screen overflow-hidden"
          transition={transitionSpringPhysics}
          animate={{ height: '0vh' }}
          exit={{ height: '100vh' }}
        />
        <motion.div
          className="bg-primary fixed top-header w-screen overflow-hidden"
          transition={transitionSpringPhysics}
          initial={{ height: '100vh' }}
          animate={{ height: '0vh', transition: { delay: 0.1 } }}
        />
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;

'use client';

import { AnimatePresence, motion, Spring } from 'framer-motion';
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
      <motion.div key={pathname}>
        {children}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

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
        className="w-72 h-full relative basis-72">
        <div className="h-72 mix-blend-lighten">
          <Image
            src="/assets/photo.jpeg"
            alt="Hero image"
            priority
            quality={100}
            fill
            className="object-contain rounded-full"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

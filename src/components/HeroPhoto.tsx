'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroPhoto = () => {
  return (
    <div className="w-72 h-full relative basis-72">
      <motion.div>
        <div className="h-72">
          <Image
            src="/assets/photo.jpeg"
            alt="Hero image"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroPhoto;

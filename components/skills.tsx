"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hook';
import { motion } from 'framer-motion';

const fadeInAnimationsVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        };
        
    },
};

export default function Skills() {

    const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' id='skills'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                        key={index}
                        variants={fadeInAnimationsVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
    
  );
}

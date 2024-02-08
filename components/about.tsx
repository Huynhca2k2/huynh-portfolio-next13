"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hook';

export default function About() {

  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >

      <SectionHeading>About Me</SectionHeading>

        <p className='mb-3'>
            After graduating with a degree in{" "}
            <span className='font-medium'>Accounting</span>, I decided to pursue my passion for programming. I enrolled in a coding
            bootcamp and learned {" "}
            <span className='font-medium'>full-stack web developer.</span>
        </p>

        <p>
            I am also familiar with TypeSccript and Prisma. I am always looking to learn new technologies. I am currently looking for a {" "}
            <span className='font-medium'>full-time position</span> as a software developer.
        </p>
    </motion.section>
  )
}

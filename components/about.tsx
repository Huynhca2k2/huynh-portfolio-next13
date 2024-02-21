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
          Desire to improve myself through working in the new professional and dynamic environment of the Company.
          Proactive, enthusiastic, responsible, flexible in work, capable of teamwork, sociability, interaction and good team support.
        </p>
    </motion.section>
  )
}

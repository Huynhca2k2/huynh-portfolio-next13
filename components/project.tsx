"use client";

import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { SlSocialGithub } from "react-icons/sl";
import { SlGlobe } from "react-icons/sl";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityYProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
    <motion.div 
        ref={ref} 
        style={{
            scale: scaleProgress,
            opacity: opacityYProgress,
        }}
        className='group mb-3 sm:mb-8 last:mb-0 '
    >
        <section
            className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative
            sm:h-[24rem] hover:bg-gray-200 transition group-even:even:pl-8 dark:bg-white/10 dark:hover:bg-white/20
            dark:text-white'
        >
            <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full 
                sm:group-even:ml-[18rem] mt-[20rem] sm:group-even:mt-0 sm:mt-0'
            >
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li 
                            className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white 
                            rounded-full dark:text-white/70' 
                            key={index}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className='flex flex-col sm:flex-row items-center justify-between text-lg font-medium pt-4'>
                    <a className='group bg-white px-3 py-2 flex items-center gap-2 rounded-lg outline-none text-base sm:text-sm md:text-base
                        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                        href='/'
                    >
                        Go to github <SlSocialGithub className='opacityy-60 group-hover:translate-y-1 transition sm:hidden'/>
                    </a>
                    <a className='group bg-white px-3 py-2 mt-4 flex items-center gap-2 rounded-lg outline-none text-base sm:text-sm md:text-base
                        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                        href='/'
                    >
                        Live review <SlGlobe className='opacityy-60 group-hover:translate-y-1 transition sm:hidden'/>
                    </a>
                </div>
            </div>
            <Image 
                src={imageUrl} 
                alt="my project I worked" 
                width={300} 
                height={200} 
                quality={95}
                className='absolute h-[20rem] sm:h-[25rem] sm:top-8 top-0 sm:-right-40 w-[28.25rem] rounded-t-lg shadow-2xl sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 
                transition sm:group-hover:scale-[1.04] sm:group-hover:-rotate-2 sm:group-even:right-[initial] sm:group-even:-left-40 sm:group-even:group-hover:translate-x-3
                sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2'/>

        </section>
    </motion.div>
    )
    
    
}

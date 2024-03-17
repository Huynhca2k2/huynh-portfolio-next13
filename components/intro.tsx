"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGitSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hook';
import { useActiveSectionContext } from '@/context/active-section-context';
import { FaSquareFacebook } from "react-icons/fa6";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const {
        setActiveSection,
        setTimeOfLastClick
    } = useActiveSectionContext();

  return (
    <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
        id='home'
    >
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image src={"https://scontent.fsgn7-2.fna.fbcdn.net/v/t39.30808-1/428624022_1776945399396885_8786186100932658411_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=fxGSKqBt8PAAX-meqUg&_nc_ht=scontent.fsgn7-2.fna&oh=00_AfAP5jpn-kPd9HZ8jGNzzAN0dOTMhnoLtpUSdLROHT4HTA&oe=65DC179D"} 
                        alt={"hoang huynh"}
                        width={192}
                        height={192}
                        quality={95}
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white'
                    />
                </motion.div>

                <motion.span 
                    className='text-3xl absolute bottom-[-4px] right-[-4px]'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                    >
                        🥰
                    </motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl'
            initial={{ opacity: 1, y: 100 }}
            animate={{opacity: 1, y: 0}}
        >
            <span className='font-bold'>Hello, I'm Hoang Huynh. </span>
            <span className='font-bold'>I am Frontend devloper Fullstack orientation</span>{" "}I enjoy building 
            <span className='italic'>sites & apps</span>. My focus is {" "}
            <span className='underline'>React (Next.js)</span>.

            
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
                delay: 0.1,
            }}
        >
            <Link href="#contact"
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
                rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
                active:scale-105 transition'
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}
            >
                Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                href='/CaiHoangHuynhFrontend.pdf' download={true}
            >Download CV <HiDownload className='opacityy-60 group-hover:translate-y-1 transition'/>
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack
                dark:bg-white/10 dark:text-white/60'
                href='https://www.facebook.com/huynh.ca.it' target='_blank'
            >
                <FaSquareFacebook />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full 
                text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
                cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                href='https://github.com/Huynhca2k2/' target='_blank'
            >
                <FaGitSquare />
            </a>

        </motion.div>
    </section>
  )
}

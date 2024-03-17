'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {links} from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { PiHouse, PiInfo, PiCode, PiAtom, PiChatCircleDots, PiChatText } from "react-icons/pi";

export default function Header() {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className='z-[999] relative'>
            <motion.div 
            className='fixed left-1/2 h-[2.6rem] w-[90%] border-none border border-white border-opacity-40 bg-white
            bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-4 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] rounded-full
            dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1}}
            >
            </motion.div>

            <nav className='flex fixed left-1/2 h-12 -translate-x-1/2 py-2 top-[13px] sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className='flex w-[20rem] flex-wrap items-center justify-evenly sm:justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial]
                sm:flex-nowrap sm:gap-5'>
                    {
                        links.map(link => (
                            <motion.li 
                            className='h-[88%] flex items-center justify-center relative' 
                            key={link.hash} 
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1}}
                            >
                                <Link 
                                    className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',{
                                    "text-gray-950 dark:text-gray-200": activeSection === link.name
                                })}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                                >
                                    {link.name === "Home" && <PiHouse className='text-xl sm:hidden'/>}
                                    {link.name === "About" && <PiInfo className='text-xl sm:hidden'/>}
                                    {link.name === "Projects" && <PiCode className='text-xl sm:hidden'/>}
                                    {link.name === "Skills" && <PiAtom className='text-xl sm:hidden'/>}
                                    {link.name === "Experience" && <PiChatCircleDots className='text-xl sm:hidden'/>}
                                    {link.name === "Contact" && <PiChatText className='text-xl sm:hidden'/>}
                                    <span className='hidden sm:block'>{link.name}</span>
                                    
                                    {
                                        link.name === activeSection && (
                                            <motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                                                layoutId='activeSection'
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30
                                                }}
                                            ></motion.span>
                                        )
                                    }
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>

        </header>
    )
  
}



"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hook';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

    const { ref } = useSectionInView("Contact");
    
  return (
    <motion.section 
        ref={ref}
        id='contact' 
        className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once: true,
        }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'
        >
            Pleace contact me directly at <a className='underline' href='mail:example@gmail.com'>example@gmail.com</a> or through this form.
        </p>

        <form 
            className='mt-10 flex flex-col dark:text-black'
            action={async (formData) => {
                const { data, error} = await sendEmail(formData);

                if(error){
                    toast.error(error);
                    return;
                }

                toast.success("email sent successfully!");
            }}
        >
            <input 
                type='email' 
                className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all
                dark:outline-none'
                placeholder='Your email'
                name='senderEmail'
                required={true}
                maxLength={200}
            />
            <textarea 
                className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all
                dark:outline-none'
                placeholder='Your message'
                name='message'
                required={true}
                maxLength={500}    
            />
            <SubmitBtn/>
        </form>
    </motion.section>
  )
}

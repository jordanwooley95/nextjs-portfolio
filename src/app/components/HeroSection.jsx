'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left sm:justify-self-start'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className='bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
              Hello, I&apos;m{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={['Jordan', 1000, 'Web Developer', 1000, 'AI Developer', 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p
            className={`${dancingScript.className} text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl`}
          >
            Quality is not an act, it is a habit. - Aristotle
          </p>

          <Link
            href='/#contact'
            className='px-6 inline-block py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'
          >
            Contact Me
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <Image
            src='/images/hero-image.png'
            alt='hero imag'
            className='rounded-full object-contain transform scale-75 sm:scale-100'
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

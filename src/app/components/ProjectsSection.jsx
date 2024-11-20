'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'AI Chatbot',
    description:
      'Barebones chatbot using Next.js, Tailwind CSS and Mistral API',
    image: '/images/projects/1.png',
    gitUrl: '',
    previewUrl: 'https://jchat-bot.vercel.app/'
  },
  {
    id: 2,
    title: 'CRM',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    gitUrl: '',
    previewUrl: 'https://jordanwooley95.pythonanywhere.com/crm/default/index'
  },
  {
    id: 3,
    title: 'Recipe Sharing Application',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    gitUrl: '/',
    previewUrl: 'https://food-share-rho.vercel.app/meals'
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

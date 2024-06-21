"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: 'About me',
  description: `Experienced Full Stack JavaScript developer with strong experience building and
    maintaining web and mobile applications using a variety of technologies.
    Competent in frontend and backend development, with significant experience in
    frameworks such as React, React Native, Angular and Ionic. Proven track record of
    working in diverse environments, from freelance projects to large corporate
    teams. I am fluent in Spanish and fluent in English, with a strong commitment to
    continue learning and staying up to date with the latest industry trends and
    technologies`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Rodrigo Ruiz Gerez',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 786 968 2945',
    },
    {
      fieldName: 'Experience',
      fieldValue: '6+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Argentine',
    },
    {
      fieldName: 'Email',
      fieldValue: 'ruizgerezr@gmail.com',
    },{
      fieldName: 'Languages',
      fieldValue: 'Spanish, English',
    },
  ]
};

const experience = {
  icon: '',
  title: 'My experience',
  description: `Experienced Full Stack JavaScript developer with strong experience building and
    maintaining web and mobile applications using a variety of technologies.
    Competent in frontend and backend development, with significant experience in
    frameworks such as React, React Native, Angular and Ionic. Proven track record of
    working in diverse environments, from freelance projects to large corporate
    teams. I am fluent in Spanish and fluent in English, with a strong commitment to
    continue learning and staying up to date with the latest industry trends and
    technologies`,
    items: [
      {
        company: 'Santander Bank Technology',
        position: 'SSr Software Engineer',
        duration: 'July 2021 — April 2024'
      },
      {
        company: 'Freelance',
        position: 'Full Stack JavaScript Developer',
        duration: 'February 2021 — July 2021'
      },
      {
        company: 'Telecom Argentina',
        position: 'Full Stack JavaScript Developer',
        duration: 'October 2019 — February 2021'
      },
    ] 
}

const education = {
  icon: '',
  title: 'My education',
  description: ``,
    items: [
      {
        institution: 'National Technological University of Tucuman',
        degree: 'Higher Technician in Programming',
        duration: '2016 — 2017'
      },
      {
        institution: 'National Technological University of Tucuman',
        degree: 'Fullstack JavaScript Engineer',
        duration: '2017 — 2018'
      },
    ] 
}

const skills = {
  icon: '',
  title: 'My skills',
  description: ``,
    skillList: [
      {
        icon: <FaHtml5 />,
        name: 'HTML5',
      },
      {
        icon: <FaCss3 />,
        name: 'CSS3',
      },
      {
        icon: <FaJs />,
        name: 'JavaScript',
      },
      {
        icon: <FaReact />,
        name: 'React.js',
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind.css',
      },
      {
        icon: <FaFigma />,
        name: 'Figma',
      },
      {
        icon: <FaNodeJs />,
        name: 'Figma',
      },
    ] 
}


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex items-center justify-center p-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="exprience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume

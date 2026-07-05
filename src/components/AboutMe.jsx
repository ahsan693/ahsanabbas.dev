import { RadarChart } from "./radarChart";
import { Education } from "./Education";
import { easeInOut, motion } from "motion/react";
import doc from "../assets/doc/download.pdf";
import character from "../assets/images/character-removebg-preview.png";
import js from "../assets/icons/skills-icon/javascript.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
import figma from "../assets/icons/skills-icon/figma.svg";
import md from "../assets/icons/skills-icon/mongodb.svg";
import next from "../assets/icons/skills-icon/nextjs.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";

export const AboutMe = () => {
  const skillIcons = [js, cpp, css, figma, md, next, node, py, react, tailwind];

  return (
    <>
      <div id="About" className="mobile-safe flex justify-center px-5 sm:px-8 lg:px-0 relative overflow-hidden">
        <div className="h-full w-full max-w-[60rem]">
          
          {/* Title Section 1 */}
          <div className="project-title relative flex min-h-[50vh] flex-col items-center justify-center py-20 text-center text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-6xl md:min-h-screen md:text-8xl">
            <div className="absolute z-10 size-60 rounded-full bg-color1/40 blur-[100px] md:size-80"></div>
            <motion.div className="z-30 flex flex-col items-center justify-center md:flex-row md:flex-wrap md:gap-x-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="will-change-transform will-change-opacity"
              >
                The
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="will-change-transform will-change-opacity"
              >
                developer
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="will-change-transform will-change-opacity"
              >
                behind
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className="will-change-transform will-change-opacity"
              >
                the code
              </motion.div>
            </motion.div>
          </div>

          {/* About Me Section */}
          <div className="Me relative flex h-auto flex-col items-center gap-10 py-10 md:mt-10 md:min-h-[70vh] md:flex-row md:py-5">
            <div className="flex w-full justify-center md:w-1/2">
              <motion.div
                initial={{ opacity: 0, filter: "blur(30px)", scale: 0.8 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.5 }}
                className="image relative z-20 flex w-full max-w-[20rem] justify-center will-change-transform will-change-opacity sm:max-w-[25rem]"
              >
                <img
                  className="z-20 w-3/4 max-w-[18rem] drop-shadow-2xl sm:max-w-[20rem]"
                  src={character}
                  alt="Ahsan Abbas Character"
                />
                <div className="custom-radius absolute h-full w-full z-10 bg-color1"></div>
              </motion.div>
            </div>
            
            <div className="AboutMeText flex flex-col justify-center gap-y-4 p-0 md:w-1/2 md:p-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeInOut }}
                viewport={{ amount: 0.5 }}
                className="text-center text-3xl font-bold text-white md:text-left md:text-4xl"
              >
                About Me
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: easeInOut }}
                viewport={{ amount: 0.5 }}
                className="about-me mt-2 text-left text-base leading-relaxed text-[#d4d4d4] md:text-lg"
              >
                Hi, I&apos;m Ahsan! I am a full-stack developer specializing in React.js, Next.js, and modern JavaScript, with foundational exposure to .NET (C#) and SQL Server. With an academic background in core CS disciplines including AI, Machine Learning, and Data Structures, I complement my theoretical knowledge with hands-on experience building performant, SEO-friendly web applications.
              </motion.div>
              <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                href={doc} 
                target="_blank"
                className="mt-4 w-full sm:w-auto"
              >
                <button className="w-full rounded-3xl bg-color1 px-8 py-3.5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white transition-all active:scale-[0.98] hover:bg-color1Hover sm:w-auto">
                  Download CV
                </button>
              </motion.a>
            </div>
          </div>

          {/* Title Section 2 */}
          <div className="project-title relative flex min-h-[40vh] items-center justify-center py-16 text-center sm:py-20 md:min-h-[60vh]">
            <div className="absolute z-10 size-60 rounded-full bg-color1/40 blur-[100px] md:size-80"></div>
            <div className="z-30 flex flex-col items-center justify-center text-4xl font-extrabold uppercase leading-tight tracking-wide text-white md:flex-row md:flex-wrap md:gap-x-6 md:text-7xl lg:text-8xl">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                The
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                Developer&apos;<span className="lowercase">s</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                Skills
              </motion.div>
            </div>
          </div>

          {/* Skills & Radar Section */}
          <div className="flex flex-col gap-16 py-8 md:flex-row md:items-center md:gap-8 md:py-12">
            
            {/* Skills Text & Icons */}
            <div className="flex flex-col gap-8 md:w-1/2">
              <div className="flex flex-col p-0 md:p-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ amount: 0.5 }}
                  className="text-center text-3xl font-bold tracking-wide text-white md:text-left md:text-4xl"
                >
                  About Skills
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ amount: 0.5 }}
                  className="about-me mx-auto mt-4 max-w-[40rem] text-center text-base leading-relaxed text-[#d4d4d4] md:mx-0 md:text-left md:text-lg"
                >
                  I craft engaging and functional websites using modern
                  technologies, combining clean code with creative design to
                  bring ideas to life.
                </motion.div>
              </div>
              
              <div className="skill-icons flex items-center justify-center px-2 md:px-5">
                <div className="grid w-full max-w-[25rem] grid-cols-5 gap-4 justify-items-center sm:gap-6 md:max-w-none">
                  {skillIcons.map((icon, index) => (
                    <motion.img
                      initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                      whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      key={index}
                      className="size-10 object-contain sm:size-12"
                      src={icon}
                      alt={`Skill icon ${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Radar Chart */}
            <div className="flex flex-col items-center gap-6 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-3xl bg-color2 px-5 py-2 text-sm font-semibold tracking-wide text-color3 md:text-base"
              >
                Skills Overview Radar
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ amount: 0.5 }}
                className="flex w-full max-w-[22rem] items-center justify-center will-change-transform will-change-opacity sm:max-w-[26rem] md:max-w-[30rem]"
              >
                <div className="w-full aspect-square">
                   <RadarChart />
                </div>
              </motion.div>
            </div>
            
          </div>
          
          <Education />
        </div>
      </div>
    </>
  );
};
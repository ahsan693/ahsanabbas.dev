import { motion } from "motion/react";
import { useState, useEffect } from "react";
import heroIllustration from "../assets/images/Hero-illustrations.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";

export const HeroSect = () => {
  const [word, setWord] = useState("Developer");
  const words = ["Developer", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => (prev === words[0] ? words[1] : words[0]));
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Added empty dependency array to prevent infinite re-renders

  return (
    <>
      {/* Changed to 100dvh for proper mobile browser height handling */}
      <div id="Home" className="mobile-safe flex justify-center px-5 sm:px-8 lg:px-0">
        <div className="hero-section relative flex h-[100dvh] min-h-[42rem] w-full max-w-[60rem] justify-between overflow-hidden sm:min-h-[48rem] lg:min-h-[42rem]">
          
          {/* Adjusted mobile positioning to center the text better */}
          <div className="heroText z-30 flex h-full w-full flex-col justify-center pb-16 pt-20 sm:justify-center sm:pb-0 md:justify-center">
            <div className="flex flex-col gap-2 pl-1 tracking-wide text-white sm:pl-2 md:gap-3 md:pl-5">
              
              {/* Increased font sizes for mobile headings */}
              <span className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Hi! I&apos;m Ahsan Abbas,
              </span>
              <span className="flex text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                A Web&nbsp;
                <motion.span
                  key={word}
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="mr-1 overflow-hidden bg-fontBlue bg-clip-text text-transparent will-change-transform will-change-opacity"
                >
                  {word}
                </motion.span>
                <motion.span
                  className="h-full w-[2px] bg-fontBlue"
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
              </span>
              
              {/* Increased subtitle font size and line-height for mobile readability */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-3 max-w-[32rem] text-sm font-medium leading-relaxed text-[#c4c4c4] sm:text-base md:w-[60%] md:text-lg"
              >
                Combining development skills with creative design, <br className="hidden sm:block" />I
                transform concepts into dynamic, user-centered <br className="hidden sm:block" /> web
                solutions.
              </motion.span>
            </div>

            {/* Increased button spacing and text sizes */}
            <div className="buttons mt-8 flex w-full flex-col gap-4 pl-1 text-sm tracking-[0.2em] text-white sm:flex-row sm:items-start md:mt-8 md:text-base md:pl-5">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                href="#Projects"
                className="w-full sm:w-auto"
              >
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full rounded-3xl bg-color1 py-3.5 text-center font-bold uppercase transition hover:bg-color1Hover sm:w-[14rem] md:w-[13rem]"
                >
                  Explore Projects
                </motion.button>
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                href="#Contact"
                className="w-full sm:w-auto"
              >
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full rounded-3xl border-2 border-color2 py-3 text-center font-bold uppercase text-color2 transition hover:bg-color2 hover:text-color3 sm:w-[14rem] md:w-[13rem]"
                >
                  Get in Touch
                </motion.button>
              </motion.a>
            </div>

            <div className="social-icons ml-1 mt-8 flex h-10 items-center gap-4 sm:ml-2 md:mt-6 md:ml-5">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                href="https://www.linkedin.com/in/irfan-naikwade/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-8 cursor-pointer transition-all duration-200 hover:scale-110"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                href="https://github.com/IrfanNaikwade28"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 cursor-pointer transition-all duration-200 hover:scale-110"
                  src={github}
                  alt="GitHub"
                />
              </motion.a>
            </div>
          </div>

          <div className="heroIllustration absolute h-full w-full pointer-events-none">
            {/* Reduced opacity on mobile to 30% so text is easy to read, returns to 80% on desktop */}
            <motion.img
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute -right-10 top-10 min-w-[20rem] w-[25rem] opacity-30 sm:-top-10 sm:w-[30rem] md:-right-20 md:-top-24 md:w-[35rem] md:opacity-80 lg:w-[40rem]"
              src={heroIllustration}
              alt=""
            />
            <div className="absolute bottom-10 right-1/2 translate-x-1/2 md:bottom-5 md:right-5 md:translate-x-0">
              <div className="scroll-icon">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-5 sm:w-6"
                  src={scrollIcon}
                  alt="Scroll down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
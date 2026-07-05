import { motion } from "motion/react";
import { useState } from "react";

type EducationIcon = "graduationCap" | "book" | "school";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  icon: EducationIcon;
  points: string[];
}

const education: EducationItem[] = [
  {
    degree: "BSc Computer Science — 8th Semester",
    institution: "Air University, Islamabad",
    duration: "2022 – 2026 · Expected Graduation: 2026",
    icon: "graduationCap",
    points: [
      "Relevant coursework: Artificial Intelligence, Machine Learning, Data Structures & Algorithms.",
      "Database Systems, Software Engineering, Computer Networks, and Object-Oriented Programming.",
    ],
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Fauji Foundation College, Islamabad",
    duration: "",
    icon: "book",
    points: [],
  },
  {
    degree: "Matriculation in Science",
    institution: "APS DHA Phase 1, Islamabad",
    duration: "",
    icon: "school",
    points: [],
  },
];

const icons: Record<EducationIcon, JSX.Element> = {
  graduationCap: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4L21 8.5L12 13L3 8.5L12 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.8V15.5C7 15.5 9 17.5 12 17.5C15 17.5 17 15.5 17 15.5V10.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 5.5C4 4.67157 4.67157 4 5.5 4H11.5V19.5H5.5C4.67157 19.5 4 18.8284 4 18V5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 5.5C20 4.67157 19.3284 4 18.5 4H12.5V19.5H18.5C19.3284 19.5 20 18.8284 20 18V5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  school: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 20V10.5L12 4L20 10.5V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 20V13.5H15V20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 20H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export const Education = () => {
  const [inView, setInView] = useState(false);

  return (
    <div id="Education" className="flex justify-center relative overflow-hidden">
      <div className="education-section w-full flex flex-col relative max-w-[60rem] px-5 py-16 sm:px-8 md:py-24">
        
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-fontBlue/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-color1/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={() => setInView(true)}
          onViewportLeave={() => setInView(false)}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="project-title relative z-10 mb-20 flex items-center justify-center text-5xl font-semibold uppercase tracking-tight text-white will-change-transform will-change-opacity sm:text-6xl md:mb-32 md:text-8xl"
        >
          <div className="absolute z-10 size-32 rounded-full bg-color1/40 blur-[50px] md:size-40"></div>
          <span className="relative z-20">Education</span>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line - precisely aligned to icon centers */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2 }}
            style={{ originY: 0 }}
            className="absolute bottom-2 left-[1.35rem] top-2 w-[2px] bg-gradient-to-b from-fontBlue via-color2/60 to-transparent md:left-[1.65rem]"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex gap-5 sm:gap-6 md:gap-8"
              >
                {/* Icon node on the timeline */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="relative z-10 flex shrink-0 h-11 w-11 items-center justify-center rounded-full border-2 border-color2 bg-color3 text-color2 md:h-14 md:w-14"
                >
                  <span className="h-5 w-5 md:h-6 md:w-6">
                    {icons[edu.icon]}
                  </span>
                </motion.div>

                <div className="flex flex-col gap-1 pb-2 tracking-wide text-white">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                    <span className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                      {edu.degree}
                    </span>
                    {edu.duration && (
                      <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-color2 sm:text-sm md:mt-0">
                        {edu.duration}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-transparent bg-clip-text bg-fontBlue sm:text-base">
                    {edu.institution}
                  </span>

                  {edu.points.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-2">
                      {edu.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.3 + i * 0.05,
                          }}
                          className="flex gap-2 text-xs font-medium leading-relaxed text-[#c4c4c4] sm:text-sm md:w-[90%]"
                        >
                          <span className="mt-[2px] text-fontBlue">–</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};
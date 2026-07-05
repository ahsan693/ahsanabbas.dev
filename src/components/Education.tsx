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
    <div id="Education" className="flex justify-center relative">
      <div className="education-section w-full flex flex-col relative max-w-[60rem] py-16 md:py-24">
        {/* ambient background glow, echoes the hero illustration accent */}
        <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 bg-fontBlue/10 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-0 -left-10 w-64 h-64 bg-color1/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, scale: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={() => setInView(true)}
          onViewportLeave={() => setInView(false)}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="project-title z-10 text-white text-6xl md:text-8xl tracking-tight font-semibold uppercase flex justify-center items-center animate-pulse will-change-transform will-change-opacity mb-24 md:mb-36"
        >
          <div className="bg-color1/40 rounded-full absolute size-40 blur-[50px] z-10"></div>
          Education
        </motion.div>

        <div className="relative pl-5">
          {/* vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2 }}
            style={{ originY: 0 }}
            className="absolute left-[1.65rem] top-2 bottom-2 w-[2px] bg-gradient-to-b from-fontBlue via-color2/60 to-transparent"
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex gap-5 md:gap-8"
              >
                {/* icon node on the timeline */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="relative z-10 shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full bg-color3 border-2 border-color2 text-color2 flex items-center justify-center"
                >
                  <span className="w-5 h-5 md:w-6 md:h-6">
                    {icons[edu.icon]}
                  </span>
                </motion.div>

                <div className="flex flex-col text-white tracking-wide gap-1 pb-2">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                    <span className="font-semibold text-2xl md:text-4xl">
                      {edu.degree}
                    </span>
                    {edu.duration && (
                      <span className="text-color2 font-semibold text-[10px] md:text-sm uppercase tracking-widest">
                        {edu.duration}
                      </span>
                    )}
                  </div>
                  <span className="bg-fontBlue text-transparent bg-clip-text font-semibold text-[10px] md:text-sm">
                    {edu.institution}
                  </span>

                  {edu.points.length > 0 && (
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {edu.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + 0.3 + i * 0.05,
                          }}
                          className="text-[#989898] font-normal text-[10px] md:text-sm md:w-[85%] flex gap-2"
                        >
                          <span className="text-fontBlue mt-[2px]">–</span>
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
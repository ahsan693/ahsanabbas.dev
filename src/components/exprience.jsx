import { motion } from "motion/react";
import { useState } from "react";

const experiences = [
  {
    role: "Next.js Developer",
    company: "Dropline Media — Marketing Agency",
    duration: "2026 – Present",
    icon: "briefcase",
    points: [
      "Built and maintained the agency website using Next.js and Tailwind CSS, with strong focus on performance and SEO.",
      "Developed reusable React component libraries to accelerate delivery of client marketing pages.",
      "Implemented SSR and SSG strategies for optimal Core Web Vitals and fast page load speeds.",
      "Integrated REST APIs and third-party marketing tools into Next.js applications.",
      "Translated Figma mockups into pixel-perfect, fully responsive UIs with cross-browser compatibility.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Self-Employed / Freelance",
    duration: "2024 – Present",
    icon: "code",
    points: [
      "Developed full-stack applications using React.js, Next.js, and Node.js for diverse client requirements.",
      "Designed and integrated RESTful APIs for seamless frontend-backend communication.",
      "Managed MongoDB and MySQL databases; built authentication systems and admin dashboards.",
      "Deployed all applications on Vercel with CI/CD workflows via Git and GitHub.",
    ],
  },
  {
    role: ".NET Development Intern",
    company: "Safex Solutions",
    duration: "2025 (6 Weeks)",
    icon: "terminal",
    points: [
      "Completed a 6-week intensive internship focused on .NET development using C# and ASP.NET.",
      "Built and styled web pages using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Assisted in developing UI components and implementing responsive layouts.",
      "Learned Git version control and standard professional project workflows.",
    ],
  },
];

const icons = {
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8.5C3 7.39543 3.89543 6.5 5 6.5H19C20.1046 6.5 21 7.39543 21 8.5V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 6.5V5.5C8 4.39543 8.89543 3.5 10 3.5H14C15.1046 3.5 16 4.39543 16 5.5V6.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3 12.5H21" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 12.5H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 8L4 12.5L8.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8L20 12.5L15.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.5L10.5 19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4.5" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 9.5L10 12.5L6.5 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.5 15.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export const ExperienceSect = () => {
  const [inView, setInView] = useState(false);

  return (
    <div id="Experience" className="mobile-safe relative flex justify-center px-4 sm:px-6 lg:px-0">
      <div className="experience-section section-gap relative flex w-full max-w-[60rem] flex-col">
        {/* ambient background glow, echoes the hero illustration accent */}
        <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 bg-fontBlue/10 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-0 -left-10 w-64 h-64 bg-color1/10 blur-3xl rounded-full" />

      <motion.div
          initial={{ opacity: 0, scale: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={() => setInView(true)}
          onViewportLeave={() => setInView(false)}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="project-title z-10 mb-16 flex items-center justify-center text-center text-5xl font-semibold uppercase tracking-tight text-white animate-pulse will-change-transform will-change-opacity sm:text-6xl md:mb-24 md:text-8xl"
        >
          <div className="bg-color1/40 rounded-full absolute size-40 blur-[50px] z-10"></div>
          Experience
        </motion.div>

        <div className="relative pl-2 sm:pl-5">
          {/* vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2 }}
            style={{ originY: 0 }}
            className="absolute left-[1.35rem] top-2 bottom-2 w-[2px] bg-gradient-to-b from-fontBlue via-color2/60 to-transparent sm:left-[1.65rem]"
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex gap-4 sm:gap-5 md:gap-8"
              >
                {/* icon node on the timeline */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-color2 bg-color3 text-color2 sm:h-11 sm:w-11 md:h-14 md:w-14"
                >
                  <span className="w-5 h-5 md:w-6 md:h-6">
                    {icons[exp.icon]}
                  </span>
                </motion.div>

                <div className="flex flex-col text-white tracking-wide gap-1 pb-2">
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
                    <span className="text-xl font-semibold sm:text-2xl md:text-4xl">
                      {exp.role}
                    </span>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-color2 sm:text-[0.7rem] md:text-sm">
                      {exp.duration}
                    </span>
                  </div>
                  <span className="bg-fontBlue bg-clip-text text-[0.7rem] font-semibold text-transparent sm:text-sm">
                    {exp.company}
                  </span>

                  <ul className="mt-2 flex flex-col gap-1.5">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + 0.3 + i * 0.05,
                        }}
                        className="flex gap-2 text-[0.7rem] font-normal leading-5 text-[#989898] sm:text-sm md:w-[85%]"
                      >
                        <span className="text-fontBlue mt-[2px]">–</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
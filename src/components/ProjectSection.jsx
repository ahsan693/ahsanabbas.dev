import { useEffect, useState,useRef } from "react";
import { ProjectInsights } from "./projectInsights";
import {motion,useScroll} from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "./constant";
export const ProjectSection = () => {
  const ref = useRef(null);
  const [stopScroll, setStopScroll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [inView, setInView] = useState(false);
  const { scrollYProgress } = useScroll({target:ref});
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestScrollValue) => {
      if (inView && latestScrollValue > 0.1) {
        alert("Working");
        console.log("Working");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, inView]);


  const handleInsightPanel = (status, project = null) => {
    setStopScroll(status);
    setSelectedProject(project);
  };
  useEffect(() => {
    if (stopScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [stopScroll]);
  return (
    <>
      <div id="Projects" className="mobile-safe relative mt-8 flex min-h-screen w-full flex-col scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-0 lg:py-24">
        <div
          ref={ref}
        className="min-h-[100svh] w-full flex justify-center items-center">
          <motion.div
          initial={{ opacity: 0,scale: 2}}
          whileInView={{ opacity: 1,scale: 1 }}
          onViewportBoxUpdate={(info) => setInView(info.isInView)}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`project-title z-10 flex items-center justify-center text-center text-5xl font-semibold uppercase tracking-tight text-white animate-pulse will-change-transform will-change-opacity sm:text-6xl md:text-8xl`}>
            <div className="bg-color1/40 rounded-full absolute size-40 blur-[50px] z-10"></div>
            Projects
          </motion.div>
        </div>
        <div className="mt-10 flex h-full flex-wrap justify-center gap-6 px-1 sm:gap-8 lg:gap-10">
          {Object.keys(Projects).map((key) => {
            const project = Projects[key];
            return (
              <ProjectCard
                key={key}
                projectImage={project.image}
                title={project.title}
                subTitle={project.subTitle}
                setOpenInsights={(status) =>
                  handleInsightPanel(status, project)
                }
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </div>
        {selectedProject && (
          <ProjectInsights
            stopScroll={stopScroll}
            handleInsightPanel={handleInsightPanel}
            title={selectedProject.title}
            desc={selectedProject.insights.desc}
            category={selectedProject.insights.category}
            techstack={selectedProject.insights.techStack}
            reportLink={selectedProject.insights.reportLink}
          />
        )}
      </div>
    </>
  );
};

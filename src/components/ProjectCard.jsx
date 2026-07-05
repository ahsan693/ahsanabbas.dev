import PropTypes from "prop-types";
import {motion} from "motion/react";
export const ProjectCard = ({
  projectImage,
  title,
  subTitle,
  setOpenInsights,
  githubLink,
  liveLink,
}) => {
  const openInsightsPanel = () => {
    setOpenInsights(true);
  };

  const openLiveLink = () => {
    if (liveLink) {
      window.open(liveLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardClick = (event) => {
    const target = event.target;
    const isInteractive = target.closest("button, a, input, textarea, select");

    if (!isInteractive) {
      openLiveLink();
    }
  };

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLiveLink();
    }
  };

  return (
    <>
      <motion.div
        role="button"
        tabIndex={0}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        className="project-card flex h-[20rem] w-[20rem] cursor-pointer flex-col rounded-md bg-white/5 px-3 py-5 will-change-transform will-change-opacity"
      >
        <div className="project-image flex h-2/3 w-full flex-col justify-between rounded-md bg-white/5">
          <div className="flex h-1/6 gap-1 py-1 pl-2">
            <div className="size-1 bg-red-500 rounded-full"></div>
            <div className="size-1 bg-yellow-400 rounded-full"></div>
            <div className="size-1 bg-green-400 rounded-full"></div>
          </div>
          <div className="image h-full w-full">
            <img
              className="h-full w-full cursor-pointer rounded-b-md bg-center object-cover"
              src={projectImage}
              alt=""
            />
          </div>
        </div>
        <div className="project-text flex h-2/5 flex-col justify-center gap-y-1">
          <div className="main-title text-2xl font-semibold text-white">
            {title}
          </div>
          <div className="sub-title text-xs font-extralight tracking-wider text-white">
            {subTitle}
          </div>
        </div>
        <div className="buttons flex w-full gap-2 text-[12px]">
          <button
            onClick={(event) => {
              event.stopPropagation();
              openInsightsPanel();
            }}
            className="h-[5vh] w-1/2 cursor-pointer rounded-3xl bg-color1 text-center font-semibold tracking-widest text-white hover:bg-color1Hover"
          >
            Explore Insights
          </button>
          <a
            className="w-1/2"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="h-[5vh] w-full cursor-pointer rounded-3xl border-2 border-color2 text-center font-semibold tracking-widest text-color2 hover:bg-color2 hover:text-color3">
              View in Github
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};
ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  setOpenInsights: PropTypes.func,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

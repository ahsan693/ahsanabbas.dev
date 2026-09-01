// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import django from "../assets/icons/skills-icon/django.svg";
import html from "../assets/icons/skills-icon/html.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
// import figma from "../assets/icons/skills-icon/figma.svg";
import md from "../assets/icons/skills-icon/mongodb.svg";
import nextjs from "../assets/icons/skills-icon/nextjs.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import php from "../assets/icons/skills-icon/php.svg";
import ml from "../assets/icons/skills-icon/ml.png";

// projectImagess
import dropline  from "../assets/images/projectImages/dropline.PNG";
import gallery23 from "../assets/images/projectImages/gallery23.PNG";
import sarlamAthletics from "../assets/images/projectImages/sarlamathletics.PNG";
import travelMommy from "../assets/images/projectImages/travelmommy.PNG";
import indusmotors from "../assets/images/projectImages/indus motors.PNG";




export const Projects = {
  DroplineMedia: {
    image: dropline,
    title: "Dropline Media",
    subTitle: "Digital Marketing Agency Website",
    insights: {
      desc: `Agencies need trust-building storytelling with motion-led service highlights.`,
      category: "Marketing, Website",
      techStack: [react, js],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/Dropline-Media",
    liveLink: "https://dropline-media-fsj6.vercel.app/",
  },

  Gallery23: {
    image: gallery23,
    title: "Gallery23 Ireland",
    subTitle: "Custom Framing & Fine Art Printing Website",
    insights: {
      desc: `Fine art and framing businesses need an elegant, gallery-like presentation with pixel-perfect responsive layouts across services.`,
      category: "Art & Framing, Website",
      techStack: [nextjs, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/Art-Gallary23-Ireland",
    liveLink: "https://art-gallary23-ireland.vercel.app/",
  },

  SarlamAthletics: {
    image: sarlamAthletics,
    title: "Sarlam Athletics",
    subTitle: "Combat Sports Equipment Manufacturer Website",
    insights: {
      desc: `Private-label sports equipment brands need a bold, product-focused storefront with detailed listings and a custom design system.`,
      category: "E-Commerce, Sports",
      techStack: [nextjs, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/Sarlam-Athletics",
    liveLink: "https://sarlam-athletics.vercel.app/",
  },

  TravelMommy: {
    image: travelMommy,
    title: "TravelMommy",
    subTitle: "Travel Comparison Website",
    insights: {
      desc: `Travel platforms need fast, comparison-driven search across flights, hotels, and routes with a clean booking-focused UI.`,
      category: "Travel, Website",
      techStack: [nextjs, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/Travel-Agency",
    liveLink: "https://travel-agency-ten-orpin.vercel.app/",
  },

  IndusMotors: {
    image: indusmotors,
    title: "Indus Motors",
    subTitle: "Used Car Selling Platform",
    insights: {
      desc: `A marketplace for buying and selling used cars with detailed listings, specifications, and images.`,
      category: "Marketplace",
      techStack: [react, node, md],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/indus-motor-group",
    liveLink: "https://indus-motor-group.vercel.app/",
  },
};
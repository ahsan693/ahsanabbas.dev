// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import django from "../assets/icons/skills-icon/django.svg";
import html from "../assets/icons/skills-icon/html.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
// import figma from "../assets/icons/skills-icon/figma.svg";
import md from "../assets/icons/skills-icon/mongodb.svg";
// import next from "../assets/icons/skills-icon/nextjs.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import php from "../assets/icons/skills-icon/php.svg";
import ml from "../assets/icons/skills-icon/ml.png";

// projectImagess
import dropline  from "../assets/images/projectImages/dropline.PNG";
import luxewear from "../assets/images/projectImages/luxewear.PNG";
import monal from "../assets/images/projectImages/monal.PNG";
import laundrycity from "../assets/images/projectImages/laundry.PNG";
import indusmotors from "../assets/images/projectImages/indus motors.PNG";
import irishcalculator from "../assets/images/projectImages/irish calculator.PNG";




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

  LuxeWear: {
    image: luxewear,
    title: "LuxeWear Clothing",
    subTitle: "Fashion Shopping Website",
    insights: {
      desc: `Fashion brands need high-conversion product presentation with a clean and responsive storefront experience.`,
      category: "E-Commerce",
      techStack: [react, node, md, css],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/Luxewear",
    liveLink: "https://luxewear-rose.vercel.app/",
  },

  MonalRestaurant: {
    image: monal,
    title: "Monal Restaurant",
    subTitle: "Restaurant Website",
    insights: {
      desc: `Restaurant websites should guide visitors toward reservations with a clear menu-first experience.`,
      category: "Restaurant",
      techStack: [react, js, css],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/Resturant",
    liveLink: "https://resturant-five-kappa.vercel.app/",
  },

  LaundryCity: {
    image: laundrycity,
    title: "LaundryCity",
    subTitle: "Laundry Service App",
    insights: {
      desc: `Service businesses need transparent order tracking with scheduling and workflow management.`,
      category: "Service Platform",
      techStack: [react, node, md],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/Laundry-management-system-react-js-",
    liveLink: "https://laundry-management-system-react-js.vercel.app/",
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

  IrishNetIncomeCalculator: {
    image: irishcalculator,
    title: "Irish Net Income Calculator",
    subTitle: "Salary Calculator",
    insights: {
      desc: `A real-time calculator that estimates Irish net salary with tax and deduction breakdowns.`,
      category: "Finance Tool",
      techStack: [react, js, css],
      reportLink: "",
    },
    githubLink: "https://github.com/ahsan693/irish-tax-calculator",
    liveLink: "https://irish-net-salary-calculator.vercel.app/",
  },
};
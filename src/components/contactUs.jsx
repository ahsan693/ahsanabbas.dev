import { motion } from "motion/react";
import { useState } from "react";
import msgIcon from "../assets/icons/mail.png";
import { Footer } from "./footer";
export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://irfan-devs.vercel.app/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error occurred. Try again.");
    }
  };

  return (
    <>
      <div id="Contact" className="mobile-safe min-h-screen scroll-mt-24 px-4 sm:px-6 lg:px-0">
        <div className="project-title flex min-h-[100svh] items-center text-6xl font-extrabold uppercase leading-snug tracking-wide text-white sm:text-7xl md:justify-center md:text-9xl">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <div className="z-30 animate-pulse pl-5 flex max-md:flex-col gap-x-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Get
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              in
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Touch
            </motion.div>
          </div>
        </div>
        <div className="form mt-6 flex min-h-screen flex-col gap-6 py-8 max-md:gap-5 md:mt-10 md:flex-row md:py-10">
          <div className="illustration flex h-1/4 w-full items-center justify-center md:h-full">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="w-3/4 max-md:max-w-[20rem] md:w-[30rem]"
              src={msgIcon}
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex h-full w-full flex-col items-center gap-8 rounded-xl px-0 py-4 sm:px-3 sm:py-10"
          >
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email ID"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.textarea
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                rows={5}
                autoComplete="off"
                className="w-full resize-none rounded-none border-b border-color2 bg-transparent px-3 py-2 pl-3 text-color2 placeholder:text-color2/60 focus:outline-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>
            <button
              type="submit"
              className="h-[3.25rem] w-full max-w-[16rem] self-center rounded-xl bg-color2 px-4 text-center font-semibold tracking-wide text-color3 transition duration-200 hover:scale-[1.01] hover:bg-color2/80"
            >
             {status === "Sending..." ? "Sending..." : "Send it Now"}
            </button>
            <p className="text-color2 text-xs">{status}</p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};
"use client"

import { motion } from "framer-motion";
import SocialButton from "../components/navbar/layout/SocialButton";
import Github from "../../../public/github.svg";
import Instagram from "../../../public/instagram.svg";
import Mail from "../../../public/mail.svg";
import Linkedin from "../../../public/linkedin.svg";
import Link from "next/link";

const ContactHome = () => {
  return (
    <>
      <section
        className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] p-7 mb-4 gap-4"
        id="Home"
      >
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount:0.5}}
         transition={{delay:0.3,duration:0.5}}
         variants={{
          hidden:{opacity:0 ,x: -50},
          visible:{opacity:1 , x:0},
         }}
         className="h-[32rem] md:h-[34rem] lg:h-[25rem] rounded-3xl  flex flex-col gap-4 shadow-box colorBg">
          <h1 className="text-4xl text-white">
            Hi, I&apos;m Julian.
            <br />
            <span className="text-white">Front-end Developer</span>
          </h1>

          <p className="flex-1 subtitle font-medium text-[16px] text-zinc-400">
          My main focus in front-end development is directed towards creating exceptional visual experiences. I actively engage in enhancing the aesthetics and usability of the site.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <a
              href="https://drive.google.com/file/d/1HbXEJkmK4P_UsbioZDEIWOgXwX0_boIT/view?usp=sharing"
              className="bg-white text-center w-[70%] font-medium text-black py-3 px-12 rounded-full lg:w-auto hover:bg-black hover:text-white duration-300"
            >
              Contact me
            </a>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/julianvidela" target="_blank">
                <SocialButton bgColor="black">
                  <Github className="w-6 h-6" />
                </SocialButton>
              </Link>
              <Link href="https://instagram.com/julianvidela_?igshid=MzMyNGUyNmU2YQ==" target="_blank">
                <SocialButton bgColor="instagram">
                  <Instagram className="w-5 h-5" />
                </SocialButton>
              </Link>
              <Link href="mailto:julianvyd@gmail.com?subject=Offer%20Inquiry&body=Hi,%20how%20can%20I%20help%20you?" target="_blank">
                <SocialButton bgColor="twitter">
                  <Mail className="w-6 h-6" />
                </SocialButton>
              </Link>
              <Link href="https://www.linkedin.com/in/julian-videla-87857a253/" target="_blank">
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount:0.5}}
         transition={{delay:0.4,duration:0.5}}
         variants={{
          hidden:{opacity:0 ,x: 50},
          visible:{opacity:1 , x:0},
         }}

         className="h-[25rem] bg-[url('/stitch.jpg')]  bg-cover bg-center rounded-3xl shadow-box" />
      </section>
    </>
  );
};

export default ContactHome;

"use client"
import React from "react";
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
        className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4"
        id="Home"
      >
        <div className="h-[32rem] md:h-[34rem] lg:h-[30rem] rounded-3xl p-7 flex flex-col gap-4 shadow-box colorBg">
          <h1 className="text-4xl title">
            Hi, I&apos;m Julian.
            <br />
            <span className="text-white title">Front-end Developer</span>
          </h1>

          <p className="flex-1 subtitle font-medium text-lg text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            possimus accusantium magni fugiat nostrum ea!
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <a
              href="https://1drv.ms/b/s!Av0NuIn2vREOlGHPhCwlXrkk2ZdP?e=jhjpbM"
              className="bg-white text-center w-[70%] font-medium text-black py-3 px-12 rounded-full lg:w-auto hover:bg-black hover:text-white duration-300"
            >
              Contact me
            </a>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/julianvidela">
                <SocialButton bgColor="black">
                  <Github className="w-6 h-6" />
                </SocialButton>
              </Link>
              <Link href="https://instagram.com/julianvidela_?igshid=MzMyNGUyNmU2YQ==">
                <SocialButton bgColor="instagram">
                  <Instagram className="w-5 h-5" />
                </SocialButton>
              </Link>
              <Link href="mailto:julianvyd@gmail.com?subject=Offer%20Inquiry&body=Hi,%20how%20can%20I%20help%20you?">
                <SocialButton bgColor="twitter">
                  <Mail className="w-6 h-6" />
                </SocialButton>
              </Link>
              <Link href="https://www.linkedin.com/in/julian-videla-87857a253/">
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
        <motion.div className="h-[30rem] bg-[url('/stitch.jpg')] p-8 bg-cover bg-center rounded-3xl shadow-box" />
      </section>
    </>
  );
};

export default ContactHome;

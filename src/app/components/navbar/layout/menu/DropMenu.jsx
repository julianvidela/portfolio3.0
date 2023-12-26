"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { perspective, slideIn } from '../menu/anim';
import { links, footerLinks } from "./data";

const DropMenu = ({ handleLinkClick }) => {
  const handleClick = () => {
    // Cerrar el menú cuando se hace clic en un enlace
    handleLinkClick();
  };

  return (
    <div>
      <motion.div
        className="fixed left-0 top-0 w-[100%] h-[57rem] md:h-[53rem] bg-black p-8"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={perspective}
      >
        <div className="py-7 text-white flex flex-col mt-5 ml-8">
          {links.map((link, i) => (
            <div key={`link_${i}`} className="py-4 text-3xl md:text-6xl">
              <motion.div
                custom={i}
                variants={slideIn} 
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-265}
                  duration={600}
                  onClick={handleClick}
                >
                  {link.title}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 gap-5 text-white pt-24 ml-8 w-[58%] md:w-[30%] justify-around subtitle"
          variants={perspective} 
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {footerLinks.map((link, i) => (
            <motion.div
              key={`footerLink_${i}`}
              custom={i}
              variants={slideIn}  
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a href={link.to} smooth={true} offset={-270} duration={600} onClick={handleClick} target="_blank">
                {link.title}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DropMenu;

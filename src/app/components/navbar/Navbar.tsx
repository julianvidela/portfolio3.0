"use client";
import {Link} from "react-scroll";
import HamburgerMenu from "../navbar/layout/button/hamburgerMenu";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { linksNav } from "./data";
import DropMenu from "../navbar/layout/menu/DropMenu";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleNav = () => {
    setIsActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className="flex md:flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="h-5 w-5 rounded-full bg-portfolio" />
        <span className="text-sm font-semibold tracking-widest text-white">
          PORTFOLIO
        </span>
      </div>
      <motion.div className="hidden lg:flex gap-12 text-sm text-zinc-400 subtitle cursor-pointer">
        {linksNav.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.2 + index * 0.2,
            }}
          >
            <Link
              to={link.to}
              className="text-bold text-zinc-400 hover:text-white duration-500"
              smooth={true}
              offset={link.offset}
              duration={link.duration}
            >
              {link.text}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="lg:hidden">
        <div>
          <motion.div animate={isActive ? "open" : "closed"} initial="closed">
            <AnimatePresence>
              {isActive && <DropMenu handleLinkClick={closeMenu} />}
            </AnimatePresence>
          </motion.div>
          <HamburgerMenu
            isActive={isActive}
            toggleMenu={handleToggleNav}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

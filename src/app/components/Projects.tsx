"use client";

import React from "react";
import Github from "../../../public/github.svg"
import LinkUrl from "../../../public/link.svg"

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imgUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
}

const Project: React.FC<Props> = ({
  name = "block name",
  description = "this is good",
  imgUrl = "/project-1.png",
  bgColor = "#f9fafb",
  dark = false,
})=> {
  return (
    
    
      <div
        className={`h-[28.4rem] rounded-3xl overflow-hidden shadow-box ${ dark ? "dark" : ""}`}
        style={{ background: `${bgColor}` }}
       >
        <div
          className="h-full w-full p-7 py-5 duration-[500ms]  transition-all ease-in-out hover:scale-[1.01] flex justify-between bg-right-bottom  bg-[length:620px] bg-no-repeat "
          style={{ backgroundImage: `url('${imgUrl}')` }}
        >
          <div>
            <h2 className="from-neutral-300 text-lg subtitle dark:text-white ">
              {name}
            </h2>
            <p className="dark:text-zinc-300 text-md subtitle text-zinc-500">
              {description}
            </p>
          </div>
          <div className="flex gap-2">

          <div className=" h-12 w-12 rounded-full flex justify-center items-center cursor-pointer  bg-slate-100 border border-black-[0.1cm]">
          <Github className="w-5 h-5" />
          </div>
          <div className=" h-12 w-12 rounded-full flex justify-center items-center cursor-pointer  bg-slate-100 border border-black-[0.1cm]">
            <LinkUrl className=" w-4 h-4" />
          </div>
          </div>
        </div>
      </div>
    
  );
};
export default Project;


"use client";
import React from "react";

export default function About() {
  return (
    <div className="md:grid grid-col-3">
      <div className="my-2 text-black">
        <div className="border-b border-gray-300 my-2">
          <p className="py-4 text-3xl text-white">About</p>
        </div>
        <h2 className="py-4 text-2xl text-white subtitle">Who I Am</h2>
        <p className="subtitle text-[16px] text-zinc-400  ">
          I am a programmer living in Buenos Aires, Argentina, I am 24 years
          old, a football enthusiast. This year I started my second university
          degree, a Technical Degree in Software Development. While I work on
          personal and freelance projects, this year I would like to acquire
          backend skills to be able to create more solid and comprehensive
          projects, and to complement my intermediate English and Portuguese
          skills.
        </p>
      </div>
    </div>
  );
}

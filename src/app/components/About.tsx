"use client";
import React from "react";

export default function About() {
  return (
    <div className="md:grid grid-col-3">
      <div className="my-2 text-black">
        <div className="border-b border-gray-300 my-2">
          <p className="py-4 text-3xl title">About</p>
        </div>
        <h2 className="py-4 text-2xl text-white subtitle">Who I Am</h2>
        <p className="subtitle text-[15px] text-white">
          Hello! I&apos;m Julian, a programmer based in Buenos Aires,
          Argentina. Currently, I&apos;m deeply involved in artificial
          intelligence projects, applying my programming skills, particularly
          in React JS. Currently, I&apos;m immersed in individual projects
          within the customer service realm, where I implement cutting-edge
          technologies like React JS to enhance user experiences. My current
          project involves developing a chatbot aimed at revolutionizing
          customer interactions, streamlining processes, and providing
          efficient support.
        </p>
      </div>
    </div>
  );
}

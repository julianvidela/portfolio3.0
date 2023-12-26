"use client";
import React from "react";
import { tec } from "../stackSection/dataTec";

const Stack = () => {
  return (
    <div className="grid place-items-center grid-cols-2 md:grid-cols-5 gap-5">
      {tec.map(({ icon }, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <div className="h-full w-full p-4">{icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Stack;

"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";

import Toys from "./components/Toys";

const page = () => {
  return (
    <div className="w-full h-screen bg-[#F7F1EC] relative ">
      <div className="absolute px-10 py-4 top-1/2 left-[3vw] text-black z-[20] flex items-center justify-center  rounded-full bg-transparent  ">
        <h1
          className="text-lg
          bg-white rounded-full "
        >
          {" "}
          Premium Toys
        </h1>
      </div>
      <Canvas>
        <Toys />
      </Canvas>
    </div>
  );
};

export default page;

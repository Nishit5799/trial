import React from "react";

const Quality = () => {
  // Array of objects with name, top, left, top2, and left2 properties
  const qualities = [
    {
      name: "Premium Quality",
      top: "top-[55vh]",
      left: "left-[10vw]",
      top2: "sm:top-[45vh]",
      left2: "sm:left-[12vw]",
    },
    {
      name: "Action Figures",
      top: "top-[55vh]",
      left: "left-[65vw]",
      top2: "sm:top-[45vh]",
      left2: "sm:left-[80vw]",
    },
    {
      name: "Creative Toys",
      top: "top-[70vh]",
      left: "left-[10vw]",
      top2: "sm:top-[70vh]",
      left2: "sm:left-[30vw]",
    },
    {
      name: "Eco Friendly",
      top: "top-[70vh]",
      left: "left-[65vw]",
      top2: "sm:top-[70vh]",
      left2: "sm:left-[60vw]",
    },
  ];

  return (
    <>
      {qualities.map((quality, index) => (
        <div
          key={index}
          className={`absolute text-center  h-16 w-16 sm:h-32 sm:w-32 text-black z-[1] overflow-hidden rounded-full transition-all duration-500 ease-in-out   hover:bg-[#f7f1eca9] hover:shadow-[0px_0px_20px_10px_rgba(255,165,0,0.7)] ${quality.top} ${quality.left} ${quality.top2} ${quality.left2}`}
        >
          <h1 className="text-sm sm:text-[1.2vw] h-full w-full bg-red flex items-center justify-center bg-[#f7f1ecb4] ">
            {quality.name}
          </h1>
        </div>
      ))}
    </>
  );
};

export default Quality;

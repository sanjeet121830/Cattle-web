import React from "react";

function Question({ children }) {
  return (
    <div className="h-16 bg-pink-800 max-w-4xl mx-auto flex flex-row items-center justify-between px-4">
      <div className="text-white lg:text-2xl md:text-xl text-md font-sans">{children}</div>
      <div className="text-white text-5xl font-sans">+</div>
    </div>
  );
}

export default Question;

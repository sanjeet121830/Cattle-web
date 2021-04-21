import React from "react";

function input() {
  return (
    <div className="md:max-w-2xl lg:max-w-3xl mx-auto">
      <div class="md:inline-flex w-full">
        <input
          class="lg:h-16 md:h-13 h-12 w-full pl-2 text-md focus:outline-none"
          placeholder="Email Address"
        ></input>
        <button class="hidden md:h-13 md:w-80 md:text-3xl md:inline-flex md:items-center md:justify-center  bg-red-600 text-white">
          Get Started
          <svg
            class="h-12 pl-2"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div class="md:hidden text-center pt-12">
        <button class="md:h-14 h-10  w-70  text-2xl inline-flex  items-center justify-center  bg-red-600 text-white lg:px-6 md:px-5 px-4 rounded-md">
          Get Started
          <svg
            class="h-6 pl-2"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default input;

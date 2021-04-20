import React from "react";

function Main() {
  return (
    <div>
      <div class="bg-black h-screen">
        <div class="border-b-8 pb-14 border-gray-900 pt-8">
          <div class="flex flex-col lg:flex-row justify-between items-center pt-14 px-3 max-w-6xl mx-auto ">
            <div class="space-y-8 max-w-2xl  ">
              <h1 class="text-4xl text-center lg:text-left md:text-5xl lg:text-6xl text-white font-semibold">
                {" "}
                Enjoy on your TV.
              </h1>
              <h1 class="text-xl text-center md:text-2xl lg:text-3xl md:text-left text-white leading-7">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h1>
            </div>
            <div class="">
              <img
                class=" h-72  object-cover rounded-xl shadow-xl mt-16 md:mt-0"
                src="https://stat2.bollywoodhungama.in/wp-content/uploads/2018/07/Shakeela-2.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

import React from "react";

function Unlimited() {
  return (
    <>
      <div class="bg-black h-full">
        <div class="border-b-8 pb-14 border-gray-900">
          <div class="flex flex-col lg:flex-row justify-between items-center pt-14 px-3 max-w-6xl mx-auto ">
            <div class="space-y-8 max-w-2xl  ">
              <h1 class="text-4xl text-center lg:text-left md:text-5xl lg:text-6xl text-white font-semibold">
                {" "}
                Watch everywhere.
              </h1>
              <h1 class="text-xl text-center md:text-2xl lg:text-3xl md:text-left text-white leading-7">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </h1>
            </div>
            <div class="">
              <img
                class=" h-80   object-cover rounded-xl shadow-xl mt-16 md:mt-0"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Unlimited;

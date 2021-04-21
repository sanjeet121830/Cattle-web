import React from "react";

function Main() {
  return (
    <div>
      <div class="bg-black">
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
        <div class="border-b-8 pb-14 border-gray-900">
          <div class="w-full text-center md:text-left flex flex-col-reverse md:flex-row items-center justify-between  lg:max-w-7xl mx-auto">
            <div class="relative h-96 w-auto">
              <img
                class=" h-96 w-auto object-cover mb-28 md:mb-0"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              ></img>
              <div class="absolute lg:left-20 left-12 bottom-8 w-80   h-24 rounded bg-black border-2 border-gray-700">
                <div class="flex flex-row justify-between items-center">
                  <div class="inline-flex items-center">
                    <img
                      class="h-20 w-16 p-1"
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    />
                    <div class="ml-2">
                      <div class="text-white font-semibold">
                        Stranger Things
                      </div>
                      <div class="text-blue-400">Downloading...</div>
                    </div>
                  </div>
                  <div class="text-white mr-3">
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class=" max-w-lg md:max-w-2xl mx-auto md:ml-24 mt-8 md:mt-0 ">
              <div class="space-y-2">
                <div class="text-4xl md:text-5xl text-white leading-12 font-bold">
                  {" "}
                  Download your shows to watch offline.
                </div>
                <div class="text-2xl md:text-3xl text-white leading-relaxed">
                  {" "}
                  Save your favourites easily and always have something to
                  watch.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

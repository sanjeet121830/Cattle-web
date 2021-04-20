import React from "react";

function HomeHero() {
  return (
    <div>
      <div className="border-b-8 border-gray-900">
        <img
          class="h-screen w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/60dd20cf-7213-48a1-b253-6484d62d96a8/IN-en-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
        <div class="absolute inset-0 bg-black  bg-opacity-60">
          <div class="flex flex-row items-center justify-between px-7 mx-auto pt-8">
            <div>
              <img
                class="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
              ></img>
            </div>
            <div>
              <div class="space-x-3 md:space-x-4 lg:space-x-6 flex flex-row items-center">
                <button class=" inline-flex items-center px-5 py-2 bg-transparent border text-white rounded">
                  English
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button class="px-6 py-2 bg-red-600 rounded text-white">
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 top-1/3">
            <div class="space-y-4 max-w-md md:max-w-3xl mx-auto">
              <h1 class="text-4xl md:text-6xl text-white text-center font-semibold">
                Unlimited movies, TV shows and more.
              </h1>
              <h1 class="text-2xl md:text-3xl text-white text-center">
                Watch anywhere. Cancel anytime.
              </h1>
              <h1 class="text-md md:text-xl text-white text-center">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h1>
              <div class="md:inline-flex w-full">
                <input
                  class="h-16 w-full pl-2 text-md focus:outline-none"
                  placeholder="Email Address"
                ></input>
                <button class="hidden md:h-16 md:w-80 md:text-3xl md:inline-flex md:items-center md:justify-center  bg-red-600 text-white">
                  Get Started
                  <svg
                    class="h-8 pl-2"
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
                <button class="h-14  w-70  text-2xl inline-flex  items-center justify-center  bg-red-600 text-white px-6 rounded-md">
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
          </div>
        </div>
      </div>      
    </div>
  );
}

export default HomeHero;

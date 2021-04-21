import React from "react";
import {Input} from './elements'
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
                class="lg:h-12 md:h-8 h-6"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
              ></img>
            </div>
            <div>
              <div class="space-x-3 md:space-x-4 lg:space-x-6 flex flex-row items-center">
                <button class=" inline-flex items-center px-2 lg:px-5 lg:py-2 md:py-1 bg-transparent border text-white rounded">
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
                <button class="lg:px-6 lg:py-2 md:px-4 md:py-1 px-2 text-center bg-red-600 border border-red-600 rounded text-white">
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 lg:top-1/3 top-1/4">
            <div class="space-y-4 max-w-sm md:max-w-3xl mx-auto">
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
             <Input/>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default HomeHero;

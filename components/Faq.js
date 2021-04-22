import React from "react";
import { Input, Question } from "./elements";
function Faq() {
  return (
    <div className="bg-black h-full pt-12 border-b-8 pb-14 border-gray-900">
      <h1 className=" text-white font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center pb-16">
        Frequently Asked Questions
      </h1>
      <div className="space-y-3">
        <Question>What is Netflix?</Question>
        <Question>How much does Netflix cost?</Question>
        <Question>Where can i watch?</Question>
        <Question>How do i cancel?</Question>
        <Question>What can i watch on Netflix?</Question>
      </div>
      <h1 className="text-white text-center text-xl mx-auto max-w-xs sm:max-w-lg md:max-w-md xl:max-w-2xl mt-16 mb-6">
        Ready to watch? Enter your email to create or restart your membership.
      </h1>
      <div className="lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-sm mx-auto">
        <Input />
      </div>
    </div>
  );
}

export default Faq;

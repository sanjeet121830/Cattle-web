import React from "react";
import {Question} from './elements'
function Faq() {
  return (
    <div className="bg-black h-full pt-8 pb-48">
      <h1 className=" text-white font-semibold text-6xl text-center pb-16">
        Frequently Asked Questions
      </h1>
      <div className="space-y-3">
       <Question>
           What is Netflix?
       </Question>
       <Question>
           How much does Netflix cost?
       </Question>
       <Question>
           Where can i watch?
       </Question>
       <Question>
           How do i cancel?
       </Question>
       <Question>
           What can i watch on Netflix?
       </Question>
      </div>
    </div>
  );
}

export default Faq;

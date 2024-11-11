import React from "react";

function About() {
  return (
    <>
      <main className="md:text-left text-center lg:w-[80%] md:mx-12 p-3 m-auto ">
        <h1 className="text-[16px] text-[#A34AE3] ">ABOUT JOBBOARD</h1>
        <p className=" md:mx-0     lg:font-medium lg:leading-[62.4px] md:text-left mt-[30px] md:mt-[2px]  text-[#FFFFFF] text-[29px] font-medium leading-[39.2px] md:text-[35px] text-center">
          One step to your{" "}
          <span className="text-[#848484]"> future start here </span>
        </p>
        <div className="mx-[20px] md:mx-0 md:flex items-center mt-[29px] font-[400] justify-between">
          <p className="text-[12px] text-white leading-[27px] md:text-[16px] md:w-[80%] lg:w-[50%]">
            Receive a customized salary approximation based on your profile.
            Access reviews for more than 600,000 companies worldwide.
          </p>
          <button className="bg-white w-[142.36px] mt-8 rounded-full px-2 py-2 text-[13px]">
            learn more
          </button>
        </div>
      </main>
    </>
  );
}

export default About;

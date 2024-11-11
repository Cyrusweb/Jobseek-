import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import banner from "../../assets/banner (1).svg";

function Hero() {
  return (
    <>
      <main className="md:mt-[90px] px-4">
        <article className="md:flex md:mt-[3rem] mt-[3rem] justify-around md:m-[3rem] flex-row-reverse">
          <figure>
            <img
              src={banner}
              alt="banner"
              className="w-[330px] mt-[14px] md:w-[569.89px] px-[30px] pt-[-6px]"
            />
          </figure>
          <motion.section
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="border-[1px] lg:w-[60%] pr-9 mt-[45.3px] justify-center border-[#484848] items-center rounded-full flex">
              <article className="text-white m-auto text-[12px] mr-[21px] py-[10px] font-[400] leading-[19.2px]">
                The best job seekers
              </article>
              <p className="border-[#484848] flex items-center gap-2 border-l-2 pl-[10px] explore">
                Explore
                <FaArrowRight />
              </p>
            </div>
            <div>
              <p className="md:mx-0 lg:w-[491.39px] lg:text-[52px] lg:font-medium lg:leading-[62.4px] md:text-left mt-[30px] text-[#FFFFFF] text-[37px] font-medium leading-[39.2px] text-center">
                Find your{" "}
                <span className="text-[#848484]">
                  dream <br />
                  job with jobBoard
                </span>
              </p>
            </div>
            <p className="text-[14px] md:text-[18px] lg:w-[366.72px] font-[300] md:text-left leading-[27px] text-center mt-[27px] text-white">
              Growing a business means having the right people in your team.
            </p>

            {/* Input section */}
            <div className="my-[15px] mt-[58px] w-full relative">
              <article className="border-[1px] px-4 py-3 border-[#27213C] flex items-center rounded-full">
                <CiSearch className="text-white relative" size={20} />
                <input
                  type="text"
                  className="bg-transparent focus:outline-none pl-1 placeholder:text-[16px] text-white"
                  placeholder="job title"
                />
                <button className="bg-white ml-16 py-2 absolute right-[1rem] gap-2 px-4 flex items-center rounded-full">
                  <p className="font-[400] text-[10px]">Find jobs</p>
                  <FaArrowRight className="text-[#A34AE3]" />
                </button>
              </article>
            </div>
          </motion.section>
        </article>
      </main>
    </>
  );
}

export default Hero;

import React, { useEffect } from "react";
import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";
import location from "../../assets/location.svg";
import price from "../../assets/price.svg";
import remote from "../../assets/remote.svg";
import { motion } from "framer-motion";

// useEffect
function DisCover() {
  return (
    <>
      <main>
        <article className="text-center mt-10 ">
          <h1 className="text-purple-500 text-center font-semibold">
            Job Vacancy
          </h1>
          <h1 className="font-medium md:text-[36px] text-[26px] text-center text-white">
            Discover the best job
          </h1>
          <div className="mx-[20px]">
            <p className="text-[12px] text-white    md:text-[16px]   lg:w-[40%] md:w-[60%] m-auto">
              Start career with the best company in the world, we ensures you to
              get the best job possible.
            </p>
          </div>

          <div className="border-[#2D2646] mt-10  w-[70%]  md:w-[28%] lg:w-[15%] m-auto text-white border-[1px] rounded-lg flex justify-center gap-x-12 p-[16px] ">
            <div>
              <div className="bg-[#1B1A2E] flex gap-1 w-full md:text-[16px] text-[18px]  rounded-lg p-2 border-[#2D2646] border-[1px]">
                <p> popular </p>
              </div>
            </div>
            <div>
              <div className="border-[#2D2646] md:text-[16px]   w-full text-[18px]   border-[1px] p-2 rounded-lg">
                latest
              </div>
            </div>
          </div>
        </article>
        {/* section */}
        <section className=" md:mx-12 p-3 md:m-auto m-[0.27rem]  ">
          <footer className=" md:grid gap-x-4 grid-cols-2 justify-center ">
            <motion.main className=" border-[1px] p-4 mt-10 border-[#2D2646] rounded-xl">
              <div className="flex items-center justify-between  ">
                <div className="flex items-center gap-2">
                  <figure>
                    <img src={one} alt="one" />
                  </figure>
                  <div>
                    <p className="text-[#ffff] text-[16px]">
                      operating manegment
                    </p>
                    <p className="text-[#848484]">pipe</p>
                  </div>
                </div>
                <div>
                  <button className="bg-white text-black w-[78.47px] rounded-full py-1 text-[16px]">
                    Apply
                  </button>
                </div>
              </div>
              <article>
                <p className="text-[#848484] border-b-[1px] leading-[24px]  text-[13px]  border-[#4d4f55] pb-4 mt-4">
                  You will be responsible for overseeing and optimizing various
                  operational processes to enhance productivity, efficiency, and
                  profitability.
                </p>
                <footer className="flex gap-6 items-center mt-8 text-white">
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={location} alt="" />
                    </figure>
                    <p> Nigeria</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={remote} alt="" />
                    </figure>
                    <p> Remote</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={price} alt="" />
                    </figure>
                    <p> $50k</p>
                  </div>
                </footer>
              </article>
            </motion.main>
            <motion.main className=" border-[1px] p-4 mt-10 border-[#2D2646] rounded-xl">
              <div className="flex items-center justify-between  ">
                <div className="flex items-center gap-2">
                  <figure>
                    <img src={two} alt="two" />
                  </figure>
                  <div>
                    <p className="text-[#ffff] text-[16px]">
                      Senior Accountant
                    </p>
                    <p className="text-[#848484]">pipe</p>
                  </div>
                </div>
                <div>
                  <button className="bg-white text-black w-[78.47px] rounded-full py-1 text-[16px]">
                    Apply
                  </button>
                </div>
              </div>
              <article>
                <p className="text-[#848484] border-b-[1px] ] leading-[24px] text-[13px] border-[#4d4f55] pb-4 mt-4">
                  You will handle various financial tasks and play a key role in
                  financial reporting, analysis, and decision-making processes.
                </p>
                <footer className="flex gap-6 items-center mt-8 text-white">
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={location} alt="" />
                    </figure>
                    <p> paris</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={remote} alt="" />
                    </figure>

                    <p> Remote</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={price} alt="" />
                    </figure>

                    <p> $50k</p>
                  </div>
                </footer>
              </article>
            </motion.main>

            <motion.main className=" border-[1px] p-4 mt-10 border-[#2D2646] rounded-xl">
              <div className="flex items-center justify-between  ">
                <div className="flex items-center gap-2">
                  <figure>
                    <img src={three} alt="three" />
                  </figure>
                  <div>
                    <p className="text-[#ffff] text-[16px]">Motion Designer</p>
                    <p className="text-[#848484]">pipe</p>
                  </div>
                </div>
                <div>
                  <button className="bg-white text-black w-[78.47px] rounded-full py-1 text-[16px]">
                    Apply
                  </button>
                </div>
              </div>
              <article>
                <p className="text-[#848484] border-b-[1px]  leading-[24px] text-[13px]  border-[#4d4f55] pb-4 mt-4">
                  You will handle various financial tasks and play a key role in
                  financial reporting, analysis, and decision-making processes.
                </p>
                <footer className="flex gap-6 items-center mt-8 text-white">
                  <div className="flex items-center gap-2">
                    <img src={location} alt="" />
                    <p> lagos</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={remote} alt="" />
                    </figure>

                    <p> Remote</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={price} alt="" />
                    </figure>

                    <p> $50k-$60k</p>
                  </div>
                </footer>
              </article>
            </motion.main>
            <motion.main className=" border-[1px] p-4 mt-10 border-[#2D2646] rounded-xl">
              <div className="flex items-center justify-between  ">
                <div className="flex items-center gap-2">
                  <figure>
                    <img src={one} alt="one" />
                  </figure>
                  <div>
                    <p className="text-[#ffff] text-[16px]">Middle Engineer</p>
                    <p className="text-[#848484]">pipe</p>
                  </div>
                </div>
                <div>
                  <button className="bg-white text-black w-[78.47px] rounded-full py-1 text-[16px]">
                    Apply
                  </button>
                </div>
              </div>
              <article>
                <p className="text-[#848484] text-[13px]   leading-[24px]  border-b-[1px] border-[#4d4f55] pb-4 mt-4">
                  You will be responsible for overseeing and optimizing various
                  operational processes to enhance productivity, efficiency, and
                  profitability.
                </p>
                <footer className="flex gap-6 items-center mt-8 text-white">
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={location} alt="" />
                    </figure>
                    <p> lodona</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={remote} alt="" />
                    </figure>
                    <p> Remote</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={price} alt="" />
                    </figure>
                    <p> $50k</p>
                  </div>
                </footer>
              </article>
            </motion.main>
          </footer>
        </section>
      </main>
    </>
  );
}

export default DisCover;

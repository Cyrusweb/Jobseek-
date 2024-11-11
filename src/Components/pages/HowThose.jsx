import React from "react";

function HowThose() {
  return (
    <>
      <main className="  md:mx-12 mt-[5rem]  md:mt-[2rem] md:m-auto m-3 ">
        <section>
          <h1 className="text-white text-center text-[20px]">
            HOW DOES IT WORKS
          </h1>
          <div className="border-[#2D2646] mt-4 w-[94%] md:w-[40%] lg:w-[22%] m-auto text-white border-[1px] rounded-lg flex justify-center gap-x-12 p-[18px] ">
            <div>
              <div className="bg-[#1B1A2E] flex gap-1 w-full md:text-[16px] text-[18px]  rounded-lg p-2 border-[#2D2646] border-[1px]">
                <p> Job </p>
                <p>seeker</p>
              </div>
            </div>
            <div>
              <div className="border-[#2D2646] md:text-[16px]   w-full text-[18px]   border-[1px] p-2 rounded-lg">
                Employee
              </div>
            </div>
          </div>
        </section>

        <main className="flex gap-3  p-4 overflow-x-auto ">
          {/* <div className="flex space-x-6 px-6"> */}
          <article className="bg-[#13151A]  flex-shrink-0  lg:w-[30%]  md:w-[50%]  w-[90%]  p-8 rounded-3xl  items-center">
            <div className="text-white flex gap-8 items-center justify-between">
              <div>
                <button className="btn rounded-full w-12 h-12">1</button>
              </div>
              <div>
                <h1 className="text-[26px] font-bold">Job searchs</h1>
              </div>
            </div>
            <div className="text-white mt-8">
              <p className="leading-[21px] font-medium text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                cupiditate sequi praesentium ducimus explicabo?
              </p>
              <button className="bg-white w-[142.36px] text-black font=bold mt-8 rounded-full px-2 py-2 text-[18px]">
                Apply Now
              </button>
            </div>
          </article>

          <article className="bg-[#13151A] flex-shrink-0 lg:w-[30%]  md:w-[50%]   w-[100%] p-8 rounded-3xl  items-center">
            <div className="text-white flex items-center gap-8 justify-between">
              <div>
                <button className="btn rounded-full w-12 h-12">2</button>
              </div>
              <div>
                <h1 className="text-[26px] font-bold">Salary estimate </h1>
              </div>
            </div>
            <div className="text-white mt-12">
              <p className="leading-[21px] font-medium text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                cupiditate sequi praesentium ducimus explicabo?
              </p>
            </div>
          </article>

          <article className="bg-[#13151A] flex-shrink-0 lg:w-[30%]  md:w-[50%]  w-[90%] p-8 rounded-3xl ">
            <div className="text-white flex items-center  gap-8 justify-between">
              <div>
                <button className="btn rounded-full w-12 h-12">3</button>
              </div>
              <div>
                <h1 className="text-[26px] font-bold">Read Review</h1>
              </div>
            </div>
            <div className="text-white mt-8">
              <p className="leading-[21px] font-medium text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                cupiditate sequi praesentium ducimus explicabo?
              </p>
            </div>
          </article>

          <article className="bg-[#13151A] flex-shrink-0  lg:w-[30%] md:w-[50%]  w-[90%] p-8 rounded-3xl  items-center">
            <div className="text-white flex items-center  gap-8  justify-between">
              <div>
                <button className="btn rounded-full w-12 h-12">4</button>
              </div>
              <div>
                <h1 className="text-[26px] font-bold">Job searchs</h1>
              </div>
            </div>
            <div className="text-white mt-8">
              <p className="leading-[21px]  font-medium text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                cupiditate sequi praesentium ducimus explicabo?
              </p>
            </div>
          </article>
          {/* </div> */}
        </main>
      </main>
    </>
  );
}

export default HowThose;

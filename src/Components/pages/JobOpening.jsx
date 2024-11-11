import React from "react";
import up from "../../assets/upload.svg";
import pro_2 from "../../assets/pro_2.svg";
function JobOpening() {
  return (
    <>
      <main
        className={`bg-[#121318] backdrop-blur-[20px] rounded-lg md:grid grid-cols-2 justify-center md:mx-[3.4rem] p-3 md:m-auto m-3  border-[#2D2646]  border-[1px] `}
      >
        <form action="#">
          <article className="bg-[#1F1B30] p-4 rounded-lg">
            <div className=" flex justify-between items-center text-white">
              <div className="flex  items-center gap-2">
                <figure>
                  <img
                    src={pro_2}
                    alt="profile"
                    className=" border-[1px] border-[#322E4C] p-2 rounded-lg"
                  />
                </figure>
                <p className="text-[10px]">olivia forsin</p>
              </div>
              <div>
                <button className="bg-white text-black flex gap-2 items-center px-2  rounded-full py-1 text-[16px]">
                  <figure>
                    <img src={up} alt="up" />
                  </figure>
                  <div className="flex gap-1">
                    <p className="text-[10px]"> upload </p>
                    <p className="text-[10px]"> profile</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Full name"
                className="placeholder:text-[#848484] placeholder:text-[13px] text-white bg-[#1D1A2B] w-full py-2 px-4 rounded-lg border border-[#848484] focus:outline-none focus:border-[#848484]"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Email"
                className="placeholder:text-[#848484] placeholder:text-[13px] text-white bg-[#1D1A2B] w-full py-2 px-4 rounded-lg border border-[#848484] focus:outline-none focus:border-[#848484]"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Position"
                className="placeholder:text-[#848484] placeholder:text-[13px] text-white bg-[#1D1A2B] w-full py-2 px-4 rounded-lg border border-[#848484] focus:outline-none focus:border-[#848484]"
              />
            </div>
          </article>
        </form>
        <section className="md:pl-8 text-white">
          <p className="text-purple-600 my-4">01</p>
          <h1 className="text-[23px] mb-4">Discover Job Openings</h1>
          <p className="md:text-[15px leading-[27px] text-[12px]">
            Start by searching for job openings using our comprehensive search
            engine. Simply enter relevant keywords, location, and other criteria
            to find the positions that match your interests and qualifications.
          </p>
        </section>
      </main>
    </>
  );
}

export default JobOpening;

//

import React from "react";

function FooterHero() {
  return (
    <>
      <main className="bg-[#1B1527] rounded-lg border-[#2D2646]  border-[1px]  justify-center md:mx-[3.4rem] p-3 md:m-auto m-3">
        <article className=" text-center p-8 text-white">
          <h1 className="md:text-[40px]  text-[20px]">
            Job-search smarter? <br />{" "}
            <span className="text-purple-700"> We make it easy. </span>
            <div className="flex justify-center mt-4">
              <button className="bg-white text-black flex gap-2 items-center px-2  rounded-full py-1 text-[13px]">
                Get Started for Free
              </button>
            </div>
          </h1>
        </article>
      </main>
    </>
  );
}

export default FooterHero;

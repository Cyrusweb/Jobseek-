// WhatWeDo.js
import Marquee from "react-fast-marquee";
import ListLeft from "../Json/ListLeft.json";

function WhatWeDo() {
  // console.log(ListLeft.length);
  const middleIndex = Math.floor(ListLeft.length / 2);
  console.log(middleIndex);
  return (
    <>
      <main className=" w-full overflow-hidden">
        <article className="w-full p-4 overflow-clip ">
          {/* First Marquee */}
          <div className="marquee-container mb-4 overflow-hidden left">
            <Marquee
              speed={30}
              direction="right"
              pauseOnHover={true}
              gradient={true}
              gradientWidth={50}
              gradientColor="black"
            >
              <ul className=" flex items-center space-x-4  ">
                {ListLeft.slice(0, middleIndex).map((job) => (
                  <li key={job.id} className="pb-2">
                    <a
                      href={`#job-${job.id}`}
                      className="text-white  text-[13px] "
                    >
                      {job.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Marquee>
          </div>

          {/* Second Marquee - */}
          <div className="marquee-container_2 mb-4 px-2">
            <Marquee
              speed={30}
              direction="left"
              pauseOnHover={true}
              gradient={true}
              gradientWidth={50}
              gradientColor="black"
            >
              <ul className=" flex flex-row-reverse items-center space-x-4">
                {ListLeft.slice(middleIndex).map((job) => (
                  <li key={job.id}>
                    <a
                      href={`#job-${job.id}`}
                      className="text-white  text-[13px] "
                    >
                      {job.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Marquee>
          </div>

          <div className="md:hidden flex justify-center mt-8">
            <button className="bg-white w-[142.36px] rounded-full px-2 py-2 text-[13px]">
              View all
            </button>
          </div>
        </article>
      </main>
    </>
  );
}

export default WhatWeDo;

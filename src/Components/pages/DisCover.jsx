import React from "react";
import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";
import location from "../../assets/location.svg";
import price from "../../assets/price.svg";
import remote from "../../assets/remote.svg";
import { motion } from "framer-motion";

function DisCover() {
  // Define the job listings data
  const jobs = [
    {
      id: 1,
      title: "Operating Management",
      icon: one,
      description:
        "You will be responsible for overseeing and optimizing various operational processes to enhance productivity, efficiency, and profitability.",
      location: "Nigeria",
      type: "Remote",
      salary: "$50k",
      cartigory: "pipe",
    },
    {
      id: 2,
      title: "Senior Accountant",
      icon: two,
      description:
        "You will handle various financial tasks and play a key role in financial reporting, analysis, and decision-making processes.",
      location: "Paris",
      type: "Remote",
      salary: "$50k",
      cartigory: "Colored",
    },
    {
      id: 3,
      title: "Motion Designer",
      icon: three,
      description:
        "You will handle various financial tasks and play a key role in financial reporting, analysis, and decision-making processes.",
      location: "Lagos",
      type: "Remote",
      salary: "$50k-$60k",
      cartigory: "Greenly",
    },
    {
      id: 4,
      title: "Middle Engineer",
      icon: one,
      description:
        "You will be responsible for overseeing and optimizing various operational processes to enhance productivity, efficiency, and profitability.",
      location: "London",
      type: "Remote",
      salary: "$50k",
      cartigory: "pipe",
    },
  ];

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
            <p className="text-[12px] text-white md:text-[16px] lg:w-[40%] md:w-[60%] m-auto">
              Start career with the best company in the world, we ensure you get
              the best job possible.
            </p>
          </div>

          <div className="border-[#2D2646] mt-10 w-[70%] md:w-[28%] lg:w-[15%] m-auto text-white border-[1px] rounded-lg flex justify-center gap-x-12 p-[16px] ">
            <div>
              <div className="bg-[#1B1A2E] flex gap-1 w-full md:text-[16px] text-[18px] rounded-lg p-2 border-[#2D2646] border-[1px]">
                <p>Popular</p>
              </div>
            </div>
            <div>
              <div className="border-[#2D2646] md:text-[16px] w-full text-[18px] border-[1px] p-2 rounded-lg">
                Latest
              </div>
            </div>
          </div>
        </article>

        {/* Job Listings Section */}
        <section className="md:mx-12 p-3 md:m-auto m-[0.27rem]">
          <footer className="md:grid gap-x-4 grid-cols-2 justify-center">
            {jobs.map((job) => (
              <motion.main
                key={job.id}
                className="border-[1px] p-4 mt-10 border-[#2D2646] rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <figure>
                      <img src={job.icon} alt={job.title} />
                    </figure>
                    <div>
                      <p className="text-[#ffff] text-[16px]">{job.title}</p>
                      <p className="text-[#848484]">{job.cartigory}</p>
                    </div>
                  </div>
                  <div>
                    <button className="bg-white text-black w-[78.47px] rounded-full py-1 text-[16px]">
                      Apply
                    </button>
                  </div>
                </div>
                <article>
                  <p className="text-[#848484] border-b-[1px] leading-[24px] text-[13px] border-[#4d4f55] pb-4 mt-4">
                    {job.description}
                  </p>
                  <footer className="flex gap-6 items-center mt-8 text-white">
                    <div className="flex items-center gap-2">
                      <figure>
                        <img src={location} alt="Location" />
                      </figure>
                      <p>{job.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <figure>
                        <img src={remote} alt="Remote" />
                      </figure>
                      <p>{job.type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <figure>
                        <img src={price} alt="Salary" />
                      </figure>
                      <p>{job.salary}</p>
                    </div>
                  </footer>
                </article>
              </motion.main>
            ))}
          </footer>
        </section>
      </main>
    </>
  );
}

export default DisCover;

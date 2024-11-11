// JobList.js
import React from "react";
import location from "../../assets/location.svg";
import price from "../../assets/price.svg";
import remote from "../../assets/remote.svg";
import ListLeft from ".././Json/ListLeft.json";

function JobList() {
  return (
    <main className=" mt-4  md:mx-12 p-3 md:m-auto m-[1rem] border-[1px] rounded-lg md:p-4 border-[#2D2646]">
      <section>
        <div className="flex items-center justify-between border-b-[2px] pb-3 border-[#202125]">
          <p className="text-[#848484]">Jobs</p>
          <p className="text-white">All jobs</p>
        </div>

        {/* Render job cards dynamically */}
        <section className="md:grid grid-cols-2 gap-x-2 overflow-y-auto h-[60vh] ">
          {ListLeft.map((job) => (
            <div
              key={job.id}
              id={`job-${job.id}`}
              className="jobs text-white border-[1px] border-[#2D2646] flex flex-col gap-3 mt-[20px] rounded-lg p-2"
            >
              <main className="md:flex items-center justify-between">
                <article>
                  <h5>{job.title}</h5>
                  <div className="md:flex gap-4 mt-2 items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src={location}
                        alt="logo_location"
                        className="w-[16px] h-[16px]"
                      />
                      <p className="truncate">{job.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={remote}
                        alt="logo_remote"
                        className="w-[16px] h-[16px]"
                      />
                      <p>{job.workType}</p>
                    </div>
                  </div>
                </article>
                <div className="price flex md:block items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={price}
                      alt="logo_price"
                      className="w-[16px] h-[16px]"
                    />
                    <p>{job.price}</p>
                  </div>
                  <button className="bg-white text-black w-[78.47px] rounded-full py-1 text-[16px]">
                    Apply
                  </button>
                </div>
              </main>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default JobList;

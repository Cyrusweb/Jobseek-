const StartJourney = () => {
  return (
    <div className="max-w-[1200px] mb-[150px] w-full flex justify-center items-center ">
      <div className="startJourneyCard max-w-[1000px] w-full rounded-2xl px-3 py-9 flex justify-center items-center ">
        <div className="max-w-[700px] text-center w-full text-white flex flex-col items-center gap-9 ">
          <h1 className="md:text-5xl text-[24px] font-medium ">
            Start Your Freelancing Journey with Job Seek
          </h1>
          <p>
            At Job Seek, we’re redefining freelancing by blending security with
            flexibility. Join a vibrant network of talented freelancers and
            innovative clients, and take advantage of seamless crypto payments,
            real-time collaboration, and global job opportunities
          </p>
          <button className=" w-fit offeringCardBG rounded-3xl ">
            <h1 className="bg-black w-fit px-9 py-3 rounded-3xl ">
              Get Started
            </h1>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;

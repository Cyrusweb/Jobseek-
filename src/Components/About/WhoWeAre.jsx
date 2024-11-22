const WhoWeAre = () => {
  return (
    <div className="border-b max-w-[1200px] border-white border-solid py-5 pb-16 w-full">
      <h1 className="textGradient hidden lg:flex"> Vacancies</h1>
      <div className="flex flex-col lg:flex-row lg:mt-14 justify-between gap-6 items-center">
        <div className="lg:w-1/2 w-full  flex item-center ">
          <h1 className="lg:text-left text-center text-4xl md:text-6xl w-full font-medium text-white  ">
            Who We Are
          </h1>
        </div>
        <div className="lg:w-1/2 w-full">
          {" "}
          <p className="md:text-lg  w-full text-center text-white leading-7 ">
            We are an innovative online marketplace web application designed to
            facilitate secure and transparent transactions between individuals
            seeking services and those offering them. Our platform aims to
            streamline the process of finding and delivering services while
            ensuring a high level of user satisfaction and financial security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

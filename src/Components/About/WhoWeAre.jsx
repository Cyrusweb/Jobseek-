const WhoWeAre = () => {
  return (
    <div className="border-b max-w-[1200px] border-white border-solid py-5 pb-16 w-full">
      <h1 className="textGradient"> Vacancies</h1>
      <div className="flex mt-14 justify-between gap-6 items-center">
        <div className="w-1/2 flex item-center ">
          <h1 className="text-left text-6xl font-medium text-white  ">
            Who We Are
          </h1>
        </div>
        <div className="w-1/2">
          {" "}
          <p className="text-lg text-white leading-7 ">
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

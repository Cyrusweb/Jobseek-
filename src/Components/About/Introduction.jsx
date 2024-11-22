import IntroductionCard from "./IntroductionCard";

const IntroductionCardContent = [
  {
    img: "Mission",
    heading: "Mission",
    subText:
      "To empower individuals and businesses by providing a trusted, decentralized platform that transforms how freelancing works in a digital economy.",
    color: "#F68F57",
  },
  {
    img: "Mission",
    heading: "Vision",
    subText:
      "To be the world’s most secure and trusted freelancing platform that integrates cryptocurrency, enabling freelancers and clients worldwide to connect and thrive",
    color: "#F65768",
  },
  {
    img: "CoreValues",
    heading: "Core Values",
    subText:
      "We embrace the latest technologies to simplify freelancing, ensuring our platform remains at the cutting edge of digital payments and user experience.",
    color: "#F6F4FF",
  },
];

const Introduction = () => {
  return (
    <div className="max-w-[1200px] w-full flex items-center justify-center flex-col md:gap-7 gap-4 text-white ">
      <div className="flex gap-2 items-center justify-center ">
        <div className="w-3 btn h-3 rounded-full "></div>
        <h1 className="textGradient text-center ">Who we are</h1>
      </div>

      <h2 className="md:text-[30px] text-[24px] text-center  font-medium">
        Brief introduction to <span className="textGradient">Job Seek</span>{" "}
      </h2>
      <div className="flex justify-center w-full items-center">
        <p className="max-w-[730px] text-center w-full text-base ">
          Job Seek is an innovative freelance platform that connects clients and
          freelancers through the power of cryptocurrency. Designed for a
          digital-first world, Job Seek provides secure, fast, and borderless
          payments, allowing freelancers to get paid in crypto and businesses to
          access a global pool of talent.
        </p>
      </div>

      <div className="flex mt-[100px] items-start w-full flex-wrap justify-center gap-y-16  gap-x-7 ">
        {IntroductionCardContent.map((content, index) => (
          <IntroductionCard key={index} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Introduction;

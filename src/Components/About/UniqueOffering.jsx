import OfferingCard from "./OfferingCard";

const UniqueOffering = () => {
  const OfferingCardContent = [
    {
      img: "cryptoPayment",
      heading: "Secure Crypto Payment",
      subText:
        "Freelancers can connect popular crypto wallets (like MetaMask and Coinbase) directly to their profiles, enabling easy, secure payments.",
    },
    {
      img: "jobSearch",
      heading: "Global Job Opportunities",
      subText:
        "Job Seek hosts a wide variety of jobs across industries and skills, from short-term gigs to long-term contracts, enabling freelancers to find projects.",
    },
    {
      img: "communication",
      heading: "Real-Time Communication",
      subText:
        "Our integrated chat system allows clients and freelancers to communicate in real-time, making project discussions, status updates, and clarifications easy.",
    },
  ];

  return (
    <div className="max-w-[1200px] mt-[70px] w-full flex items-center justify-center flex-col gap-7 text-white ">
      <div className="flex gap-2 items-center justify-center ">
        <div className="w-3 btn h-3 rounded-full "></div>
        <h1 className="textGradient text-center ">Unique Offering</h1>
      </div>

      <h2 className="text-[30px] text-center capitalize font-medium">
        Why Choose Job Seek?
      </h2>
      <div className="flex justify-center w-full items-center">
        <p className="max-w-[730px] w-full text-center text-base ">
          Job Seek is an innovative freelance platform that connects clients and
          freelancers through the power of cryptocurrency. Designed for a
          digital-first world, Job Seek provides secure, fast, and borderless
          payments, allowing freelancers to get paid in crypto and businesses to
          access a global pool of talent.
        </p>
      </div>

      <div className="flex mt-[100px] items-start justify-center gap-10 ">
        {OfferingCardContent.map((content, index) => (
          <OfferingCard key={index} content={content} />
        ))}
      </div>
    </div>
  );
};

export default UniqueOffering;

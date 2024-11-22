import SecurityCard from "./SecurityCard";

const securityContent = [
  {
    main: "At 2022",
    role: "78% of freelancers prefer platforms with secure payment options, and crypto payments are seen as the most secure method for international transactions.",
    roundedL: false,
  },
  {
    main: "62%",
    role: "Research shows that 62% of freelancers prefer platforms with secure, encrypted messaging, reducing the risk of sensitive project information being compromised.",
    roundedL: true,
  },
];

const Security = () => {
  return (
    <div className="max-w-[1200px] lg:mt-[70px] w-full flex items-center justify-center flex-col gap-7 text-white ">
      <div className="flex gap-2 items-center justify-center ">
        <div className="w-3 btn h-3 rounded-full "></div>
        <h1 className="textGradient text-center ">Security</h1>
      </div>

      <h2 className="text-[30px] text-center  font-medium">
        Our Commitment to Security
      </h2>
      <div className="flex justify-center w-full items-center">
        <p className="max-w-[730px] text-center w-full text-base ">
          At Job Seek, we prioritize your safety and peace of mind. We
          understand that security is a key concern when working online, and
          we’ve built robust features to ensure every transaction,
          communication, and collaboration on our platform is secure and
          transparent.
        </p>
      </div>

      <div className="flex flex-col mt-[50px] items-center w-full justify-center gap-10 ">
        {securityContent.map((content, index) => (
          <SecurityCard key={index} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Security;

import Introduction from "./About/Introduction";
import WhoWeAre from "./About/WhoWeAre";

const About = () => {
  return (
    <div className=" px-4 flex pt-[30px] justify-center items-center w-full ">
      <div className=" w-full flex flex-col items-center gap-14 ">
        <WhoWeAre />
        <Introduction />
      </div>
    </div>
  );
};

export default About;

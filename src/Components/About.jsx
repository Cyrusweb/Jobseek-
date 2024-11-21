import Introduction from "./About/Introduction";
import MeetTeam from "./About/MeetTeam";
import Review from "./About/Review";
import Security from "./About/Security";
import StartJourney from "./About/StartJourney";
import UniqueOffering from "./About/UniqueOffering";
import WhoWeAre from "./About/WhoWeAre";

const About = () => {
  return (
    <div className=" px-4 flex pt-[30px] justify-center items-center w-screen overflow-hidden ">
      <div className=" w-full flex pt-14 flex-col items-center gap-28 ">
        <WhoWeAre />
        <Introduction />
        <UniqueOffering />
        <MeetTeam />
        <Security />
        <Review />
        <StartJourney />
      </div>
    </div>
  );
};

export default About;

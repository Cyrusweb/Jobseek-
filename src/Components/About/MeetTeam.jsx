import TeamMemberCard from "./teamMemberCard";

const teamMembers = [
  {
    name: "Pauleye",
    role: "Frontend developer",
    linkdIn: "https://www.linkedin.com/in/pauleye/",
    img: "teamPicture",
  },
  {
    name: "Pauleye",
    role: "Frontend developer",
    linkdIn: "https://www.linkedin.com/in/pauleye/",
    img: "teamPicture",
  },
  {
    name: "Pauleye",
    role: "Frontend developer",
    linkdIn: "https://www.linkedin.com/in/pauleye/",
    img: "teamPicture",
  },
  {
    name: "Pauleye",
    role: "Frontend developer",
    linkdIn: "https://www.linkedin.com/in/pauleye/",
    img: "teamPicture",
  },
  {
    name: "Pauleye",
    role: "Frontend developer",
    linkdIn: "https://www.linkedin.com/in/pauleye/",
    img: "teamPicture",
  },
  {
    name: "Pauleye",
    role: "Frontend developer",
    linkdIn: "https://www.linkedin.com/in/pauleye/",
    img: "teamPicture",
  },
];
const MeetTeam = () => {
  return (
    <div className=" flex mt-[70px] overflow-hidden w-full items-center justify-center flex-col gap-7">
      <div className="max-w-[1200px] w-full flex items-center justify-center flex-col gap-7 text-white ">
        <div className="flex gap-2 items-center justify-center ">
          <div className="w-3 btn h-3 rounded-full "></div>
          <h1 className="textGradient text-center ">Our Team</h1>
        </div>

        <h2 className="text-[30px] text-center capitalize font-medium">
          meet the team
        </h2>
        <div className="flex justify-center w-full items-center">
          <p className="max-w-[730px] w-full text-center text-base ">
            Our team is the driving force behind our success. Composed of
            experienced professionals who are passionate about their work, each
            member brings a unique set of skills and expertise to the table.
          </p>
        </div>
      </div>
      <div className="flex flex-row overflow-x-auto w-full pt-[100px] items-start gap-10 hideScrollBar ">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;

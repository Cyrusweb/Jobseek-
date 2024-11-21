import PropTypes from "prop-types";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="h-[500px] min-w-[390px] relative cursor-pointer bg-[#0d0e11] rounded-xl hover:-translate-y-14 hover:scale-110 transition-all duration-300  rounded-bl-[90px] ">
      <img
        className="w-full rounded-xl rounded-bl-[90px] object-fill h-full"
        src={`../../src/assets/${member.img}.jpg`}
        alt={member.name}
      />
      <div className="absolute top-3 right-3 flex gap-2 items-center justify-center bg-transparent  ">
        <a
          className="p-1.5 btn grid place-items-center rounded-full  "
          href={member.linkdIn}
          target="blank"
        >
          <img className="w-3" src="../../src/assets/linkdIn.svg" alt="" />
        </a>
        <button className="p-1.5 btn flex justify-center items-center rounded-full ">
          <img className="w-3" src="../../src/assets/plus.svg" alt="" />
        </button>
      </div>
      <div className="absolute rounded-2xl -bottom-1 -left-1  flex flex-col bg-[#0d0e11] rounded-r-[20px] px-4 py-2  ">
        <h1 className="textGradient text-sm font-normal ">{member.name}</h1>
        <p className="capitalize  text-sm font-extralight text-white">
          {member.role}
        </p>
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    linkdIn: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMemberCard;

import PropTypes from "prop-types";

const ReviewCard = ({ member }) => {
  return (
    <div className="offeringCardBG2 min-w-[400px] rounded-lg ">
      <div className="bg-[#1C1E23] rounded-lg text-white flex flex-col gap-7 py-8 px-5 ">
        <img className="w-[100px]" src="../../src/assets/5star.png" alt="" />
        <p>{member.content}</p>
        <p>{member.user}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  member: PropTypes.shape({
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;

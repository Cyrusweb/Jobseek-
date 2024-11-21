import PropTypes from "prop-types";

const SecurityCard = ({ content }) => {
  return (
    <div
      className={`max-w-[1000px]  offeringCardBG w-full ${
        content.roundedL ? "rounded-tl-2xl" : "rounded-tr-2xl"
      } `}
    >
      <div
        className={`flex bg-[#17191F] w-full flex-col items-center gap-5 py-6 px-4 ${
          content.roundedL ? "rounded-tl-2xl" : "rounded-tr-2xl"
        }`}
      >
        <p className="text-3xl font-bold ">{content.main}</p>
        <p className="max-w-[450px] w-full text-center font-light ">
          {content.role}
        </p>
      </div>
    </div>
  );
};

SecurityCard.propTypes = {
  content: PropTypes.shape({
    main: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    roundedL: PropTypes.bool,
  }).isRequired,
};

export default SecurityCard;

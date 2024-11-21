import PropTypes from "prop-types";

const OfferingCard = ({ content }) => {
  return (
    <div className="   offeringCardBG rounded-md ">
      <div className="flex bg-[#0d0e11] gap-5 flex-col items-center justify-center rounded-md px-6 py-10 h-[350px]">
        <img
          className="w-12"
          src={`../../src/assets/${content.img}.svg`}
          alt={content.img}
        />
        <h1 className="text-xl font-bold">{content.heading}</h1>
        <p className="w-[270px] text-sm  font-light text-center  ">
          {content.subText}
        </p>
      </div>
    </div>
  );
};

OfferingCard.propTypes = {
  content: PropTypes.shape({
    img: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
  }).isRequired,
};

export default OfferingCard;

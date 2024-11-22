import PropTypes from "prop-types";

const IntroductionCard = ({ content }) => {
  return (
    <div className="relative h-[200px] max-w-[300px] w-full flex py-10 px-3 flex-col items-center gap-4 bg-[#131519] cardBlur ">
      <div className=" absolute left-1/2 -translate-x-1/2 -top-9  ">
        <img src={`../../assets/${content.img}.png`} alt="" />
      </div>
      <h1
        className={`font-semibold ${
          content.color === "#F68F57"
            ? "text-[#F68F57]"
            : content.color === "#F65768"
            ? "text-[#F65768]"
            : "text-[#F6F4FF]"
        }   `}
      >
        {" "}
        {content.heading}
      </h1>
      <p className="text-sm text-center">{content.subText}</p>
    </div>
  );
};

IntroductionCard.propTypes = {
  content: PropTypes.shape({
    img: PropTypes.string,
    heading: PropTypes.string,
    subText: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

export default IntroductionCard;

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    starCount: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur. Nam eget dictum nulla cursus venenatis id lectus semper. Integer vel ac quis convallis eget est. Neque consectetur ipsum neque quam morbi. Quis auctor et ac rutrum faucibus adipiscing. Eu lectus orci platea vitae imperdiet.",
    user: "John 0.",
  },
  {
    starCount: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur. Nam eget dictum nulla cursus venenatis id lectus semper. Integer vel ac quis convallis eget est. Neque consectetur ipsum neque quam morbi. Quis auctor et ac rutrum faucibus adipiscing. Eu lectus orci platea vitae imperdiet.",
    user: "John 1.",
  },
  {
    starCount: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur. Nam eget dictum nulla cursus venenatis id lectus semper. Integer vel ac quis convallis eget est. Neque consectetur ipsum neque quam morbi. Quis auctor et ac rutrum faucibus adipiscing. Eu lectus orci platea vitae imperdiet.",
    user: "John 2.",
  },
  {
    starCount: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur. Nam eget dictum nulla cursus venenatis id lectus semper. Integer vel ac quis convallis eget est. Neque consectetur ipsum neque quam morbi. Quis auctor et ac rutrum faucibus adipiscing. Eu lectus orci platea vitae imperdiet.",
    user: "John 3.",
  },
  {
    starCount: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur. Nam eget dictum nulla cursus venenatis id lectus semper. Integer vel ac quis convallis eget est. Neque consectetur ipsum neque quam morbi. Quis auctor et ac rutrum faucibus adipiscing. Eu lectus orci platea vitae imperdiet.",
    user: "John D.",
  },
  {
    starCount: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur. Nam eget dictum nulla cursus venenatis id lectus semper. Integer vel ac quis convallis eget est. Neque consectetur ipsum neque quam morbi. Quis auctor et ac rutrum faucibus adipiscing. Eu lectus orci platea vitae imperdiet.",
    user: "John D.",
  },
];

const Review = () => {
  return (
    <div className="flex flex-row w-full pt-[100px] pl-[530px] bg-[#0d0e11] relative items-start gap-3 h-full py-10 hideScrollBar ">
      <div className="bg-[#0d0e11] absolute left-[100px] max-w-[400px] w-full h-full flex flex-col items-start gap-3 px-2 py-3 text-white ">
        <div>
          <h1 className="text-[40px] leading-[44px] ">
            Our happy users say about us
          </h1>
        </div>
        <div>
          <img src="../../src/assets/googleReview.png" alt="" />
        </div>
        <div>
          We are grateful to our users for their kind words and testimonials.
          Their success stories motivate us to continually improve our platform
          and provide the best possible job search experience for every user.
        </div>
      </div>
      <div className="w-full gap-10 flex-row overflow-x-auto flex px-3 py-2  hideScrollBar ">
        {reviews.map((member, index) => (
          <ReviewCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Review;

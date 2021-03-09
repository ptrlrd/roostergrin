// import Carousel from "./Carousel";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const reviews = {
  0: {
    name: "Dave Smith",
    date: "11/12/2020",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id sapiente, maiores sunt eligendi natus exercitationem corrupti deserunt, fugit quasi tenetur temporibus excepturi praesentium delectus maxime harum dicta mollitia cum.",
  },
  1: {
    name: "Anakin Skywalker",
    date: "3/12/2020",
    review:
      "Fugit quasi tenetur temporibus excepturi praesentium delectus maxime harum dicta mollitia cum.",
  },

  2: {
    name: "Obi Wan",
    date: "4/12/2020",
    review:
      "Natus exercitationem corrupti deserunt, fugit quasi tenetur temporibus excepturi praesentium delectus maxime harum dicta mollitia cum.",
  },
  3: {
    name: "George Lucas",
    date: "3/12/2020",
    review:
      "Unde id sapiente, maiores sunt eligendi natus exercitationem corrupti deserunt, fugit quasi tenetur temporibus excepturi praesentium delectus maxime harum dicta mollitia cum.",
  },
  4: {
    name: "Leeroy Jekins",
    date: "11/12/2020",
    review:
      "Lorem ipsum dolor sit amet consectetur eligendi natus exercitationem corrupti deserunt, fugit quasi tenetur temporibus excepturi praesentium delectus maxime harum dicta mollitia cum.",
  },
};

const Reviews = () => {
  const [active, setActive] = useState(0);

  const prevReview = () => {
    setActive(active === 4 - 1 ? 0 : active + 1);
  };

  const nextReview = () => {
    setActive(active === 0 ? 4 - 1 : active - 1);
  };

  return (
    <div className="reviewContainer">
      <div className="mainReview">
        <h1>LOREM IPSUM DOLOR SIT AMET</h1>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
      <div className="reviewCarousel">
        <RiArrowLeftSLine onClick={prevReview} className="leftArrow" />
        <h3 className="reviewName">
          {reviews[active].name} - {reviews[active].date}
        </h3>
        <p>{reviews[active].review}</p>
        <RiArrowRightSLine onClick={nextReview} className="rightArrow" />
      </div>
    </div>
  );
};

export default Reviews;

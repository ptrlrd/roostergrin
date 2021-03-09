// import Carousel from "./Carousel";
import { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
} from "react-icons/ri";

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
  const [review, setReview] = useState(reviews[0]);

  const prevReview = () => {
    setActive(active === 5 - 1 ? 0 : active + 1);
    console.log(active);
  };

  const nextReview = () => {
    setActive(active === 0 ? 5 - 1 : active - 1);
    console.log(active);
  };

  const handleSetClick = (event) => {
    setReview(reviews[event.target.getAttribute("data-review")]);
    console.log(reviews[event.target.getAttribute("data-review")]);
    setActive(event.target.getAttribute("data-review"));
    console.log(event.target.getAttribute("data-review"));
  };

  return (
    <div className="reviewContainer">
      <div className="mainReview">
        <h1>
          LOREM IPSUM <br />
          DOLOR SIT AMET
        </h1>
        <p>
          <RiStarFill className="reviewStars" />
          <RiStarFill className="reviewStars" />
          <RiStarFill className="reviewStars" />
          <RiStarFill className="reviewStars" />
          <RiStarFill className="reviewStars" />
        </p>
      </div>
      <div className="reviewCarousel">
        <RiArrowLeftSLine onClick={prevReview} className="leftArrow" />
        <h3 className="reviewName">
          {reviews[active].name} - {reviews[active].date}
        </h3>
        <p>{reviews[active].review}</p>
        <RiArrowRightSLine onClick={nextReview} className="rightArrow" />
        <div className="pointer">
          {/* Dynamically inserts circles underneath reviews based off of total befores */}
          {Object.keys(reviews).map((index) => (
            <span
              onClick={(event) => handleSetClick(event)}
              data-review={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

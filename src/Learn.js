import learnImg from "./images/img-1.jpg";

const Learn = () => {
  return (
    <div className="learnContainer">
      <div className="learnInfo">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          perspiciatis quae recusandae! Cumque esse alias aspernatur modi odit
          necessitatibus beatae tempora maiores. Reprehenderit magni nesciunt
          laborum voluptates nostrum, ipsa molestiae.
        </p>
        <a href="#"> > Learn More</a>
      </div>
      <img
        src={learnImg}
        alt="Person extending hand to another person climbing rock"
        className="learnImg"
      />
    </div>
  );
};

export default Learn;

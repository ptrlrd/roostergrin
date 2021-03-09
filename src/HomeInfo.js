import expertise from "./images/home-expertise.svg";
import retention from "./images/home-retention.svg";
import lab from "./images/home-lab.svg";
import hygiene from "./images/home-hygiene.svg";

const HomeInfo = () => {
  return (
    <div className="homeContainer">
      <div className="homeInfo">
        <h1>Lorem Ipsum Dolor Sit Amet</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum illo
          soluta laudantium nobis quia maxime reiciendis molestiae suscipit
          saepe. Ducimus assumenda commodi perspiciatis nobis blanditiis, libero
          voluptatum minus sapiente necessitatibus!
        </p>
        <a href="#"> > Learn More</a>
      </div>
      <div className="homeImages">
        <ul className="homeList">
          <li className="homeIcons">
            <img src={expertise} alt="Clipboard with checklist" />
            <figure>Lorem</figure>
          </li>
          <li className="homeIcons">
            <img src={hygiene} alt="Facemask" className="icon" />
            <figure>Lorem Ipsum</figure>
          </li>
          <li className="homeIcons">
            <img src={lab} alt="Safety Goggles" className="icon" />
            <figure>Lorem Ipsum</figure>
          </li>
          <li className="homeIcons">
            <img src={retention} alt="Calendar" className="icon" />
            <figure>Lorem</figure>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeInfo;

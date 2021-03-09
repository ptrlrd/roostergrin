import whiteLogo from "./images/logo-white.svg";

const Hero = () => {
  return (
    <div className="heroContainer">
      <img src={whiteLogo} alt="Rooster Grin Logo Colored" className="logo" />
      <div className="cta">
        <h1>
          <span className="welcome">WELCOME TO</span> <br />
          <span className="brand">Rooster Grin</span>
        </h1>
        <a href="#">
          <button className="heroBtn">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;

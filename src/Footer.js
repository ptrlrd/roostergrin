import facebookLogo from "./images/facebook.svg";
import instagramLogo from "./images/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Follow Us:</p>
        <a href="#">
          <img
            src={instagramLogo}
            alt="Instagram Logo"
            className="socialInsta"
          />
        </a>
        <a href="#">
          <img src={facebookLogo} alt="Facebook Logo" className="socialFB" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

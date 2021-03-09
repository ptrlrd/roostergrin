import BannerOne from "./Banner-one";
import BannerTwo from "./Banner-two";
import Footer from "./Footer";
import Hero from "./Hero";
import HomeInfo from "./HomeInfo";
import Learn from "./Learn";
import logo from "./logo.svg";
import Reviews from "./Reviews";

function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <Learn />
        <BannerOne />
        <HomeInfo />
        <BannerTwo />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}

export default App;

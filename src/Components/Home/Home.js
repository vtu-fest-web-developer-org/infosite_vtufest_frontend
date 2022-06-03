import NavBar from "../NavBar/NavBar";
import Slider from "./Slider/Slider";
import About from "./About/About";
import CountUp from "react-countup";

const Home = (props) => {
  return (
    <>
      <NavBar curPage="/" />
      <Slider />
      <About />
      <div className="row mt-5">
        <div className="col-12">
          <h3>
            <CountUp start={0} end={props.views} />
            Views
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;

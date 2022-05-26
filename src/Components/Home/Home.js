import NavBar from "../NavBar/NavBar";
import Slider from "./Slider";
import CountUp from "react-countup";

const Home = (props) => {
  return (
    <>
      <NavBar curPage="/" />
      <Slider />
      <div className="row mt-5">
        <div className="col-12">
          <h3>
            <CountUp start={20} end={props.views} />
            Views
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;

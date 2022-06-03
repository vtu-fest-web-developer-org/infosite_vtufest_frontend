import sliderdata from "./sliderdata";
const Slider = (props) => {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner slider">
            {sliderdata.active.map((item, index) => {
              return (
                <div class="carousel-item active slider">
                  <img
                    class="d-block w-100 slider"
                    src={item.photu}
                    alt="First slide"
                  />
                </div>
              );
            })}
            {sliderdata.inactive.map((item, index) => {
              return (
                <div class="carousel-item slider">
                  <img
                    class="d-block w-100 slider"
                    src={item.photu}
                    alt="Second slide"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
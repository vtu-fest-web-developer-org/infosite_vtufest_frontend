import sliderdata from "./sliderdata";
const Slider = (props) => {
  return (
    <div className="container">
      <div
        id="carouselExampleInterval"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner slider ">
          {sliderdata.active.map((item, index) => {
            return (
              <div class="carousel-item active slider" data-bs-interval="4000">
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
              <div class="carousel-item slider" data-bs-interval="3000">
                <img class="d-block w-100 slider" src={item.photu} alt="" />
              </div>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Slider;

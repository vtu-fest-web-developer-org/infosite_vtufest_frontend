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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class=" w-100"
                src="./assets/slider/welcome.png"
                alt="First slide"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;

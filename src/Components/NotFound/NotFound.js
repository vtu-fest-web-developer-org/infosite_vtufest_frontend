import NavBar from "../NavBar/NavBar";

const NotFound = (props) => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="col-12">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="./assets/photos/404_notfound.svg"
                  class="d-block w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

import NavBar from "../NavBar/NavBar";

const NotFound = (props) => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="col-12">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./assets/photos/404_notfound.svg"
                  className="d-block w-100"
                  alt="404 Not Found"
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

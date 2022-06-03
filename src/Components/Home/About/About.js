import aboutdata from "./aboutdata";
const About = (props) => {
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-5 col-12 mt-2">
          <div className="card ">
            <div className="card-body">
              <h3 className="card-title about-title">
                {aboutdata.bmsce.title}
              </h3>
              <img
                className="card-img-top about-img mb-2"
                src={aboutdata.bmsce.image}
                alt=""
              />
              <p className="card-text txt-justify">
                {aboutdata.bmsce.description}{" "}
                <a
                  href={aboutdata.bmsce.readmorelink}
                  className="text-decoration-none"
                  target="_blank"
                >
                  Know More
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-12 mt-2">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title about-title">{aboutdata.vtu.title}</h3>
              <img
                className="card-img-top about-img mb-2"
                src={aboutdata.vtu.image}
                alt=""
              />
              <p className="card-text about-txt txt-justify">
                {aboutdata.vtu.description}{" "}
                <a
                  href={aboutdata.vtu.readmorelink}
                  className="text-decoration-none"
                  target="_blank"
                >
                  Know More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

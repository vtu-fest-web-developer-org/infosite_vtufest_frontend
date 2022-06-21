import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import generalrules from "./generalrules.js";

const GeneralInstructions = (props) => {
  return (
    <>
      <NavBar curPage="/generalinstructions" />
      <div className="container min-vh-100">
        <PageTitle title="General Instructions" />
        <div className="row mt-5 justify-content-center">
          <div className="col-md-8 align-middle text-center">
            <div className="card mt-3">
              {generalrules.length === 0 ? (
                <div className="card-body">
                  <p>Coming Soon!</p>
                </div>
              ) : (
                <div className="card-body text-start">
                  {generalrules.map((rule, index) => {
                    return (
                      <p>
                        <strong>{index + 1}.</strong> {rule}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralInstructions;

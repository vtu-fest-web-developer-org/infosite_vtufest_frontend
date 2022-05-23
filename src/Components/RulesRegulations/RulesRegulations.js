import React from "react";
import NavBar from "../NavBar/NavBar";
import rules from "./rules";

const RulesRegulations = (props) => {
  const colorDict = {
    music: "alert-success",
    dance: "alert-danger",
    literary: "alert-dark",
    theatre: "alert-warning",
    "fine-arts": "alert-info",
  };

  // const colorDict = {
  //   music: "bg-info text-white",
  //   dance: "bg-secondary text-white",
  //   literary: "bg-success text-white",
  //   theatre: "bg-danger text-white",
  //   "fine-arts": "bg-warning text-dark",
  // };
  return (
    <>
      <NavBar curPage="/rulesregulations" />
      <div className="container">
        <div className="col-12">
          {Object.keys(rules).map((eventType, eventslist) => {
            return (
              <>
                <div className={ "alert "+ colorDict[eventType]} role="alert">
                    {eventType.toUpperCase()}
                </div>
                <div class="row justify-content-center">
                  {rules[eventType].map((eventName) => {
                    return (
                          <div className="card col-md-3 my-3 mx-1 bg-light">
                              <div class="card-header" style={{"fontSize": "1.9rem"}}>
                                {eventName.name}
                              </div>
                              <p class="card-text">
                                <ul class="list-group">
                                  {eventName["rules"].map((rule) => {
                                      return <li class="list-group-item text-muted" style={{"fontSize": "1.2rem"}}>{rule}</li>;
                                    })}
                                </ul>
                              </p>
                          </div>
                    );
                  })}
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RulesRegulations;

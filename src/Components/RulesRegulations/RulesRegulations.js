import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

const RulesRegulations = (props) => {
  const colorDict = {
    music: "alert-success",
    dance: "alert-danger",
    literary: "alert-dark",
    theatre: "alert-warning",
    "fine-arts": "alert-info",
  };
  const [rules, setRules] = useState({});
  useEffect(() => {
    fetch("https://infositeapi.herokuapp.com/infositeapi/rules")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setRules(json);
      });
  }, []);

  return (
    <div className="ofxh">
      <NavBar curPage="/rulesregulations" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {Object.keys(rules).map((eventType, eventslist) => {
              return (
                <>
                  <div className={"alert " + colorDict[eventType]} role="alert">
                    {eventType.toUpperCase()}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="row justify-content-center mb-3">
                        {rules[eventType].map((eventName) => {
                          var j = 0;
                          var evName = eventName.name.split("(");
                          return (
                            <div className="col-xl-4 col-lg-6 mb-3">
                              <div className="card ">
                                <div className="card-header">
                                  <strong>
                                    <h5 className="fw-bold">{evName[0]}</h5>
                                    <span>
                                      {evName[1] ? "(" + evName[1] : ""}
                                    </span>
                                  </strong>
                                </div>
                                <div className="card-body">
                                  <p className="card-text text-start">
                                    {eventName["rules"].map((rule) => {
                                      j = j + 1;
                                      return (
                                        <>
                                          <strong>{j}</strong>
                                          <span>- {rule}</span>
                                          <br />
                                        </>
                                      );
                                    })}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesRegulations;

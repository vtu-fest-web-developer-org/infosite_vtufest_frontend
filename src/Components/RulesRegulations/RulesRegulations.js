import React from "react";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import colorDict from "../ColorDict/ColorDict";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import rules from "./rules";

const RulesRegulations = (props) => {
  return (
    <div className="ofxh">
      <NavBar curPage="/rulesregulations" />
      <div className="container">
        <PageTitle title="Rules & Regulations" />
        {rules.music ? (
          <div className="row">
            <div className="col-12">
              {Object.keys(rules).map((eventType, eventslist) => {
                return (
                  <>
                    <div
                      className={"alert " + colorDict[eventType]}
                      role="alert"
                    >
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
                                <div className="card h-100">
                                  <div className="card-body">
                                    <strong>
                                      <h5 className="fw-bold">{evName[0]}</h5>
                                      <span>
                                        {evName[1] ? "(" + evName[1] : <br />}
                                      </span>
                                    </strong>
                                    <hr />
                                    <p className="card-text text-start">
                                      {eventName["rules"].map((rule) => {
                                        j = j + 1;
                                        return (
                                          <>
                                            <strong>{j}.</strong>
                                            <span> {rule}</span>
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
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </div>
  );
};

export default RulesRegulations;

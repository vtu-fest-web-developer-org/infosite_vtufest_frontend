import React from "react";
import NavBar from "../NavBar/NavBar";
import rules from "./rules";

const RulesRegulations = (props) => {
  return (
    <>
      <NavBar curPage="/rulesregulations" />
      <div className="container">
        <div className="col-12">
          {Object.keys(rules).map((eventType, eventslist) => {
            return (
              <>
                <div>
                  <p>
                    <strong>{eventType.toUpperCase()}</strong>
                  </p>
                </div>
                {rules[eventType].map((eventName) => {
                  return (
                    <>
                      <div>
                        <span>
                          <strong>{eventName.name}</strong>
                        </span>
                      </div>
                      <div>
                        <ul>
                          {eventName["rules"].map((rule) => {
                            return <li>{rule}</li>;
                          })}
                        </ul>
                      </div>
                      <br />
                    </>
                  );
                })}
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RulesRegulations;

import React from "react";
import styled from "styled-components";
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

          {/*<table class="table table-primary table-hover table-striped table-corner">
              <thead class="table-primary">
                <tr class="table-primary">
                  <th class="table-primary" scope="col">
                    #
                  </th>
                  <th class="table-primary" scope="col">
                    Course Code
                  </th>
                  <th class="table-primary" scope="col">
                    Course Title
                  </th>
                  <th class="table-primary" scope="col">
                    Credits
                  </th>
                  <th class="table-primary" scope="col">
                    Faculty
                  </th>
                  <th class="table-primary" scope="col">
                    Attendance
                  </th>
                  <th class="table-primary" scope="col">
                    Internal
                  </th>
                  <th class="table-primary" scope="col">
                    SEE
                  </th>
                  <th class="table-primary" scope="col">
                    Grade
                  </th>
                  <th class="table-primary" scope="col">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-primary">
                  <th class="table-primary" scope="row">
                    9
                  </th>
                  <td class="table-primary">j</td>
                  <td class="table-primary">d</td>
                  <td class="table-primary">h</td>
                  <td class="table-primary">dfbvrt</td>
                  <td class="table-primary">vfc</td>
                  <td class="table-primary">ertiEWS</td>
                  <td class="table-primary">43wrt</td>
                  <td class="table-primary">regt</td>
                  <td class="table-primary">ergt</td>
                </tr>
              </tbody>
  </table>*/}
        </div>
      </div>
    </>
  );
};

export default RulesRegulations;

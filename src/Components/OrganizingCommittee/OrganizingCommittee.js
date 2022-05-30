import { useEffect, useState } from "react";
import { FiLink2 } from "react-icons/fi";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import colorDict from "../ColorDict/ColorDict";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import oc from "./oc";

const OrganizingCommittee = (props) => {
  return (
    <>
      <NavBar curPage="/organisingcommittee" />
      <div className="container">
        <PageTitle title="Organising Committee" />
        {oc.developers ? (
          <div className="row">
            {Object.keys(oc).map((dept) => {
              return (
                <div className="col-lg-6">
                  <div className={"alert " + colorDict[dept]} role="alert">
                    {dept.toUpperCase()}
                  </div>
                  <div className="row justify-content-center">
                    {oc[dept].map((person) => {
                      return (
                        <div className="col-lg-6">
                          <div class="card text-center mb-3">
                            <div class="card-body">
                              <img
                                className="profilephoto"
                                src={person.photo}
                                alt={person.name}
                              />
                              {person.name ? (
                                <h5 class="card-title">{person.name}</h5>
                              ) : (
                                <br />
                              )}

                              {person.designation ? (
                                <span class="card-text">
                                  {person.designation}
                                </span>
                              ) : (
                                <br />
                              )}

                              <br />
                              {person.role ? (
                                <span>{person.role}</span>
                              ) : (
                                <br />
                              )}
                              <br />
                              {person.link ? (
                                <a
                                  href={person.link}
                                  class="text-decoration-none"
                                  rel="noreferrer"
                                  target={"_blank"}
                                >
                                  <FiLink2 />
                                </a>
                              ) : (
                                <br />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </>
  );
};

export default OrganizingCommittee;

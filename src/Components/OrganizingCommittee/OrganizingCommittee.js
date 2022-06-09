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
        <div className="row justify-content-center">
          <div className="col-md-6 col-12">
            <div className={"alert alert-warnin"} role="alert">
              CHIEF PATRONS
            </div>
          </div>
          <div className="row justify-content-center">
            {oc.chiefPatrons.map((person) => {
              return (
                <div className="col-md-4 col-12 mt-3">
                  <div class="card text-center mb-3 h-100">
                    <div class="card-body">
                      <img
                        className="profilephoto"
                        src={person.photo}
                        alt={person.name}
                      />
                      <br />

                      {person.name ? (
                        <>
                          <br />

                          <h5 class="card-title">{person.name}</h5>
                        </>
                      ) : null}
                      <br />

                      {person.designation ? (
                        <span class="card-text">{person.designation}</span>
                      ) : null}

                      <br />
                      {person.role ? <span>{person.role}</span> : null}
                      {person.workplace ? (
                        <span>{person.workplace}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 col-12">
            <div className={"alert alert-dange"} role="alert">
              PATRONS
            </div>
          </div>
          <div className="row justify-content-center ">
            {oc.firstPatrons.map((person) => {
              return (
                <div className="col-md-3 col-12 mt-3">
                  <div class="card text-center mb-3 h-100">
                    <div class="card-body">
                      <img
                        className="profilephoto"
                        src={person.photo}
                        alt={person.name}
                      />
                      <br />

                      {person.name ? (
                        <>
                          <br />

                          <h5 class="card-title">{person.name}</h5>
                        </>
                      ) : null}

                      {person.designation ? (
                        <span class="card-text">{person.designation}</span>
                      ) : null}

                      <br />
                      {person.role ? <span>{person.role}</span> : null}
                      <br />
                      {person.workplace ? (
                        <span>{person.workplace}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center ">
            {oc.secondPatrons.map((person) => {
              return (
                <div className="col-md-3 col-12 mt-3">
                  <div class="card text-center mb-3 h-100">
                    <div class="card-body">
                      <img
                        className="profilephoto"
                        src={person.photo}
                        alt={person.name}
                      />
                      <br />

                      {person.name ? (
                        <>
                          <br />

                          <h5 class="card-title">{person.name}</h5>
                        </>
                      ) : null}

                      {person.designation ? (
                        <span class="card-text">{person.designation}</span>
                      ) : null}

                      <br />
                      {person.role ? <span>{person.role}</span> : null}
                      <br />
                      {person.workplace ? (
                        <span>{person.workplace}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-6 col-12 mt-4">
            <div className={"alert alert-succes"} role="alert">
              ORGANISING COMMITTEE
            </div>
          </div>
          <div className="row justify-content-center">
            {oc.thirdPatrons.map((person) => {
              return (
                <div className="col-md-3 col-12 mt-3">
                  <div class="card text-center mb-3 h-100">
                    <div class="card-body">
                      <img
                        className="profilephoto"
                        src={person.photo}
                        alt={person.name}
                      />
                      <br />

                      {person.name ? (
                        <>
                          <br />

                          <h5 class="card-title">{person.name}</h5>
                        </>
                      ) : null}

                      {person.designation ? (
                        <span class="card-text">{person.designation}</span>
                      ) : null}

                      <br />
                      {person.role ? <span>{person.role}</span> : null}
                      <br />
                      {person.workplace ? (
                        <span>{person.workplace}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center ">
            {oc.fourthPatrons.map((person) => {
              return (
                <div className="col-md-3 col-12 mt-3">
                  <div class="card text-center mb-3 mt-3 h-100">
                    <div class="card-body">
                      <img
                        className="profilephoto"
                        src={person.photo}
                        alt={person.name}
                      />
                      <br />

                      {person.name ? (
                        <>
                          <br />

                          <h5 class="card-title">{person.name}</h5>
                        </>
                      ) : null}

                      {person.designation ? (
                        <span class="card-text">{person.designation}</span>
                      ) : null}

                      <br />
                      {person.role ? <span>{person.role}</span> : null}
                      <br />
                      {person.workplace ? (
                        <span>{person.workplace}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center ">
            {oc.fifthPatrons.map((person) => {
              return (
                <div className="col-md-3 col-12 mt-3">
                  <div class="card text-center mb-3 mt-3 h-100">
                    <div class="card-body">
                      <img
                        className="profilephoto"
                        src={person.photo}
                        alt={person.name}
                      />
                      <br />

                      {person.name ? (
                        <>
                          <br />

                          <h5 class="card-title">{person.name}</h5>
                        </>
                      ) : null}

                      {person.designation ? (
                        <span class="card-text">{person.designation}</span>
                      ) : null}

                      <br />
                      {person.role ? <span>{person.role}</span> : null}
                      <br />
                      {person.workplace ? (
                        <span>{person.workplace}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*<div className="row">
          <div className="col-lg-6">
            <div className={"alert " + colorDict["developers"]} role="alert">
              DEVELOPERS
            </div>
            <div className="row justify-content-center">
              {oc.developers.map((person) => {
                return (
                  <div className="col-md-6">
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
                          <span class="card-text">{person.designation}</span>
                        ) : (
                          <br />
                        )}

                        <br />
                        {person.role ? <span>{person.role}</span> : <br />}
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
          <div className="col-lg-6">
            <div className={"alert " + colorDict["design team"]} role="alert">
              DESIGN TEAM
            </div>
            <div className="row justify-content-center">
              {oc["design team"].map((person) => {
                return (
                  <div className="col-md-6">
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
                          <span class="card-text">{person.designation}</span>
                        ) : (
                          <br />
                        )}

                        <br />
                        {person.role ? <span>{person.role}</span> : <br />}
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
        </div>*/}
      </div>
    </>
  );
};

export default OrganizingCommittee;

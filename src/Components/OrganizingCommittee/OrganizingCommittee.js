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
        <div className="row justify-content-center">
          <div className="col-md-6 col-12">
            <div className={"alert "} role="alert">
              CHIEF PATRONS
            </div>
          </div>
          <div className="row justify-content-center">
            {oc.chiefPatrons.map((person) => {
              return (
                <div className="col-md-3 col-6">
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
        <div className="row justify-content-center">
          <div className="col-md-6 col-12">
            <div className={"alert "} role="alert">
              PATRONS
            </div>
          </div>
          <div className="row justify-content-center">
            {oc.firstPatrons.map((person) => {
              return (
                <div className="col-md-3 col-6">
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
          <div className="row justify-content-center">
            {oc.secondPatrons.map((person) => {
              return (
                <div className="col-md-3 col-6">
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
          <div className="row justify-content-center">
            {oc.thirdPatrons.map((person) => {
              return (
                <div className="col-md-3 col-6">
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
          <div className="row justify-content-center">
            {oc.fourthPatrons.map((person) => {
              return (
                <div className="col-md-3 col-6">
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
          <div className="row justify-content-center">
            {oc.fifthPatrons.map((person) => {
              return (
                <div className="col-md-3 col-6">
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
        <div className="row">
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
        </div>
      </div>
    </>
  );
};

export default OrganizingCommittee;

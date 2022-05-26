import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import colorDict from "../ColorDict/ColorDict";

const EventsGuidelines = (props) => {
  const [guidelines, setGuidelines] = useState({});
  useEffect(() => {
    fetch("https://infositeapi.herokuapp.com/infositeapi/guidelines")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setGuidelines(json);
      });
  }, []);
  var srno = 0;
  return (
    <>
      <NavBar curPage="/eventsguidelines" />

      {window.innerHeight > window.innerWidth ? (
        <div className="container">
          <PageTitle title="Event Guidelines" />
          <div className="row">
            <div className="col-12">
              <div
                className="alert alert-warnin alert-dismissible fade show"
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-label="Warning:"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                *For better viewing experience use Landscape Mode.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              {Object.keys(guidelines).map((eventType, eventslist) => {
                return (
                  <>
                    <div
                      className={"alert " + colorDict[eventType]}
                      role="alert"
                    >
                      {eventType.toUpperCase()}
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover table-corner">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Event Name</th>
                            <th scope="col">No. Of Participants - P</th>
                            <th scope="col">No. Of Accompanists - A</th>
                            <th scope="col">P + A</th>
                            <th scope="col">Minimum Time (mins)</th>
                            <th scope="col">Maximum Time (mins)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {guidelines[eventType].map((eventName) => {
                            srno = srno + 1;
                            return (
                              <tr>
                                <th scope="row">{srno}</th>
                                <td>{eventName.name}</td>
                                <td>{eventName.p}</td>
                                <td>{eventName.a}</td>
                                <td>{eventName.p + eventName.a}</td>
                                <td>{eventName.minTime}</td>
                                <td>{eventName.maxTime}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <PageTitle title="Event Guidelines" />
          <div className="row">
            <div className="col-12">
              {Object.keys(guidelines).map((eventType, eventslist) => {
                return (
                  <>
                    <div
                      className={"alert " + colorDict[eventType]}
                      role="alert"
                    >
                      {eventType.toUpperCase()}
                    </div>
                    <table className="table table-hover table-corner">
                      <thead>
                        <tr>
                          <th scope="col">Sr. No</th>
                          <th scope="col">Event Name</th>
                          <th scope="col">No. Of Participants - P</th>
                          <th scope="col">No. Of Accompanists - A</th>
                          <th scope="col">P + A</th>
                          <th scope="col">Minimum Time (mins)</th>
                          <th scope="col">Maximum Time (mins)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {guidelines[eventType].map((eventName) => {
                          srno = srno + 1;
                          return (
                            <tr>
                              <th scope="row">{srno}</th>
                              <td>{eventName.name}</td>
                              <td>{eventName.p}</td>
                              <td>{eventName.a}</td>
                              <td>{eventName.p + eventName.a}</td>
                              <td>{eventName.minTime}</td>
                              <td>{eventName.maxTime}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsGuidelines;

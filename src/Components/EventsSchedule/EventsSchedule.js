import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import colorDict from "../ColorDict/ColorDict";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import schedule from "./schedule";

const EventsSchedule = (props) => {
  var srno = 0;
  return (
    <>
      <NavBar curPage="/eventschedule" />
      <div className="container">
        <PageTitle title="Event Schedule" />
        {schedule.music ? (
          <div className="col-12">
            {window.innerHeight > window.innerWidth ? (
              <div
                className="alert alert-warning alert-dismissible fade show"
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
            ) : (
              <>{/*dca*/}</>
            )}
            {Object.keys(schedule).map((eventType, eventslist) => {
              return (
                <>
                  <div className={"alert " + colorDict[eventType]} role="alert">
                    {eventType.toUpperCase()}
                  </div>
                  <table className="table table-hover table-corner">
                    <thead class="text-start align-items-start">
                      <tr>
                        <th
                          className="text-center align-items-center"
                          scope="col"
                        >
                          Sl. No.
                        </th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody class="text-start align-items-start">
                      {schedule[eventType].map((eventName) => {
                        srno = srno + 1;
                        return (
                          <tr>
                            <th
                              className="text-center align-items-center"
                              scope="row"
                            >
                              {srno}
                            </th>
                            <td>{eventName.name}</td>
                            <td>
                              <a
                                href={
                                  "https://docs.prathibhotsava.in/schedule?name=" +
                                  eventName.name
                                }
                                target="_blank"
                                class="text-decoration-none"
                              >
                                Open Schedule
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </>
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

export default EventsSchedule;

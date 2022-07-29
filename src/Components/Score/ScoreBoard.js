import score from "./score";
import NavBar from "../Launch/NavBar/NavBar";

const ScoreBoard = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Event Name</th>
                  <th scope="col">
                    First
                    <br />
                    College (Score)
                  </th>
                  <th scope="col">
                    Second
                    <br />
                    College (Score)
                  </th>
                  <th scope="col">
                    Third
                    <br />
                    College (Score)
                  </th>
                </tr>
              </thead>
              <tbody>
                {score.map((sco) => {
                  return (
                    <tr>
                      <th scope="row">{sco.name}</th>
                      <td>
                        {sco.first.collegeId} ( {sco.first.points} )
                      </td>
                      <td>
                        {sco.second.collegeId} ( {sco.second.points} )
                      </td>
                      <td>
                        {sco.third.collegeId} ( {sco.third.points} )
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScoreBoard;

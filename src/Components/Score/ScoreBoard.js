import score from "./score";
import NavBar from "../Launch/NavBar/NavBar";

const ScoreBoard = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <iframe
              className="score"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTYgMrPbhrnms5pKRns7os9MSQPQjz0deLByDNhfbf7THwcvsEFcF80khFZ2UAgu2UQBopKMjiVYNeo/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScoreBoard;

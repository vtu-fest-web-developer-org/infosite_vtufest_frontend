import { useState } from "react";
import { AutoCounter } from "../Timer/times.tsx";
import NavBar from "./NavBar/NavBar";

const Launch = () => {
  const [count, setCount] = useState(100000000);
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setCount(10);
    setClicked(true);
  };
  const redirect = () => {
    window.location.replace("/");
  };
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 col-12 mt-5">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {clicked ? (
              <AutoCounter
                count={count}
                setCount={setCount}
                redirect={redirect}
              />
            ) : (
              <button
                className="btn btn-danger countdown-btn"
                onClick={onClick}
              >
                {"   "}Launch!{"   "}
              </button>
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Launch;

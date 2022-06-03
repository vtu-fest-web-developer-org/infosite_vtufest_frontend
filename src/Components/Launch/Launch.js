import { useState } from "react";
import { AutoCounter } from "../Timer/times.tsx";

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
      <div>
        {clicked ? (
          <AutoCounter count={count} setCount={setCount} redirect={redirect} />
        ) : (
          <button onClick={onClick}>Launch!</button>
        )}
      </div>
    </>
  );
};

export default Launch;

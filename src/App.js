import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*Home*/}
          <Route exact path="/" element={"Home"} />
          {/*Home*/}
          <Route exact path="/home" element={"Home"} />
          {/*Event Schedule*/}
          <Route path="/eventschedlue" element={"Event Schedule"} />
          {/*Event Gui*/}
          <Route path="/eventschedlue" element={"Event Schedule"} />
          {/*Rules and Regulations*/}
          <Route path="/rulesregulations" element={"Rules and Regulations"} />
          {/*Chief Patrons*/}
          <Route path="/chiefpatrons" element={"Chief Patrons"} />
          {/*Organizing Committee*/}
          <Route path="/organisingcommittee" element={"Organizing Committee"} />
          {/*Contact Us*/}
          <Route path="/contactus" element={"Contact Us"} />
          {/*Not Found*/}
          <Route path="*" element={"Not Found"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

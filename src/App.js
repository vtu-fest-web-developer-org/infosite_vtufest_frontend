import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Components/Home/Home";
import EventsSchedule from "./Components/EventsSchedule/EventsSchedule";
import EventsGuidelines from "./Components/EventsGuidelines/EventsGuidelines";
import RulesRegulations from "./Components/RulesRegulations/RulesRegulations";
import ChiefPatrons from "./Components/ChiefPatrons/ChiefPatrons";
import OrganizingCommittee from "./Components/OrganizingCommittee/OrganizingCommittee";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*Home*/}
          <Route exact path="/" element={<Home />} />
          {/*Event Schedule*/}
          <Route path="/eventschedlue" element={<EventsSchedule />} />
          {/*Event Guidelines*/}
          <Route path="/eventsguidelines" element={<EventsGuidelines />} />
          {/*Rules and Regulations*/}
          <Route path="/rulesregulations" element={<RulesRegulations />} />
          {/*Chief Patrons*/}
          <Route path="/chiefpatrons" element={<ChiefPatrons />} />
          {/*Organizing Committee*/}
          <Route
            path="/organisingcommittee"
            element={<OrganizingCommittee />}
          />
          {/*Contact Us*/}
          <Route path="/contactus" element={<ContactUs />} />
          {/*Not Found*/}
          <Route path="*" element={"Not Found"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

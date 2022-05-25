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
import NotFound from "./Components/NotFound/NotFound";
import CommonFooter from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*Home*/}
          <Route exact path="/" element={<Home />} />
          {/*Event Schedule*/}
          <Route path="/eventschedule" element={<EventsSchedule />} />
          {/*Event Guidelines*/}
          <Route path="/eventsguidelines" element={<EventsGuidelines />} />
          {/*Rules and Regulations*/}
          <Route path="/rulesregulations" element={<RulesRegulations />} />
          {/*Data not yet available*/}
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <CommonFooter />
    </div>
  );
}

export default App;

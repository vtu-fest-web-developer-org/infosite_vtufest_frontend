import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Components/Home/Home";
import EventsSchedule from "./Components/EventsSchedule/EventsSchedule";
import EventsSummary from "./Components/EventsSummary/EventsSummary";
import RulesRegulations from "./Components/RulesRegulations/RulesRegulations";
import GeneralInstructions from "./Components/GeneralInstructions/GeneralInstructions";
import OrganizingCommittee from "./Components/OrganizingCommittee/OrganizingCommittee";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import CommonFooter from "./Components/Footer/Footer";
import Launch from "./Components/Launch/Launch";
import ScoreBoard from "./Components/Score/ScoreBoard";

function App() {
  const [views, setViews] = useState(0);
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/registration.prathibhotsava.in/visits")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setViews(json.value);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*Home*/}
          <Route exact path="/" element={<Home views={views} />} />
          {/*Event Schedule*/}
          <Route path="/eventschedule" element={<EventsSchedule />} />
          {/*Event Guidelines*/}
          <Route path="/eventsummary" element={<EventsSummary />} />
          {/*Rules and Regulations*/}
          <Route path="/rulesregulations" element={<RulesRegulations />} />
          {/*Data not yet available*/}
          {/*Chief Patrons*/}
          <Route
            path="/generalinstructions"
            element={<GeneralInstructions />}
          />
          {/*Organizing Committee*/}
          <Route
            path="/organisingcommittee"
            element={<OrganizingCommittee />}
          />
          {/*Contact Us*/}
          <Route path="/contactus" element={<ContactUs />} />
          {/*Score*/}
          <Route path="/score" element={<ScoreBoard />} />
          {/* Launch Route */}
          <Route path="/launch" element={<Launch />} />
          <Route path="/login" element={<Login />} />
          {/*Not Found*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <CommonFooter />
    </div>
  );
}

export default App;

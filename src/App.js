import React from "react";
import "./app.scss";
import HomePage from "./Pages/HomePage/HomePage";
import SingleCandidatePage from "./Pages/SingleCandidatePage/SingleCandidatePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ReportsPage from "./Pages/ReportsPage/ReportsPage";
import CreateReportPage from "./Pages/CreateReportPage/CreateReportPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/home-page">
          <HomePage />
        </Route>
        <Route path="/single-candidate-page">
          <SingleCandidatePage />
        </Route>
        <Route path="/reports-page">
          <ReportsPage />
        </Route>
        <Route path="/create-report-page">
          <CreateReportPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

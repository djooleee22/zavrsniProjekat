import React, { useEffect, useState } from "react";
import "./app.scss";
import HomePage from "./Pages/HomePage/HomePage";
import SingleCandidatePage from "./Pages/SingleCandidatePage/SingleCandidatePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ReportsPage from "./Pages/ReportsPage/ReportsPage";
import CreateReportPage from "./Pages/CreateReportPage/CreateReportPage";
import { Route, Switch } from "react-router-dom";
import { AppProvider } from "./Components/context";

function App() {
  const [candidatesList, setCandidatesList] = useState([]);
  const [companiesList, setCompaniesList] = useState([]);
  const [reportsList, setReportsList] = useState([]);
  const [singleReport, setSingleReport] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  function fetchData() {
    fetch("http://localhost:3333/664/api/candidates")
      .then((res) => res.json())
      .then((res) => setCandidatesList(res));

    fetch("http://localhost:3333/664/api/companies")
      .then((res) => res.json())
      .then((res) => setCompaniesList(res));

    fetch("http://localhost:3333/664/api/reports")
      .then((res) => res.json())
      .then((res) => setReportsList(res));
  }

  useEffect(fetchData, []);

  console.log(singleReport);

  return (
    <div>
      <Switch>
        <AppProvider
          value={{
            candidatesList,
            reportsList,
            companiesList,
            singleReport,
            setSingleReport,
            setModalOpen,
            modalOpen,
          }}
        >
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home-page">
            <HomePage />
          </Route>
          <Route path="/single-candidate-page/:id">
            <SingleCandidatePage />
          </Route>
          <Route path="/reports-page">
            <ReportsPage />
          </Route>
          <Route path="/create-report-page">
            <CreateReportPage />
          </Route>
        </AppProvider>
      </Switch>
    </div>
  );
}

export default App;

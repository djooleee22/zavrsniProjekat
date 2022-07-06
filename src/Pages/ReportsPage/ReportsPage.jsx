import React, { useContext, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./reportsPage.scss";
import { appCtx } from "../../Components/context";
import moment from "moment";

function ReportsPage(props) {
  const { reportsList } = useContext(appCtx);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedReports = searchValue
    ? reportsList.filter((report) => report.candidateName.includes(searchValue))
    : reportsList;

    
  if (!reportsList) return null;
  return (
    <div id="reports-page">
      <Header />
      <div className="main">
        <div className="search-bar">
          <input
            type="Search"
            onChange={handleSearch}
            value={searchValue}
            placeholder="Search"
          />
        </div>
        <div className="table">
          <div className="title">
            <div>Name</div>
            <div>Interview Date</div>
            <div className="company">Company</div>
            <div>Status</div>
            <div className="more">More</div>
          </div>

          {searchedReports.map((el) => (
            <div className="row">
              <div>{el.candidateName}</div>
              <div>{moment(el.interviewDate).format("DD.MM.YYYY")}</div>
              <div>{el.companyName}</div>
              <div>{el.status}</div>
              <div className="more-flex">
                <button>View</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReportsPage;

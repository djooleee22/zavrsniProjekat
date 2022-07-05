import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./reportsPage.scss";
import {appCtx} from "../../Components/context";
import moment from "moment";

function ReportsPage(props) {
  const reports = useContext(appCtx).reportsList;
  console.log(reports);
  if(!reports) return null;
  return (
    <div id="reports-page">
      <Header />
          <div className="main">
            <input type="Search" placeholder="Search" />
            <div className="table">
              <div className="title">
                <div>Name</div>
                <div>Interview Date</div>
                <div className="company">Company</div>
                <div className="status">Status</div>
                <div className="more">More</div>
              </div>

              {reports.map(el => <div className="row">
                <div>{el.candidateName}</div>
                <div>{moment(el.interviewDate).format("DD.MM.YYYY")}</div>
                <div>{el.companyName}</div>
                <div>{el.status}</div>
                <span>
                  <button>View</button>
                  <button>Delete</button>
                </span>
              </div>)}
            </div>
          </div>
      <Footer />
    </div>
  );
}

export default ReportsPage;

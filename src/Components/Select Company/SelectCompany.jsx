import React, { useContext } from "react";
import { appCtx } from "../context";
import "./selectCompany.scss";
import GoogleLogo from "../../images/companies/google.png";
import FacebookLogo from "../../images/companies/facebook.png";
import MicrosoftLogo from "../../images/companies/microsoft.png";
import TeslaLogo from "../../images/companies/tesla.png";
import AlphabetLogo from "../../images/companies/alphabet.png";
import { crpCtx } from "../context";

const Images = [
  GoogleLogo,
  FacebookLogo,
  MicrosoftLogo,
  TeslaLogo,
  AlphabetLogo,
];

function SelectCompany(props) {
  const dataCompany = useContext(appCtx).companiesList;
  const setCompany = useContext(crpCtx).setCompanySelected;
  const goToReportFill = useContext(crpCtx).goToReportFill;
  const backToCandidate = useContext(crpCtx).backToCandidate;

  return (
    <div id="select-company">
      <div className="flex-wrap">
        <h2>Select Company</h2>
        <input type="text" placeholder="Search.." />
      </div>

      <div className="company-wrapper">
        {dataCompany.map((el, index) => (
          <div key={index} onClick={()=>{
            setCompany(el);
          }} className="company-card">
            <img src={Images[index]} alt="slika" />
            <div className="company-info">
              <h2>{el.name}</h2>
              <h4>{el.email}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-wrap">
        <button onClick={backToCandidate} className="btn">Back</button>
        <button onClick={goToReportFill} className="btn">Next</button>
      </div>
    </div>
  );
}

export default SelectCompany;

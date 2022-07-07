import { computeHeadingLevel } from "@testing-library/react";
import React, { useContext } from "react";
import { appCtx } from "../context";
import "./selectCompany.scss";
import logo1 from "../../images/companies/logo1.jpg";
import logo2 from "../../images/companies/logo2.jpg";
import logo3 from "../../images/companies/logo3.webp";
import logo4 from "../../images/companies/logo4.jpg";
import logo5 from "../../images/companies/logo5.webp";
import logo6 from '../../images/companies/logo6.jpg'

const Images = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6
];

function SelectCompany(props) {
  const dataCompany = useContext(appCtx).companiesList;
  console.log(dataCompany);

  return (
    <div id="select-company">
      <div className="flex-wrap">
        {/* <h2>Select Company</h2> */}
        <input type="text" placeholder="Search.." />
      </div>

      <div className="company-wrapper">
        {dataCompany.map((el, index) => (
          <div key={index} className="company-card">
            <div className="green">
              <img src={Images[index]} alt="slika" />

            </div>
            <div className="company-info">
              <h2>{el.name}</h2>
              <p>{el.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-wrap">
        <button className="btn">Back</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
}

export default SelectCompany;

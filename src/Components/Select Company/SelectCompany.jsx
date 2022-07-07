import React, { useContext, useState } from "react";
import { appCtx } from "../context";
import "./selectCompany.scss";
import GoogleLogo from "../../images/companies/google.png";
import FacebookLogo from "../../images/companies/facebook.png";
import MicrosoftLogo from "../../images/companies/microsoft.png";
import TeslaLogo from "../../images/companies/tesla.png";
import AlphabetLogo from "../../images/companies/alphabet.png";

const Images = [
  GoogleLogo,
  FacebookLogo,
  MicrosoftLogo,
  TeslaLogo,
  AlphabetLogo,
];

function SelectCompany(props) {
  const companyData = useContext(appCtx).companiesList;
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedCompanies = () =>
    searchValue
      ? companyData.filter((company) => 
      company.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      : companyData;

  return (
    <div id="select-company">
      <div className="flex-wrap">
        <h2>Select Company</h2>
        <input
          type="text"
          onChange={handleSearch}
          value={searchValue}
          placeholder="Search.."
        />
      </div>

      <div className="company-wrapper">
        {searchedCompanies().map((el, index) => (
          <div key={index} className="company-card">
            <img src={Images[index]} alt="slika" />
            <div className="company-info">
              <h2>{el.name}</h2>
              <h4>{el.email}</h4>
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

import React, { useContext, useState } from "react";
import "./selectCandidate.scss";
import CandidateCard from "../CandidateCard/CandidateCard";
import { appCtx } from "../context";
import { crpCtx } from "../context";

function SelectCandidate(props) {
  const candidates = useContext(appCtx).candidatesList;
  const setCandidateSelected = useContext(crpCtx).setCandidateSelected;
  const candidateSelected = useContext(crpCtx).candidateSelected;

  const { candidatesList } = useContext(appCtx);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedCandidates = () =>
    searchValue
      ? candidatesList.filter((candidate) =>
          candidate.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : candidatesList;

  return (
    <div id="select-candidate">
      <div className="flex-wrap">
        <h2>Select Candidate</h2>
        <input
          type="text"
          onChange={handleSearch}
          value={searchValue}
          placeholder="Search.."
        />
      </div>

      <div className="card-wrapper">
        {searchedCandidates().map((el) => (
          <CandidateCard podaci={el} />
        ))}
      </div>

      {/*<div className="card-wrapper">
        {candidates.map((el) => (
          <div
            onClick={() => {
              setCandidateSelected(el);
            }}
            className="card"
          >
            <div className="flex">
              <img src={el.avatar} alt="user" />
              <h2>{el.name}</h2>
            </div>
            <div className="wrap-info">
              <h4>{el.education}</h4>
              <p>{el.email}</p>
            </div>
          </div>
        ))}
        </div>*/}
      <button className="btn">Next</button>
    </div>
  );
}

export default SelectCandidate;

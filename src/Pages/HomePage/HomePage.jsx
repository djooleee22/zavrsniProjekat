import React, { useContext, useState } from "react";
import "./homePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CandidateCard from "../../Components/CandidateCard/CandidateCard";
import { appCtx } from "../../Components/context";

function HomePage(props) {
  const { candidatesList } = useContext(appCtx);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    console.log("search Value ", event.target.value);
    setSearchValue(event.target.value);
  };

  const searchedCandidates = () =>
    searchValue
      ? candidatesList.filter((candidate) =>
          candidate.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : candidatesList;

  return (
    <div id="home-page">
      <Header />
      <div className="search-bar">
        <input
          type="text"
          onChange={handleSearch}
          value={searchValue}
          placeholder="Search"
        />
      </div>
      <div className="grid-wrapper">
        {searchedCandidates().map((el) => (
          <CandidateCard podaci={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

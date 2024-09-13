import React, { useState } from "react";
import PremiumCardsList from "../../components/PremiumCardsList/PremiumCardsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Heading from "../../components/Heading/Heading";
import "./PremiumPage.scss";

function PremiumPage({ selectedPremiums, setSelectedPremiums }) {
  return (
    <div className="premium-page">
      <Heading text="premiums" />
      <SearchBar />
      <PremiumCardsList
        selectedPremiums={selectedPremiums}
        setSelectedPremiums={setSelectedPremiums}
      />
    </div>
  );
}

export default PremiumPage;

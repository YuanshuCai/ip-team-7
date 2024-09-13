import React from "react";
import PremiumCardsList from "../../components/PremiumCardsList/PremiumCardsList";
import Heading from "../../components/Heading/Heading";
import "./PremiumPage.scss";

function PremiumPage({ selectedPremiums, setSelectedPremiums }) {
  return (
    <div className="premium-page">
      <Heading text="premiums" />
      <PremiumCardsList
        selectedPremiums={selectedPremiums}
        setSelectedPremiums={setSelectedPremiums}
      />
    </div>
  );
}

export default PremiumPage;

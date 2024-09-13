import React from "react";
import PremiumCardsList from "../../components/PremiumCardsList/PremiumCardsList";
import Heading from "../../components/Heading/Heading";
import "./PremiumPage.scss";

function PremiumPage() {
  return (
    <div className="premium-page">
      <Heading text="premiums" />
      <PremiumCardsList />
    </div>
  );
}

export default PremiumPage;

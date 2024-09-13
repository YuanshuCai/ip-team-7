import React, { useEffect } from "react";
import { useState } from "react";
import "./PremiumCardsList.scss";
import premiums from "../../assets/data/premiums.json";

const PremiumCardsList = ({ selectedPremiums, setSelectedPremiums }) => {
  const [premiumPackages, setPremiumPackages] = useState([]);

  useEffect(() => {
    const getPacks = () => {
      setPremiumPackages(premiums);
    };

    getPacks();
  }, []);

  const handleCardClick = (index) => {
    if (selectedPremiums.includes(index)) {
      setSelectedPremiums(selectedPremiums.filter((card) => card !== index));
    } else {
      setSelectedPremiums([...selectedPremiums, index]);
    }
  };

  return (
    <div className="premium-cards-list">
      {premiumPackages.map((premium) => (
        <div
          key={premium.id}
          className={`card-placeholder ${
            selectedPremiums.includes(premium.id) ? "selected" : ""
          }`}
          onClick={() => handleCardClick(premium.id)}
          style={{ backgroundImage: `url(${premium.image})` }}
        >
          <div className="checkmark">
            <input
              type="checkbox"
              checked={selectedPremiums.includes(premium.id)}
              onChange={() => handleCardClick(premium.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremiumCardsList;

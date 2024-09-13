import React, { useEffect, useState } from "react";
import './PremiumCardsList.scss';
import premiums from '../../assets/data/premiums.json'; 

const PremiumCardsList = ({ selectedPremiums, setSelectedPremiums }) => {
  const [premiumPackages, setPremiumPackages] = useState([]);

  useEffect(() => {

    setPremiumPackages(premiums);
  }, []);

  const handleCardClick = (id) => {
    setSelectedPremiums((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((premiumId) => premiumId !== id)
        : [...prevSelected, id]
    );
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
              readOnly
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremiumCardsList;
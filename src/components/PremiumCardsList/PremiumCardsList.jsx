import React, { useEffect } from "react";
import { useState } from "react";
import './PremiumCardsList.scss';
import premiums from '../../assets/data/premiums.json';

const PremiumCardsList = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [premiumPackages, setPremiumPackages] = useState([]);

  useEffect(() => {
    const getPacks = () => {
      setPremiumPackages(premiums);
    };

    getPacks();
  }, [])

  const handleCardClick = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((card) => card !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  return (
    <div className="premium-cards-list">
      {premiumPackages.map((premium, index) => (
        <div
          key={index}
          className={`card-placeholder ${
            selectedCards.includes(index) ? "selected" : ""
          }`}
          onClick={() => handleCardClick(index)}
          style={{backgroundImage: `url(${premium.image})`}}
        >
          <div className="checkmark">
            <input type="checkbox" checked={selectedCards.includes(index)} onChange={() => handleCardClick(index)}/>
          </div>
        </div>
      ))}
    </div>
  );
};


export default PremiumCardsList;
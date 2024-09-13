import React from "react";
import { useState } from "react";
import './PremiumCardsList.scss';

const PremiumCardsList = () => {
    const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((card) => card !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  return (
    <div className="premium-cards-list">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`card-placeholder ${
            selectedCards.includes(index) ? "selected" : ""
          }`}
          onClick={() => handleCardClick(index)}
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
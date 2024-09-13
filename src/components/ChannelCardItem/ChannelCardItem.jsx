import React, { useState } from 'react';
import './ChannelCardItem.scss';
import check from '../../assets/icons/check.svg';

const ChannelCardItem = ({ title, image }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleViewDetailsClick = () => {
    alert('View Details link clicked');
  };

  return (
    <div className="channel-card">
      <div className="channel-card__header">
        <div className="channel-card__checkbox" onClick={handleCheckboxClick}>
          {isChecked && <img src={check} alt="Checked" className="channel-card__check-icon" />}
        </div>
        <h2 className="channel-card__title">{title}</h2>
      </div>
      <div className="channel-card__image-container">
        <img src={image} alt={title} className="channel-card__image" />
      </div>
      <div className="channel-card__footer">
        <button onClick={handleViewDetailsClick} className="channel-card__details-link">
          View Details
        </button>
        <div className="channel-card__price">
          $10/mon
        </div>
      </div>
    </div>
  );
};

export default ChannelCardItem;

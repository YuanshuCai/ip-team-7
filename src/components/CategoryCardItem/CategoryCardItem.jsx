import React, { useState } from 'react';
import './CategoryCardItem.scss';
import check from '../../assets/icons/check.svg';

const CategoryCardItem = ({ title, icons }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="category-card">
      <div className="category-card__content">
        <div className="category-card__header">
          <div className="category-card__checkbox" onClick={handleCheckboxClick}>
            {isChecked && <img src={check} alt="Checked" className="category-card__check-icon" />}
          </div>
          <h2 className="category-card__title">{title}</h2>
        </div>
        <div className="category-card__icons">
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={`Icon ${index + 1}`} className="category-card__icon" />
          ))}
        </div>
        <p className="category-card__channels">4+ channels</p>
      </div>
      <div className="category-card__price">
        $10/mon
      </div>
    </div>
  );
};

export default CategoryCardItem;

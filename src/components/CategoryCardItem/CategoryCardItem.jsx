import React from "react";
import "./CategoryCardItem.scss";

const CategoryCardItem = ({
  title,
  icons,
  index,
  handleCheckboxChange,
  isSelected,
  price,
}) => {
  return (
    <div className="category-card">
      <div className="category-card__content">
        <div className="category-card__header">
          <input
            className="category-card__checkbox"
            type="checkbox"
            id={`category-${index}`}
            name="category"
            value={title}
            checked={isSelected}
            onChange={() => handleCheckboxChange(index)}
          />
          <h2 className="category-card__title">{title}</h2>
        </div>
        <div className="category-card__icons-channels">
          <div className="category-card__icons">
            {icons.slice(0, 3).map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Icon ${index + 1}`}
                className="category-card__icon"
              />
            ))}
            {icons.length > 3 && (
              <p className="category-card__more">+{icons.length - 3} more</p>
            )}
          </div>
        </div>
      </div>
      <div className="category-card__price">{price}$/mon</div>
    </div>
  );
};

export default CategoryCardItem;

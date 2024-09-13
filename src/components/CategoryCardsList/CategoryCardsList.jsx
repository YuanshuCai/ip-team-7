import React, { useState } from "react";
import CategoryCardItem from "../CategoryCardItem/CategoryCardItem.jsx";
import categories from "../../assets/data/channel_category.json";
import channels from "../../assets/data/channels.json";
import "./CategoryCardsList.scss";

const cardData = categories.map((category) => {
  const icons = category.channels.map((channelId) => {
    const channel = channels.find((ch) => ch.id === channelId);
    return channel ? channel.image : "";
  });

  return {
    id: category.category_id,
    title: category.category_name,
    icons: icons,
  };
});

const CategoryCardList = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };
  console.log(selectedCategories);
  return (
    <div className="category-card-list">
      <div className="category-card-list__row">
        {cardData.map((card, index) => (
          <CategoryCardItem
            key={index}
            index={card.id}
            handleCheckboxChange={handleCheckboxChange}
            title={card.title}
            icons={card.icons}
            isSelected={selectedCategories.includes(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCardList;

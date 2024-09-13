import React, { useState } from "react";
import CategoryCardItem from "../CategoryCardItem/CategoryCardItem.jsx";
import categories from "../../assets/data/channel_category.json";
import channels from "../../assets/data/channels.json";
import "./CategoryCardsList.scss";

const cardData = categories.map((category) => {
  let icons = [];
  let price = 0;

  category.channels.forEach((channelId) => {
    const channel = channels.find((ch) => ch.id === channelId);
    if (channel) {
      icons.push(channel.image);
      price += parseInt(channel.price);
    }
  });

  return {
    id: category.category_id,
    title: category.category_name,
    icons: icons,
    price: price,
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
            price={card.price}
            icons={card.icons}
            isSelected={selectedCategories.includes(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCardList;

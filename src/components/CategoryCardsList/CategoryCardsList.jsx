import React, { useEffect } from "react";
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
    channelIds: category.channels,
  };
});

const CategoryCardList = ({
  selectedCategories,
  setSelectedCategories,
  selectedChannels,
}) => {
  useEffect(() => {
    if (selectedChannels.length === 0) {
      setSelectedCategories([]);
    } else {
      const autoSelectedCategories = cardData
        .filter((category) =>
          category.channelIds.some((id) => selectedChannels.includes(id))
        )
        .map((category) => category.id);

      setSelectedCategories(autoSelectedCategories);
    }
  }, [selectedChannels, setSelectedCategories]);

  const handleCheckboxChange = (categoryId) => {
    if (selectedChannels.length === 0) {
      setSelectedCategories((prevSelected) => {
        if (prevSelected.includes(categoryId)) {
          return prevSelected.filter((id) => id !== categoryId);
        } else {
          return [...prevSelected, categoryId];
        }
      });
    }
  };

  return (
    <div className="category-card-list">
      <div className="category-card-list__row">
        {cardData.map((card, index) => (
          <CategoryCardItem
            key={index}
            index={card.id}
            title={card.title}
            price={card.price}
            icons={card.icons}
            isSelected={selectedCategories.includes(card.id)}
            handleCheckboxChange={() => handleCheckboxChange(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCardList;

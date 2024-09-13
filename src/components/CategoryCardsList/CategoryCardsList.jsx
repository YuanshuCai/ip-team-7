import React from "react";
import CategoryCardItem from "../CategoryCardItem/CategoryCardItem.jsx";
import packs from "../../assets/data/packs.json";
import channels from "../../assets/data/channels.json";
import "./CategoryCardsList.scss";

const cardData = packs.map((pack) => {
  const icons = pack.channels.map((channelId) => {
    const channel = channels.find((ch) => ch.id === channelId);
    return channel ? channel.image : "";
  });

  return {
    title: pack.title,
    icons: icons,
  };
});

const CategoryCardList = () => {
  return (
    <div className="category-card-list">
      <div className="category-card-list__row">
        {cardData.slice(0, 4).map((card, index) => (
          <CategoryCardItem key={index} {...card} />
        ))}
      </div>
      <div className="category-card-list__row">
        {cardData.slice(4).map((card, index) => (
          <CategoryCardItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCardList;

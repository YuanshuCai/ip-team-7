import React from 'react';
import CategoryCardItem from '../CategoryCardItem/CategoryCardItem.jsx';
import './CategoryCardsList.scss';

const cardData = [
  {
    title: 'Category 1',
    icons: ['https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24'],
  },
  {
    title: 'Category 2',
    icons: ['https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24'],
  },
  {
    title: 'Category 3',
    icons: ['https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24'],
  },
  {
    title: 'Category 4',
    icons: ['https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24'],
  },
  {
    title: 'Category 5',
    icons: ['https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24'],
  },
  {
    title: 'Category 6',
    icons: ['https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24'],
  },
  {
    title: 'Category 7',
    icons: ['https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24'],
  },
  {
    title: 'Category 8',
    icons: ['https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24', 'https://via.placeholder.com/24'],
  },
];

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
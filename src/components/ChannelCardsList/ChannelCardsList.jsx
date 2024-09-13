import React from 'react';
import ChannelCardItem from '../ChannelCardItem/ChannelCardItem.jsx';
import './ChannelCardsList.scss';

const cardData = [
    {
      title: 'Channel 1',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      title: 'Channel 2',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      title: 'Channel 3',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      title: 'Channel 4',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      title: 'Channel 5',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      title: 'Channel 6',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      title: 'Channel 7',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      title: 'Channel 8',
      imageSrc: 'https://via.placeholder.com/150',
    },
  ];
  
  const ChannelCardList = () => {
    return (
      <div className="channel-card-list">
        <div className="channel-card-list__row">
          {cardData.slice(0, 4).map((card, index) => (
            <ChannelCardItem key={index} {...card} />
          ))}
        </div>
        <div className="channel-card-list__row">
          {cardData.slice(4).map((card, index) => (
            <ChannelCardItem key={index} {...card} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ChannelCardList;
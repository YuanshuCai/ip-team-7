import ChannelCardItem from '../ChannelCardItem/ChannelCardItem.jsx';
import './ChannelCardsList.scss';

const ChannelCardList = ( {channels}) => {
  return (
    <div className="channel-card-list">
      <div className="channel-card-list__row">
        {channels && channels.map((card) => (
          <ChannelCardItem key={card.id} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default ChannelCardList;

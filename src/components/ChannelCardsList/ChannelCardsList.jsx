import ChannelCardItem from '../ChannelCardItem/ChannelCardItem.jsx';
import './ChannelCardsList.scss';
import channelsData from '../../assets/data/channels.json';

const ChannelCardList = () => {
  return (
    <div className="channel-card-list">
      <div className="channel-card-list__row">
        {channelsData.slice(0, 4).map((card) => (
          <ChannelCardItem key={card.id} title={card.title} image={card.image} />
        ))}
      </div>
      <div className="channel-card-list__row">
        {channelsData.slice(4, 8).map((card) => (
          <ChannelCardItem key={card.id} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default ChannelCardList;

import './ShowsModal.scss';
import ShowCard from "./ShowCard.jsx";
import testImage from "../../assets/images/test-lor.jpg";
import closeIcon from "../../assets/icons/close.png";
import showsData from "../../assets/data/shows.json";


const ShowsModal = ({ channelId, channelName, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <img src={closeIcon}
                     alt="Delete"
                     className="modal-close"
                     onClick={onClose}
                />
                <h2 className="modal-title">{channelName}</h2>
                <h4 className="modal-subtitle">popular shows</h4>
                <div className="shows-list">
                    {showsData.map((show) => (show.channel.includes(channelId) && <ShowCard key={show.id} thumbnail={show.image}
                                                        destinationPage={show.image}/>))}
                </div>
            </div>
        </div>
    );
};

export default ShowsModal;
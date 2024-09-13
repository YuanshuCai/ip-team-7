import './ShowCard.scss';


const ShowCard = ({ thumbnail, destinationPage }) => {
    return (
        <div className="show-card-container">
            <a className="show-thumbnail" href={destinationPage} target="_blank">
                {thumbnail && <img src={thumbnail}  alt="show thumbnail"/> }
            </a>
        </div>
    );
};

export default ShowCard;
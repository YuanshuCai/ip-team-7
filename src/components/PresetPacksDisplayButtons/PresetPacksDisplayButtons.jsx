import React, { useState } from "react";
import packsData from "./../../assets/data/packs.json";
import "./PresetPacksDisplayButtons.scss";

const PresetPacksDisplayButtons = () => {
  const [packs] = useState(packsData);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedPackId, setSelectedPackId] = useState(null);

  const handleLinkClick = (channels, id) => {
    setSelectedPackId(id);
    setSelectedChannels(channels);
  };

  const handleBuildYourOwnClick = () => {
    setSelectedPackId(null);
    setSelectedChannels([]);
  };

  return (
    <div>
      <div className="packs">
        {packs.map((pack) => (
          <p
            className={`packs-button${
              selectedPackId === pack.id ? "-selected" : ""
            }`}
            key={pack.id}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(pack.channels, pack.id);
            }}
          >
            {pack.title}
          </p>
        ))}
        {/* Build Your Own Button */}
        <p
          className={`packs-button${
            selectedPackId === null ? "-selected" : ""
          }`}
          onClick={handleBuildYourOwnClick}
        >
          Build Your Own
        </p>
      </div>
      {/* Display selectedChannels for review purpose */}
      <div className="channels">
        {selectedChannels.length > 0 &&
          `Channels: ${selectedChannels.join(", ")}`}
      </div>
    </div>
  );
};

export default PresetPacksDisplayButtons;

import React, { useState } from "react";
import packsData from "./../../assets/data/packs.json";
import "./PresetPacksDisplayButtons.scss";
const PresetPacksDisplayButtons = () => {
  const [packs] = useState(packsData);
  const [selectedChannels, setSelectedChannels] = useState([]);

  const handleLinkClick = (channels) => {
    setSelectedChannels(channels);
  };

  return (
    <div>
      <div className="packs">
        {packs.map((pack) => (
          <p
            className="packs-button"
            key={pack.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(pack.channels);
            }}
          >
            {pack.title}
          </p>
        ))}
      </div>
      {/* display selectedChannels for review purpose */}
      <div className="channels">
        {selectedChannels.length > 0 &&
          `Channels: ${selectedChannels.join(", ")}`}
      </div>
    </div>
  );
};

export default PresetPacksDisplayButtons;

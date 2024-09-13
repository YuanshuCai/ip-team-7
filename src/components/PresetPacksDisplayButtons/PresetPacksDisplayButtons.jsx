import React, { useState } from "react";
import packsData from "./../../assets/data/packs.json";

const PresetPacksDisplayButtons = () => {
  const [packs] = useState(packsData);
  const [selectedChannels, setSelectedChannels] = useState([]);

  const handleLinkClick = (channels) => {
    setSelectedChannels(channels);
  };

  return (
    <div>
      <div className="links">
        {packs.map((pack) => (
          <a
            key={pack.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(pack.channels);
            }}
          >
            {pack.title}
          </a>
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

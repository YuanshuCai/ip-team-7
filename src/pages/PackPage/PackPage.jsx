import Heading from "../../components/Heading/Heading";
import CategoryCardList from "../../components/CategoryCardsList/CategoryCardsList";
import PresetPacksDisplayButtons from "../../components/PresetPacksDisplayButtons/PresetPacksDisplayButtons";
import "./PackPage.scss";
import { useState } from "react";

function PackPage({ selectedCategories, setSelectedCategories }) {
  const [selectedChannels, setSelectedChannels] = useState([]);
  return (
    <div className="pack-page">
      <Heading text="theme packs" />
      <PresetPacksDisplayButtons setSelectedChannels={setSelectedChannels} />
      <CategoryCardList
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedChannels={selectedChannels}
      />
    </div>
  );
}

export default PackPage;

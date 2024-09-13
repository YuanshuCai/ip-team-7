import Heading from "../../components/Heading/Heading";
import CategoryCardList from "../../components/CategoryCardsList/CategoryCardsList";
import "./PackPage.scss";

function PackPage({ selectedCategories, setSelectedCategories }) {
  return (
    <div className="pack-page">
      <Heading text="theme packs" />
      <CategoryCardList
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
}

export default PackPage;

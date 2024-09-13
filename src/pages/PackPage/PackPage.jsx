import Heading from "../../components/Heading/Heading";
import CategoryCardList from "../../components/CategoryCardsList/CategoryCardsList";

function PackPage({ selectedCategories, setSelectedCategories }) {
  return (
    <div>
      <Heading text="theme packs" />
      <CategoryCardList
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
}

export default PackPage;

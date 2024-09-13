import React, {useEffect, useState} from "react";
import showsData from "./../../assets/data/shows.json"; // Assuming the file is in the same directory
import "./SearchBar.scss";
const SearchBar = ( { setResults } ) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for the Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Function to perform the search
  const handleSearch = () => {
    const filteredResults = showsData.filter((show) =>
      show.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div>
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a show..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default SearchBar;

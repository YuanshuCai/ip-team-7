import React, { useState } from "react";
import showsData from "./../../assets/data/shows.json"; // Assuming the file is in the same directory

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a show..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {/* This is just for test visibility */}
      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((show) => (
              <li key={show.id}>
                <div>
                  <img src={show.image} alt={show.title} />
                  <h4>{show.title}</h4>
                  <p>Channel: {show.channel.join(", ")}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

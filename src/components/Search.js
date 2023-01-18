import React from "react";

const Search = ({ onSearchFilter }) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearchFilter}
      />
    </div>
  );
};

export default Search;

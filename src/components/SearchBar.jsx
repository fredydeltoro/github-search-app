import { useState, useContext } from "react";
import { SearchContext } from "../SearchContext";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { setSearchQuery } = useContext(SearchContext);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(value);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        className="form-control"
        aria-label="Search"
        value={value}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default SearchBar;

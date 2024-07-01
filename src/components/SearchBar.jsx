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

  const handleSearch = () => {
    setSearchQuery(value);
  };

  const handleClear = () => {
    setValue("");
    setSearchQuery("");
  };

  return (
    <div className="search-container">
      <div className="input-group">
        <button className="btn-clear" onClick={handleClear}>
          {value && <i className="bi bi-x"></i>}
        </button>
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          aria-label="Search"
          value={value}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <button className="btn-search" onClick={handleSearch}>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "../assets/search-icon.svg";

function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {};

  return (
    <>
      <div className="flex  border-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="searchIcon"
          onClick={() => handleSearch()}
          className="bg-yellow-600 p-2"
        />
      </div>
    </>
  );
}

export default SearchBar;

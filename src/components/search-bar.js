import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "../assets/search-icon.svg";
import { searchBooks } from "../Store/bookSlice";

function SearchBar() {
  const [search, setSearch] = useState("");

  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

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

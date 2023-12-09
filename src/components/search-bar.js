import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "../assets/search-icon.svg";
import { searchBooks } from "../Store/bookSlice";
import bookImage from "../assets/book1.jpg";

function SearchBar() {
  const [search, setSearch] = useState("");

  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const handleSearch = () => {
    const searchedBooks = books.books.filter((book) => {
      if (book.name === search || book.isbno === search) {
        return true;
      }
      return false;
    });

    let searchPayload = {
      searchParam: search,
      books: searchedBooks,
    };

    dispatch(searchBooks(searchPayload));
  };

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
      {/* {serachBookpop === true ? (
        <div className="absolute top-48  bg-white w-80 flex justify-center p-10">
          {books.searchedBooks.map((eachserachbook) => {
            console.log(eachserachbook);
            return (
              <div>
                <div className=" shadow-lg rounded-lg">
                  <img
                    src={bookImage}
                    alt="book"
                    style={{ width: "200px", height: "200px" }}
                    className="w-60 rounded-lg h-52"
                  />

                  <div className="mt-2">{eachserachbook.name}</div>
                  <div>
                    <button className=" px-4 w-20 py-3 bg-black text-white font-bold  rounded-lg m-3">
                      Edit
                    </button>
                    <button className=" px-4 w-20 py-3 bg-black text-white font-bold  rounded-lg m-3">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null} */}
    </>
  );
}

export default SearchBar;

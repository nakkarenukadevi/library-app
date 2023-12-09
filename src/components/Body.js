import React, { useEffect } from "react";
import mockdata from "../mockdata.json";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../Store/bookSlice";

const Body = () => {
  const { books, search } = useSelector((state) => state.booksReducer);

  const booksToDisplay = search.searchParam ? search.books : books;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addBooks(mockdata?.books));
  }, []);

  return (
    <>
      <div className="  flex flex-wrap mx-32">
        {booksToDisplay.map((book) => {
          return <BookCard book={book} key={book.isbno} />;
        })}
      </div>
    </>
  );
};

export default Body;

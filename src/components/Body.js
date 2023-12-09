import React, { useEffect } from "react";
import mockdata from "../mockdata.json";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../Store/bookSlice";

const Body = () => {
  const { books } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addBooks(mockdata?.books));
  }, []);

  return (
    <>
      <div className="  flex flex-wrap mx-32">
        {books.map((book) => {
          return <BookCard book={book} key={book.isbno} />;
        })}
      </div>
    </>
  );
};

export default Body;

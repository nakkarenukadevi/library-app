import React, { useState } from "react";
import { createPortal } from "react-dom";
import bookImage from "../assets/book1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../Store/bookSlice";
import EditBook from "./editBook";

const BookCard = (props) => {
  const [editInfo, setEditInfo] = useState({
    showModel: false,
    book: {},
  });

  let dispatch = useDispatch();
  let { name, cost, isbno, availability, image } = props.book;
  let books = useSelector((state) => state.booksReducer.books);

  const deleteBook = (isbno) => {
    let updatedBooks = books.filter((book) => book.isbno !== isbno);
    dispatch(addBooks(updatedBooks));
  };

  const updateBook = (updatedBook) => {
    let updatedBooks = books.map((book) => {
      if (book.isbno === updatedBook.isbno) {
        return updatedBook;
      } else {
        return book;
      }
    });
    setEditInfo({ showModel: false });
    dispatch(addBooks(updatedBooks));
  };

  const renderEditModal = () => {
    return createPortal(
      <EditBook book={editInfo.book} updateBook={updateBook} />,
      document.body
    );
  };

  return (
    <div className="mx-4 my-4  text-center font-bold w-60">
      <div className=" shadow-lg rounded-lg">
        <img
          src={bookImage}
          alt="book"
          //   style={{ width: "200px", height: "200px" }}
          className="w-60 rounded-lg h-52"
        />

        <div className="mt-2">{name}</div>
        <div>
          <button
            className=" px-4 w-20 py-3 bg-black text-white font-bold  rounded-lg m-3"
            onClick={() => setEditInfo({ showModel: true, book: props.book })}
          >
            Edit
          </button>
          <button
            className=" px-4 w-20 py-3 bg-black text-white font-bold  rounded-lg m-3"
            onClick={() => deleteBook(isbno)}
          >
            Delete
          </button>
        </div>
      </div>
      {editInfo.showModel && renderEditModal()}
    </div>
  );
};

export default BookCard;

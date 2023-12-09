import React from "react";
import { useState } from "react";
function EditBook(props) {
  let { name, cost, availability, bookcategory, isbno } = props.book;
  let [editBook, setEditBook] = useState({
    name: name,
    cost: cost,
    availability: availability,
    bookcategory: bookcategory,
    isbno: isbno,
  });
  return (
    <div className="absolute top-60 left-80 bg-white border-2   min-w-[50%] min-h-[50%]">
      <div>
        Name:
        <input
          type="text"
          className="border-2 book-name"
          value={editBook.name}
          onChange={(e) => {
            setEditBook({ ...editBook, name: e.target.value });
          }}
        />
      </div>
      <div>
        cost:
        <input
          type="text"
          className="border-2 cook"
          value={editBook.cost}
          onChange={(e) => {
            setEditBook({ ...editBook, cost: e.target.value });
          }}
        />
        <div>
          Isbno:
          <input
            type="text"
            className="border-2 isbno"
            value={editBook.isbno}
            disabled={true}
          />
        </div>
        <div>
          Availability:
          <input
            type="text"
            className="border-2 availability"
            value={editBook.availability}
            onChange={(e) => {
              setEditBook({ ...editBook, availability: e.target.value });
            }}
          />
        </div>
        <div>
          Bookcategory:
          <input
            type="text"
            className="border-2"
            value={editBook.bookcategory}
            onChange={(e) => {
              setEditBook({ ...editBook, bookcategory: e.target.value });
            }}
          />
        </div>
        <div>
          <button type="submit" onClick={() => props.updateBook(editBook)}>
            Update Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBook;

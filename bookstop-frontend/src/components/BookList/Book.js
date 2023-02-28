import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = (book) => {
  const [cartBooks, setCartBooks] = useState([]);
  const handleClick = () => {
    setCartBooks([...cartBooks, book])
  };
  return (
    <div id="main-content">
      <div className="book-item flex flex-column flex-sb">
        <div className="book-item-img">
          <img src={book.cover_img} alt="cover" />
        </div>
        <div className="book-item-info text-center">
          <Link to={`/book/${book.id}`} {...book}>
            <div className="book-item-info-item title fw-7 fs-18">
              <span>{book.title}</span>
            </div>
          </Link>
          <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Owner: </span>
            <span>{book.author.join(", ")}</span>
          </div>
          <button onClick={handleClick} key={book.id} className="cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;

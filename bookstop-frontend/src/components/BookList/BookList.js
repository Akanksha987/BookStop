import React from "react";
import { useGlobalContext } from "../../context.";
import Book from "../BookList/Book";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

// https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const { books, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  return (
    <section className="booklist">
      <div className="container">
        <div className="filter-section">
          <h2>Filter</h2>
        </div>
        <div className="booklist-content grid">
          {/* Indivisual Book element being displayed */}
          {/* <div id="indivisual-book"> */}
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book id key={index} {...item} />;
          })}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default BookList;

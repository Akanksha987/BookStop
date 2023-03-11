import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import SearchForm from "../SearchForm/SearchForm";
import "../Navbar/Navbar";
import Navbar from "../Navbar/Navbar";
import data from "../../Server.json";
console.log({ data });

const BookList = () => {
  const { books, resultTitle } = useGlobalContext();
  const [cartBooks, setCartBooks] = useState([]);
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
  // const filterBooks=books.map(()=>{
  //   return{
  //     // id:
  //   }
  // })
  return (
    <section className="booklist">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="filter-section">
          <div>
            <h2>{resultTitle}</h2>
          </div>
          {/* Search bar to search the name of the book */}
          <div>
            <SearchForm />
          </div>
          {/* These are the filters of the type of book you need */}
          <div className="filters">
            <select>
              <option>{data.posts[5].Books[0].author}</option>
            </select>
            <select>
              <option>{data.posts[5].Books[0]["Course Associated"]}</option>
            </select>
            <select>
              <option>{data.posts[5].Books[0].Year}</option>
            </select>
            <select>
              <option>{data.posts[5].Books[0].edition}</option>
            </select>
          </div>
        </div>
        <div className="booklist-content grid">
          {/* Indivisual Book element being displayed */}
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book id key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;

import { useState } from "react";
import React from "react";
import Book from "../components/Book";

function Books({ books: initialBooks }) {
  const [books, setBooks] = useState(initialBooks);

function filterBooks(filter) {
  const sortedBooks = [...books];
  switch (filter) {
    case "LOW_TO_HIGH":
      sortedBooks.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
      break;
    case "HIGH_TO_LOW":
      sortedBooks.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
      break;
    case "RATING":
      sortedBooks.sort((a, b) => b.rating - a.rating);
      break;
    default:
      return;
  }
  setBooks(sortedBooks);
}

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="Default"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="Default" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;

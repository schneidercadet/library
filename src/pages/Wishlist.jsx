import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Ratings";
import Price from "../components/ui/Price";
import img from "../assets/Undraw_Wishlist.svg";

function Wishlist({ wishlist, removeFromWishlist, addToCart }) {
  return (
    <div id="page__wrapper">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Wishlist</h2>
            </div>
            {wishlist.length === 0 ? (
              <div className="wishlist__empty">
              <img src={img} alt="" className="cart__empty--img" />
              <h2>You don't have any books in your Wishlist</h2>
              <Link to="/books">
                <button className="btn">Browse books</button>
              </Link>
            </div>
            ) : (
              <div className="books">
                {wishlist.map((book) => (
                  <div className="book" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                      <figure className="book__img--wrapper">
                        <img src={book.url} alt="" className="book__img" />
                      </figure>
                    </Link>
                    <div className="book__title">
                      <Link to={`/books/${book.id}`} className="book__title--link">
                        {book.title}
                      </Link>
                    </div>
                    <Rating rating={book.rating} />
                    <div className="book__selected--price">
                    <Price
                        salePrice={book.salePrice}
                        originalPrice={book.originalPrice}
                    />
                    </div>
                    <div className="book__selected--actions" >
                      <button 
                        className="add__btn"
                        onClick={() => {
                          addToCart(book);
                          removeFromWishlist(book);
                        }}
                      >
                        Move to Cart
                      </button>
                      <button 
                        className="remove__btn"
                        onClick={() => removeFromWishlist(book)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Wishlist;
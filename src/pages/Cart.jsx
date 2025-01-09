import React from "react";
import EmptyCart from "../assets/Empty_Cart.svg";
import { Link } from "react-router-dom";

function Cart({ cart, setQuantity, removeFromCart, addToWishlist }) {
  const subtotal = cart.reduce((sum, book) => {
    const bookPrice = book.salePrice || book.originalPrice;
    return sum + bookPrice * book.quantity;
  }, 0);

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              {cart.length === 0 ? (
                <>
                  <div className="cart__header">
                    <span className="cart__book">Book</span>
                    <span className="cart__quantity">Quantity</span>
                    <span className="cart__total">Price</span>
                  </div>
                  <div className="cart__empty">
                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                    <h2>You don't have any books in your cart</h2>
                    <Link to="/books">
                      <button className="btn">Browse books</button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="cart__header">
                    <span className="cart__book">Book</span>
                    <span className="cart__quantity">Quantity</span>
                    <span className="cart__total">Price</span>
                  </div>
                  <div className="cart__body">
                    {cart.map((book) => {
                      const bookPrice = book.salePrice || book.originalPrice;
                      return (
                        <div className="cart__item" key={book.id}>
                          <div className="cart__book">
                            <img
                              src={book.url}
                              alt=""
                              className="cart__book--img"
                            />
                            <div className="cart__book--info">
                              <span className="cart__book--title">
                                {book.title}
                              </span>
                              <span className="cart__book-price">
                                ${bookPrice.toFixed(2)}
                              </span>
                              <button
                                className="cart__book--remove"
                                onClick={() => removeFromCart(book)}
                              >
                                Remove
                              </button>
                              <button
                                className="wish__book--remove"
                                onClick={() => addToWishlist(book)}
                              >
                                Wishlist
                              </button>
                            </div>
                          </div>
                          <div className="cart__quantity">
                            <input
                              type="number"
                              min={0}
                              max={99}
                              value={book.quantity}
                              onChange={(event) => {
                                const newValue = Math.min(
                                  Math.max(
                                    parseInt(event.target.value) || 0,
                                    0
                                  ),
                                  99
                                );
                                setQuantity(book.id, newValue);
                              }}
                              className="cart__quantity--input"
                            />
                          </div>
                          <div className="cart__total">
                            ${(bookPrice * book.quantity).toFixed(2)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="total">
                    <div className="total__item total__sub-total">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="total__item total__total__tax">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="total__item total__price">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="btn btn__checkout no-cursor">
                      Proceed to checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;

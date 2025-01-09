import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import "./main.css";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/Bookinfo.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function setQuantity(bookId, quantity) {
    setCart((prevCart) =>
      prevCart.map((book) => {
        if (book.id === bookId) {
          return { ...book, quantity: parseInt(quantity) };
        }
        return book;
      })
    );
  }

  const removeFromCart = (removeBook) => {
    setCart(cart.filter((book) => book.id !== removeBook.id));
  };

  function numberOfItems() {
    let counter = 0;
    cart.forEach((book) => {
      counter += +book.quantity;
    });
    return counter;
  }

  function addToWishlist(book) {
    const isInWishlist = wishlist.find((item) => item.id === book.id);
    if (!isInWishlist) {
      setWishlist([...wishlist, book]);
      setCart(cart.filter(item => item.id !== book.id));
    }
  }

  function removeFromWishlist(book) {
    setWishlist(wishlist.filter((item) => item.id !== book.id));
  }

  return (
    <BrowserRouter>
      <Nav cart={cart} numberOfItems={numberOfItems()} wishlist={wishlist} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route
          path="/books/:id"
          element={
            <BookInfo
              books={books}
              cart={cart}
              addToCart={addToCart}
              wishlist={wishlist}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              books={books}
              cart={cart}
              setQuantity={setQuantity}
              removeFromCart={removeFromCart}
              addToWishlist={addToWishlist}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

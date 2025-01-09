import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  faBars,
  faShoppingCart,
  faTimes,
  faTags,
  faBolt,
  faBookOpen,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
  faHeartCirclePlus,
  faHeartCircleMinus
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./main.css";
import App from "./App.jsx";

library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faTags,
  faBolt,
  faBookOpen,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
  faHeartCirclePlus,
  faHeartCircleMinus
);

createRoot(document.getElementById("root")).render(<App />);

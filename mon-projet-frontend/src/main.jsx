import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import ClothesContextProvider from "./context/context";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <ClothesContextProvider>
        <App />
      </ClothesContextProvider>
    </BrowserRouter>
  
);

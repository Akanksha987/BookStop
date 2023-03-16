import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Cart from "./pages/Cart/Cart";
import Sell from "./pages/Sell/Sell";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/SignUp/Login";
import NotFound from "./pages/not found/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

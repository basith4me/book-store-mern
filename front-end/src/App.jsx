import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/createBook.jsx";
import Home from "./pages/Home.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import ShowBooks from "./pages/ShowBooks.jsx";
import EditBook from "./pages/EditBook.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;

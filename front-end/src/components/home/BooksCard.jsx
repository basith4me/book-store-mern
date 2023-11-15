import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
//import { BiUseCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import BookSingleCard from "./BookSingleCard.jsx";

const BooksCard = ({books}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookSingleCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BooksCard;

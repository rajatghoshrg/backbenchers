// components/BookCard.jsx

import React from "react";
import Button from "./Button";
import { FaBookOpen } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div className="bg-[rgba(18,33,49,0.7)] border border-[#273647] rounded-3xl p-5 hover:border-[#5de6ff] transition-all duration-300">

      <div className="h-52 bg-[#0d1c2d] rounded-2xl flex items-center justify-center">
        <FaBookOpen className="text-6xl text-[#5de6ff]" />
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {book.title}
      </h3>

      <p className="text-[#94a3b8] mt-2">
        By {book.author}
      </p>

      <div className="flex justify-between items-center mt-6">
        <span className="text-[#5de6ff] font-bold">
          {book.price}
        </span>

        <Button
          text="Buy Now"
          variant="secondary"
        />
      </div>

    </div>
  );
};

export default BookCard;
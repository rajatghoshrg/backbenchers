// components/Library.jsx

import React from "react";
import books from "../data/books";
import BookCard from "./BookCard";

const Library = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#051424] text-white">

      <div className="flex justify-between items-center mb-12">

        <div>
          <h2 className="text-4xl font-bold">
            Elite <span className="text-[#5de6ff]">Library</span>
          </h2>

          <p className="text-[#94a3b8] mt-3">
            Books written by our mentors.
          </p>
        </div>

        <button className="text-[#5de6ff] hover:underline">
          View All →
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}

      </div>

    </section>
  );
};

export default Library;
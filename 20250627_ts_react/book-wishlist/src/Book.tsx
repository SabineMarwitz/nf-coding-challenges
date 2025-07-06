import type React from "react";
import { type BookType }  from "./types.ts";


export const BookListContent: React.FC<BookType[]> = ( bookList ) => (
  <ul>
    {bookList.map((book) => (
        <p>{book.title}, {book.author}, {book.read}</p>
    ))}
  </ul>
  );


export const Book: React.FC<BookType> = ({ title, author}: BookType) => {
    return <p>{title}, {author}</p>;
};

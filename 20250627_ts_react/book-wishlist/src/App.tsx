import { useState } from "react";
import "./App.css";
import { type BookType } from "./types.ts";

function App() {
  const myBookList: BookType[] = [
    {
      id: 1,
      title: "The Hobbit",
      author: "J. R. R. Tolkien",
      read: true,
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      read: false,
    },
  ];

  let nextId: number = myBookList.length;

  const [name, setName] = useState("");
  const [books, setBooks] = useState<BookType[]>(myBookList);

  return (
    <>
      <div>
        <h1>NF Project Book Wishlist</h1>
        <ul>
          {myBookList.map((book) => (
            <p>
              {book.title}, {book.author}, {book.read}
            </p>
          ))}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button
          onClick={() => {
            setBooks([
              ...books,
              { id: nextId++, title: name, author: "Unknown", read: false },
            ]);
          }}
        >
          Add Book
        </button>
      </div>
    </>
  );
}

export default App;

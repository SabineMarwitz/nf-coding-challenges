import { useState } from "react";
import "./App.css";
import Book from "./Book.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>NF Project Book Wishlist</h1>
        <Book title="The Hobbit" author="J. R. R. Tolkien" />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

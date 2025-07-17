import { useState } from "react";
import "./App.css";
import fetchPosts from "./Ex1";
import Exercise2 from "./Ex2";
//import exercise3 from './Ex3'
import exercise4 from "./Ex4";
import getPosts from "./Ex5";
import { userList, exercise7 } from "./Ex6";

function App() {
  //const [count, setCount] = useState(0)

  // ====================================================//
  // Part1: Usingfetch with TypeScript
  // ====================================================//

  // Exercise 1: Fetch & Log Posts
  console.log("Excercise 1");
  fetchPosts();

  // Excercise 2: Display Posts in the DOM
  // (see <Exercise 2/> in return)

  // Exercise 3: Handle Errors Gracefully
  //console.log("Excercise 3");
  //exercise3() TODO!

  // Exercise 4: Create a New Post with POST Request
  console.log("Excercise 4");
  exercise4();

  // ====================================================//
  // Part 2: Using axios with TypeScript
  // ====================================================//

  // Exercise 5: Install & Import Axios
  console.log("Excercise 5");
  getPosts();

  // Exercise 6: Use Axios to Get Users
  //console.log("Excercise 6");
  //console.log(userList); TODO!

  // Exercise 7: Create a New User (Fake)
  console.log("Excercise 7");
  exercise7();

  // Exercise 8: Build a Small UI for API Interaction
  // TODO!

  return (
    <>
      <Exercise2 />
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {books.map((book,index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

// function BookList() {
//   const getBook = (id) => {
//     const book = books.find((book) => book.id === id);
//     console.log(book);
//   };
//   return (
//     <>
//       <h1>Amazon Best Sellers</h1>
//       <section className="booklist">
//         {/* <EventExamples /> */}
//         {books.map((book) => {
//           return <Book {...book} key={book.id} getBook={getBook} />;
//         })}
//       </section>
//     </>
//   );
// }

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.value);

//     console.log("handle form input");
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("form submitted");
//   };
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={(e) => {
//             console.log(e.target.value)
//           }}
//           style={{ margin: "1rem 0" }}
//         ></input>
//       </form>

//       <button type="submit" >
//         submit
//       </button>
//       <div>
//         <button onClick={() => {
//           console.log("click me")
//         }} type="button">
//           click me
//         </button>
//       </div>
//     </section>
//   );
// };

// function BookList() {
//   return (
//     <>
//       <h1>Amazon Best Sellers</h1>
//       <section className="booklist">
//         {books.map((book) => {
//           return <Book {...book} key={book.id} />;
//         })}
//       </section>
//     </>
//   );
// }

// const BookList = () => {
//   return (
//     <section>
//       <Book />
//     </section>
//   );
// };

// const Book = () => {
//   return (
//     <article>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => <h2>Image Placeholder</h2>;
// const Title = () => <h2>Book Title</h2>;
// const Author = () => {
//   return <h4>Author</h4>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

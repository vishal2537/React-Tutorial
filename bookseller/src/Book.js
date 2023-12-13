
const Book = (props) => {
  const { img, title, author, number } = props;
  console.log(number)
  // const { img, title, author, getBook, id } = props;
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* <button onClick={getSingleBook(id)}>click me</button> */}
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

// const Book = (props) => {
//   const { img, title, author } = props;
//   const displayTitle = () => {
//     console.log(title);
//   };
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={displayTitle}>display Title</button>
//       <h4>{author}</h4>
//     </article>
//   );
// };

export default Book;

// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// export default Book;

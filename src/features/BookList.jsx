import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBooks,
  getAllBooks,
  deleteBooks,
  getBookStatus,
} from "./bookSlice.js";

export default function BookList() {
  const [deletingId, setDeletingId] = useState(null);

  //USE DISPATCH FUNCTION
  const dispatch = useDispatch();

  //GETTING ALL BOOKS
  const books = useSelector(getAllBooks);

  //GETTING FETCH STATUS FROM THE REDUX STORE
  const { fetchStatus, deleteStatus } = useSelector(getBookStatus);

  //FETCHING BOOKS
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = async (bookId) => {
    setDeletingId(bookId);
    await dispatch(deleteBooks(bookId));
    setDeletingId(null);
  };

  return (
    <>
      <ul className="list-group">
        {fetchStatus === "loading" && <p>Loading...</p>}
        {fetchStatus === "error" && <p>Error occured while fetcing the data</p>}
         {deleteStatus === "error" && <p>Error occured while deleting the book</p>}
        {books.length === 0 && <p>No Books Found</p>}
        {books.map((book) => (
          <li className="list-group-item" key={book._id}>
            {book.title || book.bookName} by {book.author}
            <button
              className="btn btn-danger btn-sm ms-5"
              onClick={() => handleDelete(book._id)}
              disabled={deletingId === book._id}
            >
              {deletingId === book._id ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

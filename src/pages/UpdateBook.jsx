import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  getAllBooks,
  getBookStatus,
  fetchBooks,
  updateBooks,
} from "../features/bookSlice";

export default function UpdateBook() {
  //USE NAVIGATE
  const navigate = useNavigate();

  //GETTING NAME WITH USEPARAM
  const { id } = useParams();
  console.log(id);

  //FORM DATA STATE
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    genre: "",
  });

  //GET ALL BOOKS FROM THE STATE
  const books = useSelector(getAllBooks);
  console.log(books);

  //USE DISPATCH FUNCTION
  const dispatch = useDispatch();

  //GETTING UPDATE STATUS FROM STORE
  const { updateStatus, fetchStatus } = useSelector(getBookStatus);
  console.log(updateStatus);
  console.log(fetchStatus);

  //FINDING THE MOVIE DETAILS WITH ID
  const foundBook = books.find((book) => book._id === id);

  console.log(foundBook);
  //useEffect fetch books
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    if (foundBook) {
      setFormData({
        bookName: foundBook.bookName,
        author: foundBook.author,
        genre: foundBook.genre,
      });
    }
  }, [foundBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(updateBooks({ id: id, formData }));
      console.log('Update Result:', result); // Add this for debugging
      // navigate("/books")
    } catch (error) {
      console.log("Update Error: ", error);
    }
  };

  return (
    <>
      <main className="container my-4">
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="bookName" className="form-label">
              Book Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="bookName"
              required
              value={formData.bookName}
              onChange={(e) =>
                setFormData({ ...formData, bookName: e.target.value })
              }
            />
          </div>
          <div className="mt-3">
            <label htmlFor="author" className="form-label">
              Book Author:
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              required
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />
          </div>
          <div className="mt-3">
            <label htmlFor="genre" className="form-label">
              Book Genre:
            </label>
            <input
              type="text"
              className="form-control"
              id="genre"
              required
              value={formData.genre}
              onChange={(e) =>
                setFormData({ ...formData, genre: e.target.value })
              }
            />
          </div>
          <button
            className="btn btn-primary mt-4"
            disabled={updateStatus === "loading"}
          >
            {updateStatus === "loading" ? "Saving" : "Save"}
          </button>
        </form>
      </main>
    </>
  );
}

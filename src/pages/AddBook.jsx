import { useDispatch, useSelector } from "react-redux";
import { postBooks, getBookStatus } from "../features/bookSlice.js";
import { useState } from "react";

export default function AddBook() {
  //FORM DATA STATE
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    genre: "",
  });

  //USE DISPATCH FUNCTION
  const dispatch = useDispatch();

  //GETTING ADD STATUS FROM STORE
  const addStatus = useSelector((state) => state.books.addStatus);

  //POSTING DATA
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(postBooks(formData));
      setFormData({
        bookName: "",
        author: "",
        genre: "",
      });
      console.log("Posted");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      <main className="container my-4">
        <h1>Add Book</h1>
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
            disabled={addStatus === "loading"}
          >
            {addStatus === "loading" ? "Adding" : "Add Book"}
          </button>
        </form>
      </main>
    </>
  );
}

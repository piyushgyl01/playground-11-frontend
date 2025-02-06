import { Link } from "react-router";

export default function App() {
  return (
    <main className="container text-center">
      <section className="my-4 row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <img
            src="https://tse3.mm.bing.net/th?id=OIG3.fCkSCKpum1vzxvegdP9S&pid=ImgGn"
            alt="hero-img"
            className="img-fluid rounded"
          />
          <h1 className="mt-4">Find the books you love!!</h1>
          <p>Get the collection of premium handpicked books</p>
          <Link className="btn btn-primary" to={"/books"}>View Books</Link>
        </div>
        <div className="col-md-2"></div>
      </section>
      <section className="my-4 row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <img
            src="https://tse2.mm.bing.net/th?id=OIG3.uIqEYqRF6Cdwdg71MsdB&pid=ImgGn"
            alt="hero-img"
            className="img-fluid rounded"
          />
          <h1 className="mt-4">Recommend Books!!</h1>
          <p>Add the book recommendations to the community</p>
          <Link className="btn btn-primary" to={"/add-book"}>Add Book</Link>
        </div>
        <div className="col-md-2"></div>
      </section>
    </main>
  );
}

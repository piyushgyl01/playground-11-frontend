import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { Provider } from "react-redux";

import store from "./app/store.js";

import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import AddBook from "./pages/AddBook.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";
import BookView from "./pages/BookView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/update-book",
        element: <UpdateBook />,
      },
      {
        path: "/books",
        element: <BookView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);

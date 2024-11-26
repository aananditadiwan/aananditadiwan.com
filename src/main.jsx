import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
// import ErrorPage from "./routes/ErrorPage.jsx";
// import Contact from "./routes/Contact.jsx";

// experience
// personal projects
// awards and certification
// about - extra currcicular and education
// open - github, linkedin

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   // {
//   //   path: "/about",
//   //   element: ,
//   // },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    {/* <RouterProvider router={router} /> */}
    <App />
    <Footer />
  </StrictMode>
);

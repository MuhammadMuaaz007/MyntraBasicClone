import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import Bag from "./Routes/Bag.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Routes/App.jsx";
import Home from "./Routes/Home.jsx";
import myntraStore from "./store/index.js";
import Profile from "./components/Profile.jsx";
import Wishlist from "./components/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      { path: "/profile", element: <Profile /> },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);

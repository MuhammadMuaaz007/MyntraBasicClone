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
import ProductDetail from "./Routes/ProductDetail.jsx";
import Search from "./Routes/Search.jsx";
import Category from "./Routes/Category.jsx";
import Contact from "./Routes/Contact.jsx";
import FAQ from "./Routes/FAQ.jsx";

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
      { 
        path: "/profile", 
        element: <Profile /> 
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/category/:category",
        element: <Category />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found! Make sure index.html has <div id='root'></div>");
  document.body.innerHTML = "<h1 style='padding: 20px; color: red;'>Error: Root element not found!</h1>";
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <Provider store={myntraStore}>
          <RouterProvider router={router} />
        </Provider>
      </StrictMode>
    );
    console.log("✅ React app rendered successfully!");
  } catch (error) {
    console.error("❌ Error rendering React app:", error);
    rootElement.innerHTML = `
      <div style="padding: 40px; text-align: center;">
        <h1 style="color: red;">Error Loading App</h1>
        <p>${error.message}</p>
        <p>Check the browser console (F12) for more details.</p>
      </div>
    `;
  }
}

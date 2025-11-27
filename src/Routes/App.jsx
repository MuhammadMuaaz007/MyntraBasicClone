import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

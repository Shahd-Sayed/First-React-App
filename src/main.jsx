import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Maincontent from './components/Maincontent';

createRoot(document.querySelector("#root")).render(
  <>
    <Navbar />
    <Maincontent/>
  </>
);

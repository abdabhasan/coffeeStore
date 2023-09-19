import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./navbar.scss";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const links = [
  {
    id: 1,
    text: "الرئيسية",
    url: "/",
  },
  {
    id: 2,
    text: "من نحن",
    url: "/about",
  },
  {
    id: 3,
    text: "الموزعون",
    url: "/agents",
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header ">
          <Link to="/">
            <img src={logo} alt="coffee store" />
          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

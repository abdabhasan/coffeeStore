import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./sidebar.scss";

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
    url: "/clients",
  },
];

const Sidebar = ({ isSidebarOpen }) => {
  const closeSidebar = () => {
    isSidebarOpen = false;
    1;
  };

  return (
    <div className="sidebar-container">
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="أرض القهوة" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, url, text }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;

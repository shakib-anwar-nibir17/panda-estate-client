import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/company-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-white bg-custom-main">
        <Link to="/">
          <div className="flex items-center gap-3">
            <img className="w-12 h-12" src={logo} alt="" />
            <h1 className="text-2xl font-extrabold">PANDA ESTATE</h1>
          </div>
        </Link>
        <Link onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Link>
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="text-base text-white pt-4 md:flex md:justify-between md:pt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "md:p-4 py-2 block text-custom-red-500"
                    : "md:p-4 py-2 block hover:text-custom-red-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "md:p-4 py-2 block text-custom-red-500"
                    : "md:p-4 py-2 block hover:text-custom-red-400"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "md:p-4 py-2 block text-custom-red-500"
                    : "md:p-4 py-2 block hover:text-custom-red-400"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/authentication"
                className={({ isActive }) =>
                  isActive
                    ? "md:p-4 py-2 block text-custom-red-500"
                    : "md:p-4 py-2 block hover:text-custom-red-400"
                }
              >
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

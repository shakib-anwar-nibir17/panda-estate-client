import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinks = (
    <>
      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Profile
        </NavLink>
      </li>
      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/create-listing"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Create Listing
        </NavLink>
      </li>
      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/user-listing"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          My Listing
        </NavLink>
      </li>

      <li className="pl-4 border-b-2 border-black py-4 hover:bg-black hover:text-white">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          HOME
        </NavLink>
      </li>

      <div className="pt-2 pb-6">
        <hr className="border-2 border-custom-main" />
      </div>
    </>
  );
  return (
    <div>
      <ul className="font-medium text-xl text-custom-red-400 space-y-6 pl-4">
        {navLinks}
      </ul>
    </div>
  );
};

export default Sidebar;

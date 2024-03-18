import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

const UserDashBoardLayout = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashBoardLayout;

import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Sidebar from "../components/common/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[336px] pr-4 bg-custom-main min-h-screen">
          <div className="text-3xl  uppercase mb-16">
            <h1 className="font-extrabold text-center text-custom-red-500">
              Panda Estate
            </h1>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

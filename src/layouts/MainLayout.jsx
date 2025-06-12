import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <Navbar />
    <main className="pt-[105px] min-h-screen">
      <Outlet />
    </main>
  </>
);

export default MainLayout;

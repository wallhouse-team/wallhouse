import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

<<<<<<< HEAD
const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='relative flex-1'>
        <div
          className='absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat z-0'
          style={{
            backgroundImage:
              "url('https://walldesign-tests-jgda.vercel.app/assets/bg-sklad-BclbMkb4.png')",
          }}
        >
          <div className='w-full h-full bg-black/60 backdrop-blur-sm'></div>
        </div>

        <main className='relative z-10 p-4 mt-[120px]'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
=======
const MainLayout = () => (
  <>
    <Navbar />
    <main className="pt-[105px] min-h-screen">
      <Outlet />
    </main>
  </>
);
>>>>>>> 9b7b23afe624b4c3910ba07289579f73d98958e6

export default MainLayout;

import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-black/60 bg-center blur-sm z-0"
        style={{
          backgroundImage:
            "url('https://walldesign-tests-jgda.vercel.app/assets/bg-sklad-BclbMkb4.png')",
          zIndex: -1,
        }}
      ></div>

      <div className="relative bg-black/60 p-8 rounded-xl text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Userpage</h1>

        <Link
          to="/goods"
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Tovarlar
        </Link>
        <Link
          to="/goodsshowcase"
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Tovarlarni vitrinaga junatish
        </Link>
      </div>
    </>
  );
};

export default UserPage;

<<<<<<< HEAD
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
=======
import { Link } from "react-router-dom";
>>>>>>> 9b7b23afe624b4c3910ba07289579f73d98958e6

const UserPage = () => {
  const location = useLocation();
  const isRootUserPage = location.pathname === '/user';

  return (
    <>
      <div className='relative bg-black/60 p-8 rounded-xl text-white text-center'>
        {isRootUserPage && (
          <h1 className='text-3xl font-bold mb-4'>Welcome to User Page</h1>
        )}

        <div className='mb-4'>
          <Link to='/user/vitrinalar' className='text-blue-400 underline mx-2'>
            Vitrinalar
          </Link>

<<<<<<< HEAD
          <Link to='/user/goods' className='text-blue-400 underline mx-2'>
            Goods
          </Link>
        </div>

        <Outlet />
=======
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
>>>>>>> 9b7b23afe624b4c3910ba07289579f73d98958e6
      </div>
    </>
  );
};

export default UserPage;

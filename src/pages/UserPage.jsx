import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

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

          <Link to='/user/goods' className='text-blue-400 underline mx-2'>
            Tovarlar
          </Link>
          <Link
            to='/user/goodstoshowcase'
            className='text-blue-400 underline mx-2'
          >
            Tovarlarni vitrinaga jo'natish
          </Link>

          <Link
            to='/user/goodsreturn'
            className='text-blue-400 underline mx-2'
          >
            Mahsulot qaytarish
          </Link>

          <Link
            to='/user/orderproduct'
            className='text-blue-400 underline mx-2'
          >
            Mahsulot zakaz qilish
          </Link>

          <Link
            to='/user/reports'
            className='text-blue-400 underline mx-2'
          >
            Hisobotlar omborlarniki
          </Link>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default UserPage;

import React from 'react';

const UserPage = () => {
  return (
    <>
      <div
        className='absolute inset-0 bg-cover bg-black/60 bg-center blur-sm z-0'
        style={{
          backgroundImage:
            "url('https://walldesign-tests-jgda.vercel.app/assets/bg-sklad-BclbMkb4.png')",
          zIndex: -1,
        }}
      ></div>

      <div className='relative bg-black/60 p-8 rounded-xl text-white text-center'>
        <h1 className='text-3xl font-bold mb-4'>Welcome to Userpage</h1>
      </div>
    </>
  );
};

export default UserPage;

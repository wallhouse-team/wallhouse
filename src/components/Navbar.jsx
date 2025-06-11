import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleGoBack = () => {
    if (location.pathname !== '/') {
      navigate(-1);
    }
  };

  return (
    <nav className='w-full h-[105px] left-0 top-0 flex justify-between fixed z-10 items-center mb-6 md:mb-10 py-6 px-6 md:px-6 bg-[#17212b]  shadow-xl'>
      <div className='flex items-center space-x-4 cursor-pointer'>
        <button onClick={handleGoBack} className='focus:outline-none'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 448 512'
            className='h-4 w-4 md:h-6 md:w-6 text-yellow-200 cursor-pointer'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z'></path>
          </svg>
        </button>

        <img src={logo} alt='Logo' className='h-22 w-22 object-contain' />
        <Link
          to='/'
          className='text-white font-semibold text-xl hover:underline'
        ></Link>
      </div>

      <div className='flex items-center space-x-6 text-white'>
        {user?.data && (
          <div className='flex flex-col items-center text-sm md:text-base'>
            <span className='hidden md:inline'>{user.data.name}</span>
            <span className='text-yellow-400 capitalize'>{user.data.role}</span>
          </div>
        )}

        <button
          onClick={handleLogout}
          className='bg-yellow-400 text-black px-4 py-1 rounded-md hover:bg-yellow-500 transition cursor-pointer'
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

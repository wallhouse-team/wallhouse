import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const { pathname } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(phone, password);
    } catch (err) {
      console.error(err);
      setError('Login failed. Please check your credentials.');
    }
  };

  useEffect(() => {
    if (user && user.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  }, [navigate, user]);

  // if (isLoggedIn && pathname === '/login') {
  //   if (user.role === 'admin') {
  //     navigate('/admin');
  //   } else {
  //     navigate('/user');
  //   }
  // }

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center px-4'
      style={{
        backgroundImage:
          "url('https://walldesign-tests-jgda.vercel.app/assets/bg-login-C8OsGxgu.jpg')",
      }}
    >
      <div className='w-full md:w-1/2 flex items-center justify-center relative z-10'>
        <form
          onSubmit={handleSubmit}
          className='bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-white/20 relative overflow-hidden'
        >
          <div className='absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none'></div>
          <div className='absolute inset-4 border-2 border-white/10 rounded-xl pointer-events-none'></div>
          <h2 className='text-3xl font-bold mb-8 text-center text-white bg-clip-text '>
            Login
          </h2>
          <div className='mb-6'>
            <label className='block text-white/80 text-sm font-bold mb-2'>
              Username
            </label>
            <input
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter username'
              className='w-full px-4 py-3  border-2 border-white/20 rounded-xl focus:outline-none focus:border-white/40 bg-white/10 text-white placeholder-white/50 transition-all duration-300'
            />
          </div>

          <div className='mb-4 relative'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='••••••••'
              className='w-full px-4 py-3 border-2 border-white/20 rounded-xl focus:outline-none focus:border-white/40 bg-white/10 text-white placeholder-white/50 transition-all duration-300 pr-12'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-9 text-gray-700 cursor-pointer hover:text-gray-800'
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type='submit'
            className='w-full cursor-pointer py-3 px-6 rounded-xl bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 focus:ring-offset-yellow-100 transition-all duration-300 border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-lg hover:shadow-xl active:scale-95'
          >
            Login
          </button>

          {error && (
            <p className='text-red-600 text-sm mt-3 text-center'>{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

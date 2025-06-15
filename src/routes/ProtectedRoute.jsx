import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    if (pathname !== '/login' && !isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate, pathname]);

  return <>{children}</>;
};

export default ProtectedRoute;

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to='/login' />;
  }

  // If a specific role is required and user doesn't match
  if (role && user?.role !== role) {
    return <Navigate to='/' />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;

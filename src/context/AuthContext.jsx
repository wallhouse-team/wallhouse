import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { loginAdmin } from '../services/WarehouseApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = async (username, password) => {
    try {
      const { data } = await loginAdmin(username, password);
      setToken(data.accessToken);
      localStorage.setItem('token', data.accessToken);
      toast.success('Login successful');
    } catch (error) {
      toast.error('Login failed: Invalid username or password');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isLoggedIn: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

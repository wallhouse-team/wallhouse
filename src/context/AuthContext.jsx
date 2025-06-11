import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginAdmin } from "../services/WarehouseApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    const initializeUser = async () => {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        setUser(JSON.parse(localUser));
      }

      if (token && !localUser) {
        const fetchedUser = await getUser(token);
        if (fetchedUser) {
          setUser(fetchedUser);
          localStorage.setItem("user", JSON.stringify(fetchedUser));
        } else {
          logout();
        }
      }
    };

    initializeUser();
  }, [token]);

  const getUser = async (token) => {
    try {
      const response = await fetch(
        "https://testwalldesign.limsa.uz/auth/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
  };

  const login = async (username, password) => {
    try {
      const { data } = await loginAdmin(username, password);
      console.log(data);

      setToken(data.accessToken);
      localStorage.setItem("token", data.accessToken);

      const user = await getUser(data.accessToken);
      setUser(user.data);
      localStorage.setItem("user", JSON.stringify(user.data));

      toast.success("Login successful");
    } catch (error) {
      toast.error("Login failed: Invalid username or password");
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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

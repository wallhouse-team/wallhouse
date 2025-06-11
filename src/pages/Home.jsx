import { useAuth } from "../context/AuthContext";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

const Home = () => {
  const { user } = useAuth();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {user.role === "admin" ? <AdminPage /> : <UserPage />}
    </section>
  );
};

export default Home;

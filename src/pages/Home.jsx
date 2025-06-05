import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <section>
      <h1>Welcome to Wallhouse</h1>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export default Home;

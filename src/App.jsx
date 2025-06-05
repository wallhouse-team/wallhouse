import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
// import Layout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position='top-right' autoClose={3000} />
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import Layout from './layouts/MainLayout';
import AdminPage from './pages/AdminPage';
import Login from './pages/Login';
import UserPage from './pages/UserPage';
import Vitrinalar from './pages/Vitrinalar';
import ProtectedRoute from './routes/ProtectedRoute';
import Goods from './pages/Goods';
import GoodsShowcase from './pages/GoodsShowcase';
import SendToShowcase from './pages/SendToShowcase';
import GoodsReturn from './pages/GoodsReturn';
import Returns from './pages/Returns';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path='admin' element={<AdminPage />} />
          <Route path='user' element={<UserPage />} />
          <Route path='user/vitrinalar' element={<Vitrinalar />} />
          <Route path='user/goods' element={<Goods />} />
          <Route path='user/goodstoshowcase' element={<GoodsShowcase />} />
          <Route
            path='user/goodstoshowcase/sendtoshow'
            element={<SendToShowcase />}
          />
          <Route path='user/goodsreturn' element={<GoodsReturn />} />
          <Route
            path='user/goodsreturn/return'
            element={<Returns />}
          />
        </Route>
      </Routes>

      <ToastContainer position='top-right' autoClose={3000} />
    </>
  );
}

export default App;

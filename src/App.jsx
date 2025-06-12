import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import GoodsShowcase from "./pages/GoodsShowcase";
import Layout from "./layouts/MainLayout";
import Goods from "./pages/Goods";
import SendToShowcase from "./pages/SendToShowcase";
import { ToastContainer } from "react-toastify";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected Routes under Layout */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />

          <Route
            path="admin"
            element={
              <ProtectedRoute role="admin">
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="user"
            element={
              <ProtectedRoute role="user">
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="goods"
            element={
              <ProtectedRoute>
                <Goods />
              </ProtectedRoute>
            }
          />
          <Route
            path="goodsshowcase"
            element={
              <ProtectedRoute>
                <GoodsShowcase />
              </ProtectedRoute>
            }
          />
          <Route
            path="sendtoshowcase"
            element={
              <ProtectedRoute>
                <SendToShowcase />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

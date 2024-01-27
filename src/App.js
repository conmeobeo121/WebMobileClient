import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/buttons/Login";
import Signup from "./components/buttons/Signup";
import Message from "./components/Message/Message";
import NotFound404 from "./components/NotFound404/NotFound404";
import ProtectedProfile from "./components/ProtectedProfile/ProtectedProfile";
import AdminProfile from "./components/Admin/AdminProfile/AdminProfile";
import UserManager from "./components/Admin/UserManager/UserManager";
import UpdateManager from "./components/Admin/UpdateManager/UpdateManager";
import ManagerProfile from "./components/Manager/ManagerProfile/ManagerProfile";
import ProductManager from "./components/Manager/ProductManager/ProductManager";
import UpdateProduct from "./components/Manager/UpdateProduct/UpdateProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/protected-profile" element={<ProtectedProfile />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route
            path="/admin-profile/user-management"
            element={<UserManager />}
          />
          <Route
            path="/admin-profile/user-management/add"
            element={<UpdateManager />}
          />
          <Route
            path="/admin-profile/user-management/update/:id"
            element={<UpdateManager />}
          />

          <Route path="/manager-profile" element={<ManagerProfile />} />
          <Route
            path="/manager-profile/product-manager"
            element={<ProductManager />}
          />
          <Route
            path="/manager-profile/product-manager/add"
            element={<UpdateProduct />}
          />
          <Route
            path="/manager-profile/product-manager/update/:id"
            element={<UpdateProduct />}
          />
          <Route path="/admin-message" element={<Message />} />
          <Route path="/not-Found404" element={<NotFound404 />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

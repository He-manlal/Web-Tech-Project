import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Authentication/login/login";
import SignUp from "./pages/Authentication/signup/signup";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import ForgotPassword from "./pages/Authentication/forgotPassword/forgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import ResetPassword from "./pages/Authentication/resetPassword/ResetPassword";
import Goals from "./pages/Goals/Goal";




import Sidebar from "./pages/Sidebar/SideBar";
import Analytics from './pages/Sidebar/Analytics.jsx';
import Comment from './pages/Sidebar/Comment.jsx';
import Product from './pages/Sidebar/Product.jsx';
import ProductList from './pages/Sidebar/ProductList.jsx';
import BMICalculator from "./pages/Sidebar/BMICalculator/BMICalculator.jsx";











const App = () => {
  const { pathname } = useLocation();
  const isLoginPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgotpassword" ||
    pathname === "/dashboard" ||
    pathname.startsWith("/resetpassword") ||
    pathname.startsWith("/goals") ||
    pathname.startsWith("/side");
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="resetpassword/:token" element={<ResetPassword />} />






        <Route path="bmi" element={<BMICalculator />} />

        <Route path="goals" element={<Goals />} />

        <Route path="sidebar" element={<Sidebar />} />
        <Route path="goals" element={<Goals />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />






          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
};

export default App;

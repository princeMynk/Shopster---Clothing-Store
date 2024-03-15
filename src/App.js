import React from "react";
import Navbar2 from "./components/NavbarMain/Navbar2";

import { Routes, Route } from "react-router-dom";

// DATA IMPORT
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Blog from "./pages/Blog";
import Accessories from "./pages/Accessories";
import FAQ from "./pages/FAQ";
import Shoe from "./pages/Shoe";
import Watch from "./pages/Watch";
import CheckOut from "./pages/CheckOut";

// FOOTER
import Footer from "./components/Footer/Footer";
import Return from "./pages/Return";
import ShippingPolicy from "./pages/ShippingPolicy";
import R_R_C from "./pages/R_R_C";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FraudProtection from "./pages/FraudProtection";

// SCROLL TO TOP
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./pages/Cart";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import WishList from "./components/WishList/WishList";
import MenBottom from "./pages/MenBottom";
import MensBlazers from "./pages/MensBlazers";
import WomenTop from "./pages/WomenTop";
import WomenBottom from "./pages/WomenBottom";

function App() {
  return (
    <div>

      <ScrollToTop/>

      <Navbar2 />

        <Routes>
          {/* NAVBAR */}
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/menblazers" element={<MensBlazers/>}/>
          <Route path="/menbottom" element={<MenBottom/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/womenbottom" element={<WomenBottom/>}/>
          <Route path="/womentop" element={<WomenTop/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/shoe"element={<Shoe/>}/>
          <Route path="/watch"element={<Watch/>}/>


          {/* FOOTER */}
          <Route path="/return" element={<Return/>}/>
          <Route path="/shippingpolicy" element={<ShippingPolicy/>}/>
          <Route path="/rrc" element={<R_R_C/>}/>
          <Route path="/termscondition" element={<TermsCondition/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/fraudprotection" element={<FraudProtection/>}/>


          <Route path="/productdetails" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/loginsignup" element={<LoginSignup/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/wishlist" element={<WishList/>}/>

        </Routes>

        <Footer/>
      
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Newslatteer } from "./Newslatteer";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { ShopSinglePage } from "./pages/ShopSinglePage/ShopSinglePage";
import { Login } from "./pages/LoginPage/Login";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop-single" element={<ShopSinglePage />} />
        {/* <Route path="login" element={<Login/>} />  */}
      </Routes>
        <Newslatteer />
      </main>
      <Footer />
    </>
  );
}

export default App;

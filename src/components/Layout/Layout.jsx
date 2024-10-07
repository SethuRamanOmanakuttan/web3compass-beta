// src/components/Layout/Layout.js

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-retro-white text-retro-black font-retro'>
      <Header />
      <main className='flex-grow container mx-auto px-4 py-8'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

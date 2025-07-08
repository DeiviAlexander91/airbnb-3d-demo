// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#fff9f6] text-black font-sans">
      <main className="w-full px-4 py-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;


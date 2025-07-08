// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-rose-50 text-gray-800">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;


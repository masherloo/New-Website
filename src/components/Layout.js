import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full z-10 inline-block bg-light p-24 xl:p-20 lg:p-12 md:p-8 sm:p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;



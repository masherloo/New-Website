import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full z-0 inline-block bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;



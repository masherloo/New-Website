import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full z-0 inline-block bg-light p-32 xl:pd-24 lg:pd-16 md:pd-12 sm:pd-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;



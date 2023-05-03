import React from "react";
import LoadingPageText from "./LoadingPageText";

const LoadingPage = ({ show }) => {
  const displayClass = show ? "opacity-100" : "opacity-0";
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-500 ${displayClass}`}
    >
      <LoadingPageText
        text="A S H E R L O O"
        className="!text-8xl 2xl:!text-6xl xl:!text-6xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
      ></LoadingPageText>
    </div>
  );
};

export default LoadingPage;

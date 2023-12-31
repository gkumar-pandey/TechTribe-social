import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1444px] px-1 sm:px-0  mx-auto relative">
      {children}
    </div>
  );
};

export default Container;

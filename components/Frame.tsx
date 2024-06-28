import React from "react";

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative z-20 overflow-hidden rounded-3xl border border-black-0 bg-black-0 p-1">
      {children}
    </div>
  );
};

export default Frame;

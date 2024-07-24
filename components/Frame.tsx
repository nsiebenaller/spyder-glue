import React from "react";

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative z-20 overflow-hidden bg-green-3 p-1">
      {children}
    </div>
  );
};

export default Frame;

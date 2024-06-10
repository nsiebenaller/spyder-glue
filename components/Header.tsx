import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 grid h-12 grid-cols-3 items-center px-8 text-white">
      <div className="flex gap-4">
        <div>Products</div>
        <div>Resources</div>
      </div>
      <div>
        <div className="flex flex-1 justify-center">Spyder Glue</div>
      </div>
      <div className="flex justify-end">
        <div>Contact Us</div>
      </div>
    </header>
  );
};

export default Header;

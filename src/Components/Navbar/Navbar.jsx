import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white p-4 px-4 shadow-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between max-lg:flex-col max-lg:gap-4">
        <span className="text-2xl font-bold max-lg:text-3xl">CS — Ticket System</span>
        <div className="flex items-center gap-5 max-lg:flex-col">
          <div className="flex items-center gap-7 font-medium">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">Changelog</a>
            <a href="#">Blog</a>
            <a href="#">Download</a>
            <a href="#">Contact</a>
          </div>

          <button className="rounded-md bg-gradient-to-br from-purple-600 to-purple-300 px-4 py-2 font-medium text-white">+ New Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

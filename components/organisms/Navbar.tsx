import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-20 w-screen items-center justify-center bg-white shadow-lg">
      <Link
        href="/"
        className="font-geist-mono text-2xl font-bold text-blue-600"
      >
        My Boost FE
      </Link>
    </div>
  );
};

export default Navbar;

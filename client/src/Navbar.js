import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Home
        </Link>
        <div>
          <Link to="/myblogs" className="text-white mr-4">
            MyBlogs
          </Link>
          <Link to="/create" className="text-white mr-4">
            Create
          </Link>
          <Link to="/login" className="text-white mr-4">
            Login
          </Link>
          <Link to="/signup" className="text-white mr-4">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

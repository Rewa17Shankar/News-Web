import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, signInAnonymously } from "firebase/auth";
import { auth } from "../firebase/Firebase"; // Adjust path if needed
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out.");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };



  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo and title */}
        <div className="flex items-center space-x-3">
          <img
            src="../1.jpeg" // Replace with your logo path
            alt="Logo"
         className="h-12 w-12 object-cover rounded-full cursor-pointer transition duration-500 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_rgba(96,165,250,0.6),0_0_40px_rgba(147,197,253,0.4),0_0_60px_rgba(191,219,254,0.2)]"
          />

          <h2 className="text-xl font-semibold text-gray-800">Headliner</h2>
        </div>

        {/* Links and search */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Headline
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact Us
          </Link>
          <Link to="/allnews" className="text-gray-700 hover:text-blue-600 transition">
            All News
          </Link>

          
        </div>

        {/* Login/Signup or User Info */}
        <div>
          {user ? (
           <div className="relative group cursor-pointer">
              <div className="flex items-center space-x-4">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center text-white uppercase font-bold">
                    {(user.displayName && user.displayName.length > 0
                      ? user.displayName.charAt(0).toUpperCase()
                      : user.email && user.email.length > 0
                        ? user.email.charAt(0).toUpperCase()
                        : "U"
                    )}
                  </div>
                )}
                <span className="text-gray-800 font-medium">
                  {user.isAnonymous ? "Guest" : user.displayName || user.email || "User"}
                </span>
              </div>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer">
                    <Link to="/liked-posts">Liked Posts</Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>

          ) : (
            <Link to="/Login" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out" >Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

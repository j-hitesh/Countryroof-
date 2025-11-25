import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [open, setOpen] = useState(false); // dropdown toggle

  const menushow = () => {
    setShowMenuBar(prev => !prev);
  };

  return (
    <div className="flex justify-between w-full h-15 sm:h-auto bg-gray-700 text-white px-4 py-4 rounded-b-lg fixed top-0 z-10 mb-10">

      <img
        src="https://countryroof.in/upload/logo/1819668946722953.png"
        alt="InfoBirth log"
        className="w-1/8"
      />

      <div className="flex md:gap-x-30">

        <ul
          className={`absolute top-12 right-0 shadow-xl shadow-gray-400 rounded-r-lg pt-5 px-5 w-64 text-2xl transition-all duration-300 
            ${showMenuBar ? "h-screen bg-gray-700 sm:hidden" : "hidden"}`}
        >
          <li className={menu === "Home" ? "text-red-700" : "hover:text-red-500"}>
            <Link to="/" onClick={menushow}>Home</Link>
          </li>

          <li
            onClick={() => setOpen(!open)}
            className={`cursor-pointer ${open ? "text-red-700" : "hover:text-red-500"}`}
          >
          Property
          </li>

          {open && (
            <div className="ml-5 mt-1">
              <Link to="/Buy" onClick={() => { menushow(); setOpen(false); }}>Buy</Link><br />
              <Link to="/Sell" onClick={() => { menushow(); setOpen(false); }}>Sell</Link>
            </div>
          )}

          <li className={menu === "News" ? "text-red-700" : "hover:text-red-500"}>
            <Link to="/News" onClick={menushow}>News</Link>
          </li>

          <li className="pt-100 text-lg">
            <h4>Contact Info</h4>
            <ul>
              <li>IRIS Tech Park, Unit No. 407</li>
              <li><a href="tel:9355500043">+91-9355500043</a></li>
              <li><a href="mailto:info@countryroof.in">info@countryroof.in</a></li>
            </ul>
          </li>
        </ul>

        <ul className="sm:flex gap-x-5 w-1/2 text-md lg:text-2xl sm:text-xl hidden">

    
          {/* <li className={menu === "Home" ? "text-red-700" : "hover:text-red-500"}>
            <Link to="/" onClick={() => setMenu("Home")}>Home</Link>
          </li> */}

        
          <li
            className={`cursor-pointer relative ${
              menu === "Property" ? "text-red-700" : "hover:text-red-500"
            }`}
            onClick={() => setOpen(!open)}
          >Property
          </li>

          {open && (
            <div className="absolute top-full mt-2 bg-gray-900 text-white w-40 rounded-lg shadow-lg p-2 z-50">
              <Link
                to="/Buy"
                onClick={() => {
                  setMenu("Buy");
                  setOpen(false);
                }}
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Buy
              </Link>

              <Link
                to="/Sell"
                onClick={() => {
                  setMenu("Sell");
                  setOpen(false);
                }}
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Sell
              </Link>
            </div>
          )}

          <li className={menu === "News" ? "text-red-700" : "hover:text-red-500"}>
            <Link to="/News" onClick={() => setMenu("News")}>News</Link>
          </li>

        </ul>

        <div className="bg-blue-300 px-4 py-2 rounded">
          <Link to="/post" className="font-medium relative inline-block hover:text-blue-500">
            Post Property
          </Link>
        </div>

        <button onClick={menushow} className="block sm:hidden">
          <i className="fa-solid fa-bars text-2xl text-black"></i>
        </button>

      </div>
    </div>
  );
};

export default Navbar;

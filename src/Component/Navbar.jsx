import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ city, setCity }) => {
  const [openBuy, setOpenBuy] = useState(false);
  const [openSell, setOpenSell] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBuy, setMobileBuy] = useState(false);
  const [mobileSell, setMobileSell] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FCFCFC] shadow-md z-50 h-20 font-poppins">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="https://countryroof.in/upload/logo/1819668946722953.png"
              alt="logo"
              className="w-40"
            />
          </Link>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2 bg-red-600 text-white rounded-xl font-semibold"
          >
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
          </select>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">


          <li
            onClick={() => {
              setOpenBuy(!openBuy);
              setOpenSell(false);
            }}
            className="cursor-pointer text-blue-600 hover:text-red-500"
          >
            For Buy
          </li>

          <li
            onClick={() => {
              setOpenSell(!openSell);
              setOpenBuy(false);
            }}
            className="cursor-pointer text-blue-600 hover:text-red-500"
          >
            For Sell
          </li>

          <li>
            <a
              href="https://countryroof.in/blog"
              className="text-blue-600 hover:text-red-500"
            >
              News
            </a>
          </li>
        </ul>

        <Link
          to="/post"
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Post Property
        </Link>


        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {openBuy && (
        <div className="absolute hidden md:flex bg-white shadow-xl w-full justify-center py-6">
          <div className="grid grid-cols-3 gap-20 text-left">
            <div>
              <h3 className="font-bold text-gray-700">PROPERTIES IN GURUGRAM</h3>
              <p className="mt-2">Flats</p>
              <p>Builder Floor</p>
              <p>Plots</p>
              <p>Service Apartments</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-700">POPULAR SEARCHES</h3>
              <p className="mt-2">Property in Gurugram</p>
              <p>Verified Property</p>
              <p>New Projects</p>
            </div>

            <div className="bg-blue-100 p-4 rounded-xl w-72">
              <h2 className="font-bold text-xl">Insights</h2>
              <p className="text-sm mt-2">Locality reviews, pricing & more</p>
            </div>
          </div>
        </div>
      )}

      {openSell && (
        <div className="absolute hidden md:flex bg-white shadow-xl w-full justify-center py-6">
          <div className="grid grid-cols-2 gap-20">
            <ul>
              <h3 className="font-bold text-gray-700">OWNER OFFERINGS</h3>
              <li className="mt-2"><Link to="/Post">Post Property</Link></li>
              <li>Owner Properties</li>
              <li>View Response</li>
            </ul>

            <div className="bg-green-100 p-4 rounded-xl w-72">
              <h2 className="font-bold">Sell or Rent Faster</h2>
              <p className="text-sm mt-1">List your property free</p>
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 space-y-4">

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-red-600 text-white px-3 py-2 rounded-lg font-semibold"
          >
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
          </select>

          <p
            className="text-blue-600 text-lg cursor-pointer"
            onClick={() => setMobileBuy(!mobileBuy)}
          >
            For Buy
          </p>
          {mobileBuy && (
            <div className="ml-4 text-gray-700 space-y-1">
              <p>Flats</p>
              <p>Builder Floor</p>
              <p>Plots</p>
              <p>Service Apartments</p>
            </div>
          )}

          <p
            className="text-blue-600 text-lg cursor-pointer"
            onClick={() => setMobileSell(!mobileSell)}
          >
            For Sell ▾
          </p>
          {mobileSell && (
            <div className="ml-4 text-gray-700 space-y-1">
              <Link to="/Post">Post Property</Link>
              <p>Owner Properties</p>
              <p>View Response</p>
            </div>
          )}

          <Link to="/post" className="block text-blue-600 text-lg">
            Post Property
          </Link>

          <a href="https://countryroof.in/blog" className="block text-blue-600 text-lg">
            News
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

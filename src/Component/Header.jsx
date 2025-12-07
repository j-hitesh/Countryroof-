import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ searchText, setSearchText, onSearch }) {
  const [openBuy, setOpenBuy] = useState(false);
  const [openSell, setOpenSell] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 font-poppins">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        <Link to="/">
          <img
            src="https://countryroof.in/upload/logo/1819668946722953.png"
            className="w-40"
            alt="logo"
          />
        </Link>

        <div className="hidden md:flex items-center w-1/2 relative">
          <input
            type="text"
            className="w-full border px-10 py-2 rounded-lg"
            placeholder="Search properties..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <i className="fa-solid fa-magnifying-glass absolute left-3 top-3 text-gray-500"></i>

          {searchText && (
            <button
              onClick={() => setSearchText("")}
              className="absolute right-3 top-2 text-xl text-gray-600"
            >
              ×
            </button>
          )}
        </div>

        <button
          onClick={onSearch}
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>

        <Link
          to="/post"
          className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Post Property
        </Link>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div className="hidden md:flex justify-end gap-10 pr-8 py-3 border-t bg-white text-lg font-semibold">

        <span
          className="cursor-pointer text-blue-600 hover:text-red-600"
          onClick={() => { setOpenBuy(!openBuy); setOpenSell(false); }}
        >
          For Buy
        </span>

        <span
          className="cursor-pointer text-blue-600 hover:text-red-600"
          onClick={() => { setOpenSell(!openSell); setOpenBuy(false); }}
        >
          For Sell
        </span>

        <a
          href="https://countryroof.in/blog"
          className="cursor-pointer text-blue-600 hover:text-red-600"
        >
          News
        </a>
      </div>

      {openBuy && (
        <div className="hidden md:block absolute w-full bg-white shadow-xl py-6 z-40">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold">PROPERTIES IN GURUGRAM</h3>
              <p className="mt-2">Flats</p>
              <p>Builder Floors</p>
              <p>Plots</p>
              <p>Service Apartments</p>
            </div>
            <div>
              <h3 className="font-bold">POPULAR SEARCHES</h3>
              <p className="mt-2">Verified Properties</p>
              <p>New Projects</p>
              <p>Hot Deals</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg">Insights</h3>
              <p className="text-sm mt-2">Price trends & locality reviews</p>
            </div>
          </div>
        </div>
      )}

      {openSell && (
        <div className="hidden md:block absolute w-full bg-white shadow-xl py-6 z-40">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold">OWNER OFFERINGS</h3>
              <p className="mt-2"><Link to="/post">Post Property</Link></p>
              <p>Owner Listings</p>
              <p>View Responses</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-lg">Sell Faster</h3>
              <p className="text-sm mt-2">List free & get leads</p>
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl py-4 px-4 space-y-4">

          <div className="relative">
            <input
              type="text"
              className="w-full border px-10 py-2 rounded-lg"
              placeholder="Search properties..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-3"></i>
            {searchText && (
              <button
                onClick={() => setSearchText("")}
                className="absolute right-3 top-2 text-xl"
              >
                ×
              </button>
            )}
          </div>

          <button
            onClick={onSearch}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Search
          </button>

          <p
            className="text-blue-600 text-lg cursor-pointer"
            onClick={() => setOpenBuy(!openBuy)}
          >
            For Buy ▾
          </p>

          {openBuy && (
            <div className="ml-4 space-y-1">
              <p>Flats</p>
              <p>Builder Floors</p>
              <p>Plots</p>
              <p>Service Apartments</p>
            </div>
          )}

          <p
            className="text-blue-600 text-lg cursor-pointer"
            onClick={() => setOpenSell(!openSell)}
          >
            For Sell ▾
          </p>

          {openSell && (
            <div className="ml-4 space-y-1">
              <Link to="/post">Post Property</Link>
              <p>Owner Listings</p>
              <p>View Responses</p>
            </div>
          )}

          <a href="https://countryroof.in/blog" className="text-blue-600 text-lg">
            News
          </a>

        </div>
      )}
    </header>
  );
}

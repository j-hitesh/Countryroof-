import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../Component/FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref, onValue } from "firebase/database";

const Navbar = ({ city, setCity }) => {
  const [openBuy, setOpenBuy] = useState(false);
  const [openSell, setOpenSell] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBuy, setMobileBuy] = useState(false);
  const [mobileSell, setMobileSell] = useState(false);

  const [userData, setUserData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCity, setOpenCity] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (!u) {
        setUserData(null);
        localStorage.removeItem("userName");
        return;
      }

      const userRef = ref(db, `users/${u.uid}`);

      onValue(userRef, (snap) => {
        if (snap.exists()) {
          const data = snap.val();
          setUserData(data);

          localStorage.setItem("userName", data.name || "User");
        }
      });
    });

    return () => unsubscribe();
  }, []);

  const storedName =
    typeof window !== "undefined" && !userData
      ? localStorage.getItem("userName")
      : null;

    const getTwoChars = (name) => {
  if (!name) return "";

  const clean = name.trim();

  if (clean.length === 1) {
    return clean[0].toUpperCase();
  }

  return clean[0].toUpperCase() + clean[1].toLowerCase();
};


  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FCFCFC] shadow-md z-50 h-20 font-poppins">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="https://countryroof.in/upload/logo/1819668946722953.png"
              alt="logo"
              className="w-30 md:w-40"
            />
          </Link>

          <div className="relative">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onClick={() => setOpenCity(!openCity)}
              className="appearance-none w-30 pl-5 py-2 bg-blue-200 text-gray-600 font-semibold rounded-xl cursor-pointer"
            >
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
              <option value="Gurugram">Gurugram</option>
            </select>

            <i
              className={`fa-solid fa-angle-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 transition-transform duration-200 ${
                openCity ? "rotate-180" : "rotate-0"
              }`}
            ></i>
          </div>
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
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-xl mr-20"
        >
          Post Property
        </Link>
          <div className="absolute right-20" >

        {userData ? (
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-blue-700 font-semibold text-2xl hover:text-red-500 cursor-pointer"
            >
              {getTwoChars(userData.name)}
            </button>

            {menuOpen && (
              <div className=" bg-blue-100 w-70 shadow-xl rounded-xl p-4 z-50 absolute md:right-20">

                <p className="font-semibold">My Profile</p>

                <hr className="my-2" />
                <p className="text-sm/10">Name - {userData.name}</p>
                <p className="text-sm/10">Gmail - {userData.email}</p>
                <p className="text-sm/10">Your No. - {userData.phone}</p>

                <button
                  onClick={() => {
                    signOut(auth);
                    setMenuOpen(false);
                  }}
                  className="mt-3 bg-red-500 text-white py-1 w-full rounded-lg"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="text-2xl text-blue-400"
          >
            <i className="fa-regular fa-user relative text-2xl"  > 
        </i>
          </Link>
        )}
        </div>
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
              <li className="mt-2"><Link to="/post">Post Property</Link></li>
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
            For Sell
          </p>

          {mobileSell && (
            <div className="ml-4 text-gray-700 space-y-1">
              <Link to="/post">Post Property</Link>
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

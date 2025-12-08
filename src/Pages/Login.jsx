import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, googleProvider } from "../Component/FirebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [openBuy, setOpenBuy] = useState(false);
  const [openSell, setOpenSell] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBuy, setMobileBuy] = useState(false);
  const [mobileSell, setMobileSell] = useState(false);
//   const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Enter a valid email";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFirebaseError("");

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setLoading(true);

      // 👉 Yaha Firebase login ho raha hai
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("Firebase login user:", res.user);

      // login successful -> jaise dashboard pe bhejna ho
      navigate("/"); // ya "/dashboard" etc.

    } catch (err) {
      console.error(err);
      // Firebase error message dikhane ke liye
      setFirebaseError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setFirebaseError("");
      setLoading(true);

      const res = await signInWithPopup(auth, googleProvider);
      console.log("Google user:", res.user);

      // login successful
      navigate("/");

    } catch (err) {
      console.error(err);
      setFirebaseError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* NAVBAR SAME RAKHA HAI */}
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

      <div className="max-w-4xl mx-auto mt-50 mb-20 shadow-2xl rounded-xl overflow-hidden flex">

        {/* LEFT SIDE: IMAGE + GOOGLE LOGIN */}
        <div
          className="w-1/2 h-[66vh] bg-cover bg-center relative flex flex-col justify-end items-center p-6"
          style={{
            backgroundImage:
              "url('https://countryroof.in/upload/property/thambnail/1827637885326559.jpg')",
          }}
        >
          <div className="flex gap-4 mb-4 text-white text-2xl">
            {/* 👉 Google sign-in icon click */}
            <button onClick={handleGoogleLogin} disabled={loading}>
              <i className="fa-brands fa-google-plus text-red-700"></i>
            </button>
          </div>

          <Link to="/Sign">
            <p className="text-white text-sm">
              Don’t have an account?{" "}
              <span className="underline cursor-pointer">Signup</span>
            </p>
          </Link>
        </div>

        {/* RIGHT SIDE: EMAIL/PASSWORD LOGIN */}
        <div className="w-1/2 bg-white px-10 py-8">
          <div className="flex justify-center mb-6">
            <img
              src="https://countryroof.in/upload/logo/1819668946722953.png"
              alt="Company Logo"
              className="w-32"
            />
          </div>

          {/* Firebase error message (top pe ek baar) */}
          {firebaseError && (
            <p className="text-red-600 text-sm mb-3">
              {firebaseError}
            </p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between mb-5">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4"
                />
                Remember me
              </label>

              <Link to="/forgot" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

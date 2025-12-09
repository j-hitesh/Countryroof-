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

      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("Firebase login user:", res.user);

      navigate("/");

    } catch (err) {
      console.error(err);
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

      navigate("/");

    } catch (err) {
      console.error(err);
      setFirebaseError(err.message);
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen flex flex-col">

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
 
    </nav>

    <div
      className="flex flex-col items-center justify-center flex-1 px-4 pt-32 pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://countryroof.in/upload/property/thambnail/1827637885326559.jpg')",
      }}>

      <div className="bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl w-full max-w-md p-8">

        <div className="flex justify-center mb-6">
          <img
            src="https://countryroof.in/upload/logo/1819668946722953.png"
            className="w-32"
          />
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white shadow-md flex items-center justify-center gap-3 py-3 rounded-lg border hover:bg-gray-100 transition"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-800 font-medium">
            Continue with Google
          </span>
        </button>

        {firebaseError && (
          <p className="text-red-600 text-sm mt-3 text-center">{firebaseError}</p>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-6">

          <label className="text-white text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full bg-white/70 backdrop-blur border rounded-lg px-3 py-2 mt-1 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-300 text-sm">{errors.email}</p>
          )}

          <label className="text-white text-sm font-medium mt-4 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full bg-white/70 backdrop-blur border rounded-lg px-3 py-2 mt-1 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-300 text-sm">{errors.password}</p>
          )}

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-white text-sm">Remember me</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl mt-6 transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Don’t have an account?{" "}
          <Link to="/Sign" className="underline font-medium">Sign up</Link>
        </p>
      </div>
    </div>
  </div>
);

};

export default Login;

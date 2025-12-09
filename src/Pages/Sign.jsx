import React from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../Component/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../Component/FirebaseConfig";
import { ref, set } from "firebase/database";

const Sign = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [fireError, setFireError] = React.useState(""); // Firebase error

  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = "Enter a valid email";
    }
    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    if (!phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(phone)) {
      errs.phone = "Enter a valid phone number (digits only)";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFireError("");

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      

      await set(ref(db, `users/${userCredential.user.uid}`), {
       name,
       phone,
       email,
       createdAt: Date.now(),
       });


      console.log("User created:", userCredential.user);

      navigate("/login");
    } catch (err) {
      console.error(err);
      setFireError(err.message); 
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen flex flex-col">

    <nav className="fixed top-0 left-0 w-full bg-[#FCFCFC] shadow-md z-50 h-20 font-poppins">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src="https://countryroof.in/upload/logo/1819668946722953.png"
            alt="logo"
            className="w-30 md:w-40"
          />
        </div>
      </div>
    </nav>

    <div
      className="flex flex-col items-center justify-center flex-1 px-4 pt-32 pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://countryroof.in/upload/property/thambnail/1827637885326559.jpg')",
      }}
    >
      <div className="bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl w-full max-w-md p-8">

        <div className="flex justify-center mb-6">
          <img
            src="https://countryroof.in/upload/logo/1819668946722953.png"
            className="w-32"
          />
        </div>

        {fireError && (
          <p className="text-red-600 text-sm text-center mb-3">{fireError}</p>
        )}

        <form onSubmit={handleSubmit} noValidate>

          <div className="mb-4">
            <label className="text-white text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-white/70 backdrop-blur border rounded-lg px-3 py-2 mt-1 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="text-white text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-white/70 backdrop-blur border rounded-lg px-3 py-2 mt-1 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="text-white text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-white/70 backdrop-blur border rounded-lg px-3 py-2 mt-1 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && <p className="text-red-300 text-sm">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label className="text-white text-sm font-medium">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full bg-white/70 backdrop-blur border rounded-lg px-3 py-2 mt-1 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && <p className="text-red-300 text-sm">{errors.phone}</p>}
          </div>

          <label className="flex items-center gap-2 text-white text-sm mb-6">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4"
            />
            Remember me
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl shadow-lg transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="underline cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  </div>
);

};

export default Sign;

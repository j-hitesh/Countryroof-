import React from "react";
import { useNavigate } from "react-router-dom";

// 👉 Firebase imports
import { auth } from "../Component/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
      // 👉 Firebase Signup Code (Main part)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User created:", userCredential.user);

      // Signup success → redirect to login
      navigate("/login");
    } catch (err) {
      console.error(err);
      setFireError(err.message); // show firebase error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-50 mb-20 shadow-2xl rounded-xl overflow-hidden flex">
      <div
        className="w-1/2 h-[88vh] bg-cover bg-center relative flex flex-col justify-end items-center p-6"
        style={{
          backgroundImage:
            "url('https://countryroof.in/upload/property/thambnail/1827637885326559.jpg')",
        }}
      >
        <p className="text-center text-3xl/10 font-Poppins text-white pb-80 text-shadow-xs px-8">
          Post your Property online faster with{" "}
          <span className="text-blue-700">Countryroof.in</span>
        </p>
      </div>

      <div className="w-1/2 bg-white px-10 py-8">
        <div className="flex justify-center mb-6">
          <img
            src="https://countryroof.in/upload/logo/1819668946722953.png"
            alt="Company Logo"
            className="w-32"
          />
        </div>

        {/* 🔥 Firebase Error Display */}
        {fireError && (
          <p className="text-red-600 text-sm mb-3">{fireError}</p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border rounded px-3 py-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded px-3 py-2 ${
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
              className={`w-full border rounded px-3 py-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full border rounded px-3 py-2 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
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

            <a href="/forgot" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;

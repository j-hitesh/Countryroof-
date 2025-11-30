import { useState } from "react";
// import PostExtras from "../PostExtras"

export default function Post() {
  const [propertyType, setPropertyType] = useState("Residential");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(" Property Submitted Successfully!");
  };

  return (
    <div className="">
      <Post/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-24 pb-10">
     
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Sell or Rent Property <br />
          <span className="text-blue-600">online faster</span> with
          <span className="text-blue-700"> Propertites.com</span>
        </h1>

        <ul className="space-y-3 text-gray-700 text-lg">
          <li> Advertise for FREE</li>
          <li> Get unlimited enquiries</li>
          <li> Get shortlisted buyers and tenants</li>
          <li> Assistance in co-ordinating site visits</li>
        </ul>

        <img
          src="https://static.99acres.com/universalapp/img/Desktop_Animation_compress.gif"
          alt="illustration"
          className="mt-10 w-full max-w-md mx-auto md:mx-0 rounded-xl shadow-lg"
        />
      </div>

      <div className="md:w-1/2 w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Start posting your property, it’s free
        </h2>

         <div className="mb-4">
          
          <div className="flex gap-4 mb-4">
            {["Residential", "Commercial"].map((type) => (
              <label
                key={type}
                className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer border ${
                  propertyType === type
                    ? "bg-blue-100 border-blue-500 text-blue-600"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name="propertyType"
                  value={type}
                  checked={propertyType === type}
                  onChange={() => setPropertyType(type)}
                  className="hidden"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          {["Flat / Apartment", "Independent House / Villa", "Builder Floor", "Plot / Land"].map(
            (option) => (
              <button
                key={option}
                className="border border-gray-300 rounded-full px-4 py-2 hover:border-blue-400 text-gray-700 text-sm"
              >
                {option}
              </button>
            )
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-2">
            Your contact details for the buyer to reach you
          </label>
          <input
            type="tel"
            placeholder="Enter phone number"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <p className="text-sm text-gray-500 mb-4">
            Already a registered user?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Login
            </span>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Now
          </button>
        </form>
      </div>
      
    </div>
    <section className="bg-white py-20 px-6 md:px-16 text-center">
  <h3 className="text-gray-500 font-semibold uppercase mb-3 tracking-wide">
    How to Post
  </h3>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
    Post Your Property in <span className="text-blue-600">3 Simple Steps</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
   
    <div className="flex flex-col items-center text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
        alt="Add details"
        className="w-16 h-16 mb-6"
      />
      <h4 className="text-lg font-semibold text-blue-600 mb-2">
        01. Add details of your property
      </h4>
      <p className="text-gray-600">
        Begin by telling us a few basic details about your property like type,
        location, number of rooms, and amenities.
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        alt="Upload photos"
        className="w-16 h-16 mb-6"
      />
      <h4 className="text-lg font-semibold text-blue-600 mb-2">
        02. Upload Photos & Videos
      </h4>
      <p className="text-gray-600">
        Upload photos and videos of your property either from your desktop or
        mobile device to attract more buyers.
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
        alt="Add pricing"
        className="w-16 h-16 mb-6"
      />
      <h4 className="text-lg font-semibold text-blue-600 mb-2">
        03. Add Pricing & Ownership
      </h4>
      <p className="text-gray-600">
        Update your property’s ownership and expected price — and your listing
        is ready for posting.
      </p>
    </div>
  </div>

  <div className="mt-12">
    <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition">
      Begin to Post your Property
    </button>
  </div>
</section>
   </div>
  );
}
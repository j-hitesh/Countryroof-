// import React from "react";
import { useProperties } from "../Context/PropertyContext";

export default function Buy() {
  const { properties } = useProperties();

  const buyList = properties.filter((p) => p.type === "buy");

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <h2 className="text-2xl font-semibold mb-6">Buy Properties</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyList.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              onError={(e) => {
                e.currentTarget.src = "/assets/fallback.jpg";
              }}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.location}</p>

              <p className="text-blue-600 text-xl font-bold mt-2">
                {item.price}
              </p>

              <a
                href={`/property/${item.id}`}
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

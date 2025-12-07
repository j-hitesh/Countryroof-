import { useEffect, useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Mehta",
      position: "Home Buyer",
      image: "https://countryroof.in/upload/testimonial/1823033678849485.jpg",
      feedback: "Amazing service! Helped me find my dream home quickly.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Property Investor",
      image:
        "https://www.bing.com/th?id=OIP.V0yJOrr3-lCSRpvggpJ2zgHaLH&w=204&h=306&c=8&rs=1&qlt=90",
      feedback: "Very professional and helpful throughout the process.",
    },
    {
      id: 3,
      name: "Amit Verma",
      position: "Seller",
      image: "https://countryroof.in/upload/testimonial/1823033678849485.jpg",
      feedback: "Smooth experience and trustworthy team.",
    },
    {
      id: 4,
      name: "Rohit Khanna",
      position: "Buyer",
      image: "https://countryroof.in/upload/testimonial/1823034743336343.jpg",
      feedback: "I truly appreciate the transparency & support.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/high/building-background-q9xmm4w1lars46nt.webp')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>


      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="space-y-4">
          {reviews.map((rev, i) => (
            <div
              key={rev.id}
              onClick={() => setIndex(i)}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border transition-all
              ${
                i === index
                  ? "bg-blue-50 border-blue-400 shadow-md"
                  : "bg-white/60 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <img
                src={rev.image}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {rev.name}
                </h3>
                <p className="text-gray-500 text-sm">{rev.position}</p>
              </div>
            </div>
          ))}

        </div>

        <div className="md:col-span-2 bg-white shadow-2xl border border-gray-200 p-8 md:p-12 rounded-3xl">
          <span className="text-6xl text-blue-600 font-bold">“</span>

          <p className="text-xl leading-relaxed mt-4 mb-10 text-gray-700">
            {reviews[index].feedback}
          </p>

          <div className="flex items-center gap-5">
            <img
              src={reviews[index].image}
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-400"
            />

            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {reviews[index].name}
              </h3>
              <p className="text-gray-500">{reviews[index].position}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;

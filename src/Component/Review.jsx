import { useEffect, useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Mehta",
      image: "https://countryroof.in/upload/testimonial/1823033678849485.jpg",
      rating: 5,
      feedback: "Amazing service! Helped me find my dream home quickly.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      image:
        "https://www.bing.com/th?id=OIP.V0yJOrr3-lCSRpvggpJ2zgHaLH&w=204&h=306&c=8&rs=1&qlt=90",
      rating: 4,
      feedback: "Very professional and helpful throughout the process.",
    },
    {
      id: 3,
      name: "Amit Verma",
      image: "https://countryroof.in/upload/testimonial/1823033678849485.jpg",
      rating: 5,
      feedback: "Smooth experience and trustworthy team.",
    },
    {
      id: 4,
      name: "Rohit Khanna",
      image: "https://countryroof.in/upload/testimonial/1823034743336343.jpg",
      rating: 5,
      feedback: "I truly appreciate the transparency & support.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const review = reviews[index];

  return (
    <div
      className="relative w-full h-[550px] md:h-[620px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/high/building-background-q9xmm4w1lars46nt.webp')",
      }}
    >

      <div className="bg-white/85 backdrop-blur-lg shadow-2xl rounded-3xl p-10 md:p-14 max-w-5xl w-[92%] mx-auto">


        <p className="text-gray-800 text-2xl leading-relaxed mb-10 font-medium">
          “{review.feedback}”
        </p>

        <div className="flex items-center gap-6 mt-6">
          <img
            src={review.image}
            className="w-24 h-24 rounded-full object-cover border shadow-lg"
            alt={review.name}
          />

          <div>
            <h3 className="text-3xl font-bold text-blue-700">
              {review.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

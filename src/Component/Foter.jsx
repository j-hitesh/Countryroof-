

const Foter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 relative">

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <img
            src="https://countryroof.in/upload/logo/1819668946722953.png"
            alt="Countryroof Logo"
            className="w-36 mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Countryroof is your trusted partner for buying, selling premium properties across India. We focus on transparency,
            trust, and customer satisfaction.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/buy" className="hover:text-white">Buy</a></li>
            <li><a href="/sell" className="hover:text-white">Sell</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/news" className="hover:text-white">News</a></li>
            <li><a href="/faqs" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Popular Locations
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">Gurugram</a></li>
            <li><a className="hover:text-white">Delhi</a></li>
            <li><a className="hover:text-white">Noida</a></li>
            <li><a className="hover:text-white">Dwarka Expressway</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="font-semibold">Address:</span><br />
              Infobirth ,JMD 5th floor, Gurugram, Haryana, India
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+919999999999" className="hover:text-white">
                +91 99999 99999
              </a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:support@countryroof.in" className="hover:text-white">
                support@countryroof.in
              </a>
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-xl hover:text-blue-500 "><i class="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-xl hover:text-red-400"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-xl hover:text-blue-500"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-xl hover:text-blue-500"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6">
        
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">

          <p>
            © 2025 <span className="font-semibold text-gray-300">Countryroof</span>. 
            All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919999999999"
        className="fixed bottom-6 right-20 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-3xl hover:bg-green-600"
      >
        <i class="fa-brands fa-whatsapp"></i>
      </a>

      <a
        href="tel:+919999999999"
        className="fixed bottom-6 right-4 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-2xl hover:bg-blue-700"
      >
        <i class="fa-solid fa-phone"></i>
      </a>
    </footer>
  );
};

export default Foter;

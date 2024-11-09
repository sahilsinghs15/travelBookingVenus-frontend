import React from "react";
import Footer from "../Components/Footer";

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">TravelSite</div>
        <ul className="flex space-x-8">
          <li><a href="#flights" className="hover:text-gray-200">Flights</a></li>
          <li><a href="#hotels" className="hover:text-gray-200">Hotels</a></li>
          <li><a href="#about" className="hover:text-gray-200">About Us</a></li>
          <li><a href="#signup" className="hover:text-gray-200">Sign Up</a></li>
          <li><a href="#login" className="hover:text-gray-200">Login</a></li>
          <li><a href="#profile" className="hover:text-gray-200">Profile</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow text-center py-20 bg-gray-50">
        <section className="px-4">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Explore the World with Us</h1>
          <p className="text-lg text-gray-600 mb-6">Find the best flights and hotels for your next adventure!</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">Start Your Journey</button>
        </section>
      </main>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-center text-3xl font-semibold text-blue-800 mb-8">What Our Customers Say</h2>
        <div className="flex justify-center space-x-6 px-4">
          <div className="w-80 p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"Amazing experience! Found the best deals and had a smooth trip."</p>
            <p className="text-blue-600 font-semibold">- Alice W.</p>
          </div>
          <div className="w-80 p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"Very easy to book and great customer service. Highly recommended!"</p>
            <p className="text-blue-600 font-semibold">- John D.</p>
          </div>
          <div className="w-80 p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"Excellent platform for finding last-minute deals. Will use again!"</p>
            <p className="text-blue-600 font-semibold">- Emma R.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;

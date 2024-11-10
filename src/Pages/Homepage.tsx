import React from 'react';
import Header from './Header';
import Footer from '../Components/Footer';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, imageUrl }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

interface DestinationCardProps {
  title: string;
  imageUrl: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, imageUrl }) => (
  <div className="relative">
    <img src={imageUrl} alt={title} className="h-64 w-full object-cover rounded-lg" />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  </div>
);

const Homepage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALCxZdXHOO_Q9aPnn9rwpqrJghhBmE5yvpg&s')" }}
      >
        <div className="text-center text-white bg-gray-900 bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold">Welcome to Tours & Travels</h1>
          <p className="mt-4 text-lg">Experience the beauty of India with our curated travel packages.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard title="Adventure Tours" description="Explore Indian adventure destinations." imageUrl="/path-to-adventure.jpg" />
          <CategoryCard title="Historical Tours" description="Visit India's historical monuments." imageUrl="/path-to-historical.jpg" />
          <CategoryCard title="Wildlife Safaris" description="Discover India's rich wildlife." imageUrl="/path-to-wildlife.jpg" />
        </div>
      </section>

      {/* Destination Section with Horizontal Slideshow */}
      <section id="destinations" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="overflow-x-scroll flex space-x-6">
          <DestinationCard title="Goa" imageUrl="/path-to-goa.jpg" />
          <DestinationCard title="Rajasthan" imageUrl="/path-to-rajasthan.jpg" />
          <DestinationCard title="Kerala" imageUrl="/path-to-kerala.jpg" />
          <DestinationCard title="Andaman" imageUrl="/path-to-andaman.jpg" />
        </div>
      </section>

      {/* Key Features of Popular Locations Section */}
      <section id="most-places" className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features of Popular Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-2">Goa Beaches</h2>
              <p className="text-gray-600">Sun-kissed beaches and vibrant nightlife.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-2">Jaipur's Heritage</h2>
              <p className="text-gray-600">Royal palaces and forts of Jaipur.</p>
            </div>
          </div>
          {/* Add more features here */}
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="tour-packages" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard title="Weekend Getaways" description="Perfect for short trips." imageUrl="/path-to-weekend.jpg" />
          <CategoryCard title="Luxury Tours" description="Experience luxury and comfort." imageUrl="/path-to-luxury.jpg" />
          <CategoryCard title="Family Tours" description="Fun-filled trips for families." imageUrl="/path-to-family.jpg" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-gradient-to-r from-blue-500 to-blue-700 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8">Have questions or need assistance? Reach out to us anytime!</p>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg shadow-md text-gray-900" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg shadow-md text-gray-900" />
            <textarea placeholder="Your Message" className="w-full p-4 h-32 rounded-lg shadow-md text-gray-900 resize-none" />
            <button className="w-full bg-white text-blue-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Comments Section */}
      <section id="comments" className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Happy Clients</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-gray-800">
            <p>"Fantastic experience! The tour was well-organized and enjoyable."</p>
            <p className="mt-4 text-right font-semibold">- Client Name</p>
          </div>
          {/* Add more client comments */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;

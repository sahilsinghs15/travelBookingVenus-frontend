import React from "react";
import { useParams } from "react-router-dom"; 
import hotelDetails from "../mockJSONFiles/hotels.json"; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface Review {
  user: string;
  rating: number;
  comment: string;
}

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  amenities: string[];
  price_per_night: number;
  description: string;
  images: string[];
  contact_info: {
    phone: string;
    email: string;
    address: string;
  };
  reviews: Review[];
}

const HotelDetailsPage: React.FC = () => {
  const { hotelId } = useParams<{ hotelId: string }>(); // Get hotelId from route
  const hotel: Hotel | undefined = hotelDetails.find((h) => h.id === parseInt(hotelId!));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{hotel.name}</h2>
        <p className="text-gray-600 text-lg mb-2">{hotel.location}</p>
        <p className="text-yellow-500 font-semibold mb-4">Rating: {hotel.rating} / 5</p>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Description</h3>
          <p>{hotel.description}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Amenities</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {hotel.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Images</h3>
          <div className="flex space-x-4">
            {hotel.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${hotel.name} image ${index + 1}`}
                className="w-32 h-32 rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
          <p className="flex items-center text-gray-600">
            <FaPhone className="mr-2" /> {hotel.contact_info.phone}
          </p>
          <p className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2" /> {hotel.contact_info.email}
          </p>
          <p className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" /> {hotel.contact_info.address}
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Reviews</h3>
          {hotel.reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500">Rating: {review.rating} / 5</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>

        <p className="text-2xl font-bold text-gray-700 my-6">
          Price per Night: ${hotel.price_per_night}
        </p>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelDetailsPage;

import React, { useState } from "react";
import hotelsData from "../mockJSONFiles/hotels.json";

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  amenities: string[];
  price_per_night: number;
}

const HotelsSearchPage: React.FC = () => {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [minRating, setMinRating] = useState<number | undefined>();
  const [results, setResults] = useState<Hotel[]>([]);

  const handleSearch = () => {
    // Filter hotels based on search criteria
    const filteredHotels = hotelsData.filter((hotel) => {
      return (
        hotel.location.toLowerCase().includes(location.toLowerCase()) &&
        (maxPrice ? hotel.price_per_night <= maxPrice : true) &&
        (minRating ? hotel.rating >= minRating : true)
      );
    });
    setResults(filteredHotels);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Search Form */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Search Hotels</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter city or location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Maximum Price per Night</label>
          <input
            type="number"
            value={maxPrice || ""}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter max price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Minimum Rating</label>
          <input
            type="number"
            step="0.1"
            max="5"
            min="0"
            value={minRating || ""}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter min rating (0-5)"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      <div className="max-w-3xl mx-auto">
        {results.length > 0 ? (
          results.map((hotel) => (
            <div key={hotel.id} className="bg-white p-6 mb-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {hotel.name}
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold">Location:</span> {hotel.location}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Rating:</span> {hotel.rating} / 5
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Amenities:</span> {hotel.amenities.join(", ")}
              </p>
              <p className="text-gray-700 font-semibold mt-2">
                Price per Night: ${hotel.price_per_night}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 mt-8">No hotels found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default HotelsSearchPage;

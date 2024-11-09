import React, { useState } from "react";
import flightsData from "../mockJSONFiles/flights.json";

interface Flight {
  flight_id: number;
  flight_number: string;
  airline: string;
  origin: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
  price: number;
}

const FlightsSearchPage: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState<Flight[] | Flight | any>([]);

  const handleSearch = () => {
    // Filter flights based on the search criteria
    const filteredFlights = flightsData.filter((flight) => {
      const flightDate = new Date(flight.departure_time).toISOString().split("T")[0];
      return (
        flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
        flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
        (date ? flightDate === date : true)
      );
    });
    setResults(filteredFlights);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Search Form */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Search Flights</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Origin</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter origin city or airport"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter destination city or airport"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          results.map((flight: { flight_id: React.Key | null | undefined; airline: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; flight_number: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; origin: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; destination: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; departure_time: string | number | Date; arrival_time: string | number | Date; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
            <div key={flight.flight_id} className="bg-white p-6 mb-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {flight.airline} - {flight.flight_number}
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold">From:</span> {flight.origin}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">To:</span> {flight.destination}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Departure:</span> {new Date(flight.departure_time).toLocaleString()}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Arrival:</span> {new Date(flight.arrival_time).toLocaleString()}
              </p>
              <p className="text-gray-700 font-semibold mt-2">Price: ${flight.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 mt-8">No flights found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default FlightsSearchPage;

import React from 'react';
import { useParams } from 'react-router-dom';

// Define a type for the flight object
interface Flight {
  flight_id: number;
  flight_number: string;
  airline: string;
  origin: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
  price: number;
  duration: string;
  layovers: number;
  aircraft: string;
  seat_availability: number;
  baggage_allowance: string;
  description: string; // Add this if you have a description in the flights data
}

// Define the props type for the FlightDetailsPage component
interface FlightDetailsPageProps {
  flights: Flight[]; // Array of flights
}

const FlightDetailsPage: React.FC<FlightDetailsPageProps> = ({ flights }) => {
  const { flightId } = useParams<{ flightId: string }>(); // UseParams with type

  // Check if flightId exists and parse it
  const flight = flightId ? flights.find((flight) => flight.flight_id === parseInt(flightId)) : undefined;

  if (!flight) {
    return <div className="min-h-screen flex items-center justify-center bg-white text-gray-600 text-2xl">Flight not found</div>;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div> {/* Overlay */}

      <div className="relative z-10 p-8 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl w-full bg-black p-10 rounded-lg shadow-lg opacity-75">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">{flight.airline} {flight.flight_number}</h2>
          <p className="text-center text-white text-2xl mb-6">{flight.origin} → {flight.destination}</p>
          <p className="text-yellow-500 text-center font-semibold text-xl mb-6">Duration: {flight.duration}</p>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Flight Information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col text-white">
                <span className="text-lg text-gray-400">Departure</span>
                <span className="text-xl">{new Date(flight.departure_time).toLocaleString()}</span>
              </div>
              <div className="flex flex-col text-white">
                <span className="text-lg text-gray-400">Arrival</span>
                <span className="text-xl">{new Date(flight.arrival_time).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Price and Availability</h3>
            <div className="flex justify-between text-white">
              <div>
                <span className="text-lg text-gray-400">Price</span>
                <div className="text-3xl font-semibold">${flight.price}</div>
              </div>
              <div className="text-lg text-gray-400">{flight.seat_availability} seats available</div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Baggage Allowance & Aircraft</h3>
            <div className="text-white">
              <span className="text-lg text-gray-400">Baggage Allowance</span>
              <div className="text-xl">{flight.baggage_allowance}</div>
            </div>
            <div className="mt-4 text-white">
              <span className="text-lg text-gray-400">Aircraft</span>
              <div className="text-xl">{flight.aircraft}</div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Flight Description</h3>
            <p className="text-xl text-white">{flight.description}</p>
          </div>

          <div className="mt-8">
            <button className="w-full py-4 text-2xl bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsPage;

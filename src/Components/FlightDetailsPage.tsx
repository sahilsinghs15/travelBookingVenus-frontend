import React from "react";
import { useParams } from "react-router-dom";
import flightData from "../mockJSONFiles/flights.json";

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
}

const FlightDetailsPage: React.FC = () => {
  const { flightId } = useParams<{ flightId: string }>(); 
  const flight: Flight|undefined = flightData.find(
    (f) => f.flight_id === parseInt(flightId!)
  ) as Flight | undefined;

  if (!flight) {
    return <div>Flight not found</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          {flight.airline} - {flight.flight_number}
        </h2>
        <p className="text-gray-600 text-lg mb-2">
          {flight.origin} ({flight.departure_time}) - {flight.destination} ({flight.arrival_time})
        </p>
        <p className="text-yellow-500 font-semibold mb-4">
          Duration: {flight.duration} (Layovers: {flight.layovers})
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Flight Details</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Aircraft: {flight.aircraft}</li>
            <li>Seat Availability: {flight.seat_availability}</li>
            <li>Baggage Allowance: {flight.baggage_allowance}</li>
          </ul>
        </div>

        <p className="text-2xl font-bold text-gray-700 my-6">
          Price: ${flight.price}
        </p>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FlightDetailsPage;
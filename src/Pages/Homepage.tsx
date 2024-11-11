import React, { useState } from "react";
import Footer from "../Components/Footer";
import { useSelector} from "react-redux";
import { useNavigate , Link } from "react-router-dom";
import { useAppDispatch } from "../Helpers/Hooks";
import { RootState } from "../Redux/store";
import { logout } from "../Redux/Slices/authSlice.reducer";
import { ChevronDown, LogOut, User, UserPlus } from "lucide-react";
import NextTrip from "../Components/NextTrip";

const Homepage =  () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isLoggedIn , data} = useSelector((state : RootState) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">TravelSite</div>
        <ul className="flex space-x-8">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/flights" className="hover:text-gray-200">Flights</Link></li>
          <li><Link to="/hotels" className="hover:text-gray-200">Hotels</Link></li>
          <li><Link to="/aboutus" className="hover:text-gray-200">About Us</Link></li>
          {
            !isLoggedIn ? (
              <>
                <li className=" flex gap-5">
                    <Link to="/signup" className="hover:text-gray-200 flex">
                      <UserPlus className="mr-2" /> <p>Signup</p>
                    </Link>

                    <Link to="/login" className="hover:text-gray-200 flex">
                      <UserPlus className="mr-2" /> <p>Login</p>
                    </Link>
                </li>
              </>
            ) : (
              <li className="relative">
                  <button
                    className="flex items-center hover:text-yellow-400"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <User className="mr-2" />
                    <span>{data?.fullName}</span>
                    <ChevronDown className={`ml-2 transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-10">
                      <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile{<User/>}</Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                        onClick={handleLogout}
                      >
                        <LogOut className="inline-block mr-2" /> Logout
                      </button>
                    </div>
                  )}
                </li>
            )
          }
        
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

      {/* Next trip*/}

      <NextTrip/>

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

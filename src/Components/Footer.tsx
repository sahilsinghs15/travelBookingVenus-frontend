import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Importing Link for internal navigation

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-10 px-6 sm:px-16">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Company Info Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">TravelSearch Company</h3>
                        <p className="text-sm">
                            Your one-stop solution for all your travel needs. Discover and book flights, hotels, and vacation packages with ease.
                        </p>
                    </div>
                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {/* Corrected Link for About Us */}
                            <li>
                                <Link to="/about" className="hover:text-yellow-500">
                                    About Us
                                </Link>
                            </li>
                            {/* Dummy links for Services */}
                            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                        <p className="text-sm mb-4">Stay updated with the latest offers and news from TravelSearch Company.</p>
                        <form className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="px-4 py-2 w-3/4 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <button 
                                type="submit" 
                                className="px-4 py-2 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600 transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex items-center justify-start gap-6 text-2xl">
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-500 transition-colors duration-300"
                            >
                                <BsFacebook />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-500 transition-colors duration-300"
                            >
                                <BsInstagram />
                            </a>
                            <a 
                                href="https://youtube.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-500 transition-colors duration-300"
                            >
                                <BsYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">
                        Copyright {year} | All rights reserved | TravelSearch Company
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

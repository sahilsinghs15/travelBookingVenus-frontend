import Footer from "../Components/Footer";

function Aboutus() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-yellow-400">Back To Homepage?</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <section className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-12 rounded-lg shadow-lg">
            <h2 className="text-6xl font-bold text-center mb-8">About Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <section className="md:w-1/2 px-4 mb-8 md:mb-0">
                <h3 className="text-4xl font-bold mb-4">TravelSite</h3>
                <h4 className="text-2xl text-teal-200 font-semibold mb-4">
                  Contact Us: 913-686-5327 | Email: support@travelsite.com
                </h4>
                <p>At Travelsite, we're passionate about making your travel dreams a reality. We're your one-stop shop for all your travel needs, offering a wide range of hotel and flight booking options to destinations around the globe.</p>

                <h3>Our Commitment to You</h3>
                <ul>
                    <li><strong>Personalized Service:</strong> Our dedicated team is committed to providing personalized assistance, guiding you through every step of your booking process.</li>
                    <li><strong>Best Deals:</strong> We scour the internet to find the best deals on hotels and flights, ensuring you get the most value for your money.</li>
                    <li><strong>Hassle-Free Booking:</strong> Our user-friendly platform makes booking your travel plans a breeze.</li>
                    <li><strong>24/7 Support:</strong> Our customer support team is available around the clock to answer your questions and assist with any issues.</li>
                </ul>

                <h3>Why Choose Travelsite?</h3>
                <ul>
                    <li><strong>Extensive Network:</strong> We have access to a vast network of hotels and airlines, offering a wide range of options to suit every budget and preference.</li>
                    <li><strong>Secure Transactions:</strong> Your personal information and payment details are safe with us. We use the latest security measures to protect your data.</li>
                    <li><strong>Expert Advice:</strong> Our travel experts can provide personalized recommendations based on your interests and budget.</li>
                </ul>

                <p>Whether you're planning a romantic getaway, a family vacation, or a business trip, Travelsite is your trusted partner. Book your next adventure with us today!</p>

              </section>
              <div className="md:w-1/2 px-4">
                <img
                  src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg"
                  alt="Travel Experience"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default Aboutus;

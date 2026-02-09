import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">FastShop</h2>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
              Discover ethnically cultivated and Fair-Trade gifts from artisans worldwide. 
              Fashion that follows conscience.
            </p>
            <div className="flex space-x-4 pt-3">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Premium Shirts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Fair-Trade Collection</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Ethnic Wear</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Seasonal Offers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Gift Ideas</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Customer Service</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Subscribe for exclusive offers and ethical fashion insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 flex-grow text-gray-900 placeholder-gray-500 shadow-sm"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-[1.02] active:scale-[0.98] shadow-md">
                Subscribe
              </button>
            </div>
            
          </div>
        </div>

        {/* Bottom Bar - Copyright à gauche, paiements à droite */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright à gauche */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} FastShop. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1 italic">
                Fashion doesn't lead, it follows.
              </p>
            </div>
            
            {/* Payment Methods à droite */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">We accept:</span>
              <div className="flex space-x-2">
                {/* Visa */}
                <div className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 transition-all duration-200 border border-gray-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#1A1F71" strokeWidth="1.5"/>
                    <path d="M8.5 9.75L7 14.25H8.5L10 9.75H8.5Z" fill="#1A1F71"/>
                    <path d="M17 9.75H15.5L14 14.25H15.5L17 9.75Z" fill="#1A1F71"/>
                    <path d="M9.75 9.75H8.25V14.25H9.75V9.75Z" fill="#1A1F71"/>
                    <path d="M13.5 9.75H12V14.25H13.5V9.75Z" fill="#1A1F71"/>
                    <path d="M15.75 9.75H14.25V14.25H15.75V9.75Z" fill="#1A1F71"/>
                  </svg>
                  <span className="text-gray-800">Visa</span>
                </div>
                
                {/* Mastercard */}
                <div className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 transition-all duration-200 border border-gray-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="12" r="7" fill="#EB001B"/>
                    <circle cx="15" cy="12" r="7" fill="#F79E1B"/>
                    <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="#FF5F00"/>
                  </svg>
                  <span className="text-gray-800">Mastercard</span>
                </div>
                
                {/* PayPal */}
                <div className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 transition-all duration-200 border border-gray-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 8.25C19.5 6.17893 17.8211 4.5 15.75 4.5H10.5C9.25736 4.5 8.25 5.50736 8.25 6.75V10.5H6.75C5.92157 10.5 5.25 11.1716 5.25 12V15.75C5.25 16.5784 5.92157 17.25 6.75 17.25H8.25V19.5H11.25V17.25H14.25L16.5 13.5H15.75C17.8211 13.5 19.5 11.8211 19.5 9.75V8.25Z" fill="#003087"/>
                    <path d="M16.5 10.5H14.25V12H16.5C17.0784 12 17.25 11.4216 17.25 10.875C17.25 10.3284 17.0784 10.5 16.5 10.5Z" fill="#009CDE"/>
                  </svg>
                  <span className="text-gray-800">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
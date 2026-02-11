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
              <div className="flex space-x-11 pt-5">
              {/* Facebook Icon */}
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300" aria-label="Facebook">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors duration-300" aria-label="Instagram">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Twitter Icon */}
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300" aria-label="Twitter">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              
              {/* Email Icon */}
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors duration-300" aria-label="Email">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-15a3 3 0 00-3 3v9a3 3 0 003 3h15zM3 9.621l8.088 5.238a1.5 1.5 0 001.824 0L21 9.621V18a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 18V9.621zM19.5 7.5A1.5 1.5 0 0121 9v.268l-9 5.832-9-5.832V9a1.5 1.5 0 011.5-1.5h15z" clipRule="evenodd" />
                </svg>
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
              <button className="bg-orange-500 hover:bg-orange-500 text-gray-900 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-[1.02] active:scale-[0.98] shadow-md text-white">
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
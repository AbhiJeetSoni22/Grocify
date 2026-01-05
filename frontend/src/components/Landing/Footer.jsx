import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <h3 className="text-2xl font-bold text-green-400">Grocify</h3>
          </div>
          <p className="text-gray-400">Fresh groceries delivered fast to your doorstep.</p>
        
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            {['Contact Us', 'Help Center', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Grocify. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer

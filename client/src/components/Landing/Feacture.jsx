import React from 'react'

const Feacture = () => {
  return (
    <section id="features" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Grocify?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We make grocery shopping effortless so you can focus on what really matters</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: (
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Fast Delivery",
            description: "Get your groceries delivered in under 30 minutes with our express service."
          },
          {
            icon: (
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            title: "Quality Guaranteed",
            description: "We handpick the freshest produce and check all items before delivery."
          },
          {
            icon: (
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            ),
            title: "Easy Payment",
            description: "Multiple payment options including cash on delivery and digital wallets."
          }
        ].map((feature, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition duration-300">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Feacture

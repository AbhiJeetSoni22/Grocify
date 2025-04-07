import React from 'react'

const Working = () => {
  return (
    <section id="how-it-works" className="py-16 bg-green-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How Grocify Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Get your groceries in just a few simple steps</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            step: "1",
            title: "Browse Products",
            description: "Explore thousands of fresh products from local stores",
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            step: "2",
            title: "Add to Cart",
            description: "Select items you need and add them to your cart",
            image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            step: "3",
            title: "Checkout",
            description: "Choose delivery time and payment method",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          },
          {
            step: "4",
            title: "Receive Delivery",
            description: "Get your order delivered fast to your doorstep",
            image: "https://plus.unsplash.com/premium_photo-1682090260563-191f8160ca48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ].map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {step.step}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  )
}

export default Working

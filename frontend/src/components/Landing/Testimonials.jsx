import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our happy customers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            quote: "Grocify has saved me so much time! I can't believe I waited this long to try it. The produce is always fresh and delivery is lightning fast.",
            name: "Sarah Johnson",
            role: "Working Mom",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          {
            quote: "As someone who doesn't drive, Grocify has been a lifesaver. The selection is great and the delivery drivers are always friendly and professional.",
            name: "Michael Chen",
            role: "College Student",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          {
            quote: "I love that I can get organic and specialty items delivered. The app is easy to use and customer service is responsive when needed.",
            name: "Emma Rodriguez",
            role: "Health Enthusiast",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-xl">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials

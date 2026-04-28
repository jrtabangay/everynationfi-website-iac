import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      message: ''
    });
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">We'd Love to Hear From You</h2>
          <p className="text-xl text-gray-600">
            Whether you have questions about our churches, want to get involved, or are looking for a community in your city, we are here for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <a href="mailto:info@everynation.fi" className="text-secondary hover:text-orange-600 transition">
              info@everynation.fi
            </a>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <a href="tel:+358401234567" className="text-secondary hover:text-orange-600 transition">
              +358 40 123 4567
            </a>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-bold mb-2">Visit Us</h3>
            <p className="text-gray-600">
              Find a church near you in any of our 12 cities
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg p-12 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="mb-6">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">Select Your City</option>
                <option value="Tampere">Every Nation Tampere</option>
                <option value="Helsinki">Every Nation Helsinki</option>
                <option value="Turku">Every Nation Turku</option>
                <option value="Oulu">Every Nation Oulu</option>
                <option value="Jyväskylä">Every Nation Jyväskylä</option>
                <option value="Lahti">Every Nation Lahti</option>
                <option value="Espoo">Every Nation Espoo</option>
                <option value="Vantaa">Every Nation Vantaa</option>
                <option value="Kuopio">Every Nation Kuopio</option>
                <option value="Joensuu">Every Nation Joensuu</option>
                <option value="Vaasa">Every Nation Vaasa</option>
                <option value="Rovaniemi">Every Nation Rovaniemi</option>
              </select>
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

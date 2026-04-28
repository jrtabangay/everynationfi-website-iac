import React, { useState } from 'react';

export default function Events() {
  const [events] = useState([
    {
      type: 'Conference',
      title: 'EN Finland National Conference',
      date: 'May 4, 2026',
      location: 'Helsinki',
      image: '🎯'
    },
    {
      type: 'Outreach',
      title: 'Campus Outreach Day',
      date: 'May 18, 2026',
      location: 'Tampere University',
      image: '🌍'
    },
    {
      type: 'Worship',
      title: 'Summer Worship Night',
      date: 'June 1, 2026',
      location: 'Turku',
      image: '🎵'
    }
  ]);

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Join us for worship, community, and life-changing experiences across Finland</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-r from-secondary to-orange-500 h-32 flex items-center justify-center">
                <div className="text-6xl">{event.image}</div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-secondary uppercase mb-2">{event.type}</div>
                <h3 className="text-xl font-bold mb-4 text-primary">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="mr-2">📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}

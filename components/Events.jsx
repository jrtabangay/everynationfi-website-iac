 'use client';

import { useState } from 'react';

export default function Events() {
  const [selectedImage, setSelectedImage] = useState(null);
  const events = [
    { type: 'Community', title: 'Coffee Life Talk', date: 'Every last Saturday of the month · 13:00–16:00', location: 'Kissanmaankatu 20B, Common Room', image: '/events/coffee-life-talk.jpg' },
    { type: 'Prayer', title: 'Online Prayer Meeting', date: 'Every Saturday · 17:00–18:00', location: 'Online · Google Meet link will be shared', image: '/events/prayer-meeting.jpg' },
    { type: 'Community', title: 'Unplugged Acoustic Night', date: 'September 18 · 18:00', location: 'Hatanpään Valtatie 6B, 4th floor, Tampere', image: '/events/unplugged.jpg' },
    { type: 'Discipleship', title: 'Discipleship Meeting', date: 'October 17 · 10:00 AM', location: 'Hatanpään Valtatie 6B, 4th floor, Tampere', image: '/events/discipleship-meeting.jpg' },
    { type: 'Announcement', title: "We've Moved to Our New Venue", date: 'Starting September 20 · 13:00 onwards', location: 'Hatanpään Valtatie 6B, 4th floor, Tampere', image: '/events/new-venue.jpg' }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Join us for worship, community, and life-changing experiences in Tampere</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div key={event.title} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              <button type="button" onClick={() => setSelectedImage(event)} className="block w-full text-left" aria-label={`Open full image for ${event.title}`}>
                <img src={event.image} alt={event.title} className="w-full h-72 object-cover cursor-zoom-in" />
              </button>
              <div className="p-6">
                <div className="text-sm font-semibold text-secondary uppercase mb-2">{event.type}</div>
                <h3 className="text-xl font-bold mb-4 text-primary">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2"><span className="mr-2">Date:</span><span>{event.date}</span></div>
                <div className="flex items-center text-gray-600"><span className="mr-2">Place:</span><span>{event.location}</span></div>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true" aria-label={selectedImage.title}>
            <img src={selectedImage.image} alt={selectedImage.title} className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(event) => event.stopPropagation()} />
          </div>
        )}
      </div>
    </section>
  );
}

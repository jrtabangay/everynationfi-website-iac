export default function Locations() {
  const cities = [
    { name: 'Every Nation Tampere', tagline: 'One Foot on Campus, One Foot in the City', region: 'Pirkanmaa' },
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Every Nation Tampere</h2>
          <p className="text-xl text-gray-600">Every Nation Finland has a church community in Tampere. Join us this Sunday.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-bold text-primary mb-2">{city.name}</h3>
              <p className="text-secondary font-semibold mb-3">{city.tagline}</p>
              <p className="text-gray-600 text-sm mb-4">{city.region}</p>
              <button className="text-secondary font-semibold hover:text-orange-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Every Nation Finland is actively reaching campuses and communities in Tampere.
          </p>
          <button className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Connect in Tampere
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Locations() {
  const cities = [
    { name: 'Every Nation Tampere', tagline: 'One Foot on Campus, One Foot in the City', region: 'Pirkanmaa' },
    { name: 'Every Nation Helsinki', tagline: 'Reaching the Capital for Christ', region: 'Uusimaa' },
    { name: 'Every Nation Turku', tagline: 'Ancient City, New Life', region: 'Southwest Finland' },
    { name: 'Every Nation Oulu', tagline: 'Northern Lights, Eternal Hope', region: 'North Ostrobothnia' },
    { name: 'Every Nation Jyväskylä', tagline: 'Heart of Finland, Heart for God', region: 'Central Finland' },
    { name: 'Every Nation Lahti', tagline: 'Gateway to the Lakeland', region: 'Päijät-Häme' },
    { name: 'Every Nation Espoo', tagline: 'Modern City, Ancient Gospel', region: 'Uusimaa' },
    { name: 'Every Nation Vantaa', tagline: 'Growing Community, Growing Faith', region: 'Uusimaa' },
    { name: 'Every Nation Kuopio', tagline: 'Eastern Lights', region: 'North Savo' },
    { name: 'Every Nation Joensuu', tagline: 'Where East Meets Faith', region: 'Eastern Finland' },
    { name: 'Every Nation Vaasa', tagline: 'Coastal Blessings', region: 'Ostrobothnia' },
    { name: 'Every Nation Rovaniemi', tagline: 'Arctic Light', region: 'Lapland' },
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Find Your City</h2>
          <p className="text-xl text-gray-600">Every Nation Finland has churches across the country. Find the community nearest to you and join us this Sunday.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-bold text-primary mb-2">{city.name}</h3>
              <p className="text-secondary font-semibold mb-3">{city.tagline}</p>
              <p className="text-gray-600 text-sm mb-4">{city.region}</p>
              <button className="text-secondary font-semibold hover:text-orange-600 transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Every Nation Finland is actively reaching campuses across the country. Our campus missionaries are present at universities from Aalto University in Espoo to the University of Lapland in Rovaniemi.
          </p>
          <button className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Find Campus Near You
          </button>
        </div>
      </div>
    </section>
  );
}

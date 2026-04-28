export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-gray-900 text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Love God.<br />Love People.
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Christ-centered, Spirit-empowered, and socially responsible churches across Finland. Reaching every campus and every city.
            </p>
            <div className="flex gap-4">
              <a href="#locations" className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Find Your Church
              </a>
              <a href="#contact" className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-lg font-semibold transition">
                Get Connected
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-secondary to-orange-500 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">Every Nation</div>
                <div className="text-2xl">Finland</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-secondary mb-2">12</div>
          <div className="text-gray-300">Cities in Finland</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-secondary mb-2">3000+</div>
          <div className="text-gray-300">Community Members</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-secondary mb-2">15+</div>
          <div className="text-gray-300">University Campuses</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-secondary mb-2">Since 2018</div>
          <div className="text-gray-300">Serving Finland</div>
        </div>
      </div>
    </section>
  );
}

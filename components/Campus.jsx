export default function Campus() {
  return (
    <section id="campus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Reaching Every Campus</h2>
            <p className="text-gray-600 text-lg mb-6">
              We firmly believe that if we change the campus, we will eventually change the family, the nation, and the world.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Our campus missionaries are active at universities across Finland, evangelizing and discipling the next generation of leaders.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-secondary font-bold mr-3">✓</span>
                <span className="text-gray-700">15+ University campuses nationwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary font-bold mr-3">✓</span>
                <span className="text-gray-700">Active discipleship and leadership training</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary font-bold mr-3">✓</span>
                <span className="text-gray-700">Community outreach and evangelism</span>
              </li>
            </ul>
            <button className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Join Campus Ministry
            </button>
          </div>
          <div className="bg-gradient-to-br from-secondary to-orange-500 rounded-lg h-96 flex items-center justify-center shadow-lg">
            <div className="text-center text-white">
              <div className="text-6xl font-bold mb-4">🎓</div>
              <div className="text-2xl font-bold">Campus Ministry</div>
              <div className="text-lg mt-2">Reaching the Next Generation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

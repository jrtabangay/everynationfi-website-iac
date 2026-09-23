export default function Campus() {
  return (
    <section id="campus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Reaching Every Campus</h2>
            <p className="text-gray-600 text-lg mb-6">We firmly believe that if we change the campus, we will eventually change the family, the nation, and the world.</p>
            <p className="text-gray-600 text-lg mb-6">Our campus missionaries are active at universities across Finland, evangelizing and discipling the next generation of leaders.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start"><span className="text-secondary font-bold mr-3">+</span><span className="text-gray-700">Campus ministry and discipleship</span></li>
              <li className="flex items-start"><span className="text-secondary font-bold mr-3">+</span><span className="text-gray-700">Active leadership training</span></li>
              <li className="flex items-start"><span className="text-secondary font-bold mr-3">+</span><span className="text-gray-700">Community outreach and evangelism</span></li>
            </ul>
            <button className="bg-secondary hover:bg-primary text-white px-8 py-3 rounded-lg font-semibold transition">Join Campus Ministry</button>
          </div>
          <div className="bg-white rounded-lg h-96 flex flex-col items-center justify-center shadow-lg p-8">
            <img src="/branding/enc-logo.png" alt="Every Nation Campus" className="max-w-full h-auto mb-8" />
            <div className="text-3xl font-bold text-center text-black">Change the Campus. Change the World.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const values = [
    {
      title: 'Christ-Centered',
      description: 'Jesus is the foundation of everything we do',
      icon: '✝️'
    },
    {
      title: 'Spirit-Empowered',
      description: 'We depend on the Holy Spirit for transformation',
      icon: '🔥'
    },
    {
      title: 'Socially Responsible',
      description: 'We serve our communities with love and action',
      icon: '🤝'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">A Church for Every Nation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Since 2018, Every Nation missionaries and church planters have answered the call to bring the gospel to campuses and cities across Finland.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
              <p className="text-gray-600 text-lg">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-12 shadow-md">
          <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We exist to honor God by establishing Christ-centered, Spirit-empowered, and socially responsible churches and campus ministries in every nation. We believe that if we change the campus, we will change the family, the nation, and the world. Our focus is on campus ministry, church planting, and discipleship to reach students and create transformative communities of faith.
          </p>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Every Nation Finland</h3>
            <p className="text-gray-300 text-sm">
              Christ-centered, Spirit-empowered, and socially responsible churches across Finland. We exist to honor God by establishing campus-reaching churches in every city.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/everynationfinland" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                Instagram
              </a>
              <a href="https://facebook.com/everynationfinland" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                Facebook
              </a>
              <a href="https://youtube.com/everynationfinland" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our City</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#locations" className="hover:text-secondary transition">Every Nation Tampere</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <div className="font-semibold text-white mb-1">Email</div>
                <a href="mailto:vince.bitana@everynation.fi" className="hover:text-secondary transition">
                  vince.bitana@everynation.fi
                </a>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Phone</div>
                <a href="tel:+358505123876" className="hover:text-secondary transition">
                  +358 50 512 3876
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              <p>© 2026 Every Nation Finland. All rights reserved.</p>
              <p className="mt-2 font-bold text-white">Every Nation Finland RY (Y-tunnus: 3641711-5)</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-secondary transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-secondary transition">Terms of Use</Link>
              <a href="https://www.everynation.org" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                everynation.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

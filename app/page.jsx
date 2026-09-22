import Hero from '@/components/Hero';
import About from '@/components/About';
import Locations from '@/components/Locations';
import Campus from '@/components/Campus';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import { businessId, maintenanceMode, organizationName } from '@/site.config';

function MaintenancePage() {
  return (
    <main className="min-h-screen bg-primary text-white flex items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl">
        <div className="mb-8 h-1 w-20 bg-secondary" />
        <p className="text-sm font-bold uppercase text-secondary mb-4">Website under maintenance</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{organizationName}</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          We are updating the website and will be back soon.
        </p>
        <div className="mt-10 border-t border-white/20 pt-6 text-lg">
          <p className="font-bold">{organizationName}</p>
          <p className="font-bold">Y-tunnus: {businessId}</p>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  if (maintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <main>
      <Hero />
      <About />
      <Locations />
      <Campus />
      <Events />
      <Contact />
    </main>
  );
}

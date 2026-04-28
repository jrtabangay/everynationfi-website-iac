import Hero from '@/components/Hero';
import About from '@/components/About';
import Locations from '@/components/Locations';
import Campus from '@/components/Campus';
import Events from '@/components/Events';
import Contact from '@/components/Contact';

export default function Home() {
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

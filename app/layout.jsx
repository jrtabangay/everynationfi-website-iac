import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata = {
  title: 'Every Nation Finland | Love God. Love People.',
  description: 'Christ-centered, Spirit-empowered churches reaching every campus and city in Finland.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

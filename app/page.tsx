import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import WhyMedKey from './components/WhyMedKey';
import Security from './components/Security';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductPreview />
      <HowItWorks />
      <Features />
      <WhyMedKey />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

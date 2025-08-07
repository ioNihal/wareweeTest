import Benefits from "./components/Benefits/Benefits";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Stats from "./components/Stats/Stats";
import Support from "./components/Support/Support";
import Testimonials from "./components/Testimonials/Testimonials";
import './App.css';


export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Support />
        <Features />
        <Benefits />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
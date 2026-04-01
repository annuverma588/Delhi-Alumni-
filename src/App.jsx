import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
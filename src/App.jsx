import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import OurPride from "./components/OurPride";
import Members from "./components/Members";
import Contact from "./components/Contact";
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
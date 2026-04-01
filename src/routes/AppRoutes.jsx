import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/Pages/About";
import Members from "../components/Pages/Members";
import Mission from "../components/Pages/Mission";
import OurPride from "../components/Pages/OurPride";
import Contact from "../components/Pages/Contact";

import Hero from "../components/Hero";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/about" element={<About />} />
      <Route path="/members" element={<Members/>} />
      <Route path="/mission" element={<Mission/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/ourpride" element={<OurPride/>} />
    </Routes>
  );
}
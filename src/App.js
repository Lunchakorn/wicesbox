import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import ResponsiveHeader from "./components/Header/ResponsiveHeader";
import Hero from "./components/Hero/Hero";
import Porfolios from "./components/Porfolios/Porfolios";
import Team from "./components/Team/Team";
import './App.css'

function App() {
  return (
    <div>
      <ResponsiveHeader />
      <Hero />
      <Porfolios />
      <Team />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

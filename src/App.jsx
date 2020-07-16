import React from 'react';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Prices from './components/Prices';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrousel />
      <section>
        <AboutUs />
        <Services />
        <Prices />
        <Contact />
      </section>
    </div>
  );
}

export default App;

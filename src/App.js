import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Skills from './components/Skills';
import Galery from './components/Galery';
import Reviews from './components/Reviews';
import Interview from './components/Interview';
import Touch from './components/Touch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Story/>
        <Galery/>
        <Skills/>
        <Reviews/>
        <Interview />
        <Touch />
        <Footer />
    </div>
  );
}

export default App;

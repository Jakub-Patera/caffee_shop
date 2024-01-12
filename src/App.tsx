import './App.css';
// import Footer from './components/Footer'
// import Gallery from './components/Gallery'
import Hero from './components/Hero';
//import Menu from './components/Menu'
import Navigation from './components/Navigation';
import ProductsHero from './components/ProductsHero';
// import Testimonials from './components/Testimonials'
// import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ProductsHero />
      {/*<Welcome/> 
     <Menu/>
     <Gallery/>
     <Testimonials/>
     <Footer/> */}
    </>
  );
}

export default App;

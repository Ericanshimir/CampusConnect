import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import CardSlider from './components/CardSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(()=> {
    AOS.init({duration: 1500})
  })
  return (
    <div className="App">
      <Navbar/>

      <div data-aos="fade-left">
        <Banner />
      </div>
      <div data-aos="fade-down">
        <About />
      </div>
      <section data-aos="fade-down">
      <CardSlider/>
      </section>


      <div className='footer' data-aos="fade-up">
          <p className='content_footer'>Made with ❤️ by the campusConnect team</p>
      </div>
    </div>
  );
}

export default App;
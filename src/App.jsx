import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Pages from "./Components/Pages";
import Aos from "aos";
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
    Aos.refresh();
  }, []);

  return (
    <div>
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;

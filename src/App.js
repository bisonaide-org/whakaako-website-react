import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import TakeAction from "./pages/TakeAction";
import WhatWeDo from "./pages/WhatWeDo";


function App() {
  return (
    <div className="App">
   <Navbar/>
     <LandingPage />
     <WhatWeDo />
     <TakeAction />
        <About />
        <Footer /> 
    </div>
  );
}

export default App;

import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';

function App() {
	return (
    <div style={{minHeight:"400vh"}} className="App">
      <Navbar />			
      <HeroSection />
    </div>
  );
}

export default App;

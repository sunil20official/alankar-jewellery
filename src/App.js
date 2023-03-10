import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

// home jewellery component images
import img1 from './assets/model/HomeJewel3.jpg';
import img_1_placeholder from "./assets/model/HomeJewel1placeholder.jpg";
import img2 from './assets/model/HomeJewel1.jpg';
import img_2_placeholder from "./assets/model/HomeJewel2placeholder.jpg";
import img3 from './assets/model/HomeJewel2.jpg';
import img_3_placeholder from "./assets/model/HomeJewel3placeholder.jpg";

// all components
import SplashScreen from './components/splashscreen/SplashScreen';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel.jsx';
// import OurCreations from "./components/ourcreations/OurCreations";

// import VideoBg from './assets/videoBg.mp4';
import Footer from './components/footer/Footer.jsx';
import About from './pages/aboutus/About';
import EngagementAndBridal from './pages/engagementandbridal/EngagementAndBridal';
import Watch from './pages/watches/Watch';
import Media from './pages/media/Media';
import GoTop from './components/GoTop';
import Store from './pages/store/Store';
import Contactus from './pages/contactus/Contactus';
import HomeJewellerySection from './components/shared/homeJewellerySection/HomeJewellerySection';
import HomeJewellerySectionReverse from './components/shared/homeJewellerySection/HomeJewellerySectionReverse';
import DiscoverCollections from './components/discovercollections/DiscoverCollections';

function App() {
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 800);
		window.scrollTo(0, 0);
	});

	if (loading) return <SplashScreen />;

	return (
    <div style={{}} className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <DiscoverCollections />
                <HomeJewellerySection
                  img_src={img1}
                  img_src_placeholder={img_1_placeholder}
                  heading={"Diamond Jewellery"}
                  paragraph={
                    "Our diamond collection features beautifully crafted necklaces, earrings, bangles and more, designed to add a brilliant sparkle and charm to your special moments."
                  }
                  link={"/store"}
                />
                <HomeJewellerySectionReverse
                  img_src={img2}
                  img_src_placeholder={img_2_placeholder}
                  heading={"Gold Jewellery"}
                  paragraph={
                    "Our gold jewellery collection offers a wide range of beautifully designed pieces that are perfect for any occasion. Whether it is a special occasion or just an ordinary day."
                  }
                  link={"/store"}
                />
                <HomeJewellerySection
                  img_src={img3}
                  img_src_placeholder={img_3_placeholder}
                  heading={"Polki Jewellery"}
                  paragraph={
                    "Our Polki jewellery collection features natural uncut diamonds arranged in a beautiful tapestry, resulting in stunning pieces of jewellery that are both unique and elegant."
                  }
                  link={"/store"}
                />

                <Carousel />
              </>
            }
          />
          <Route path="/watches" element={<Watch />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/engagementandbridal"
            element={<EngagementAndBridal />}
          />
          <Route path="/store" element={<Store />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <GoTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

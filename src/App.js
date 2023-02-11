import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

// home jewellery component images
import img1 from "./assets/homepage1.png";
import img2 from "./assets/homepage2.png";
import img3 from "./assets/homepage3.png";

// all components
import SplashScreen from "./components/splashscreen/SplashScreen";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel.jsx";
// import OurCreations from "./components/ourcreations/OurCreations";
import VideoBg from './assets/videoBg.mp4';
import Footer from "./components/footer/Footer.jsx";
import About from "./pages/aboutus/About";
import EngagementAndBridal from './pages/engagementandbridal/EngagementAndBridal';
import Watch from "./pages/watches/Watch";
import GoTop from "./components/GoTop";
import Store from "./pages/store/Store";
import Contactus from "./pages/contactus/Contactus";
import HomeJewellerySection from "./components/shared/homeJewellerySection/HomeJewellerySection";
import HomeJewellerySectionReverse from "./components/shared/homeJewellerySection/HomeJewellerySectionReverse";
import DiscoverCollections from "./components/discovercollections/DiscoverCollections";

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
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <HeroSection />
                    <DiscoverCollections />
                    <HomeJewellerySection
                      img_src={img1}
                      heading={"Diamond Jewellery"}
                      paragraph={
                        "Gift your special moments the brilliant sparkle and charm of eternity with prudently crafted diamond necklaces, earrings, and bangles from Alankar jewellers."
                      }
                      link={"/store"}
                    />
                    <HomeJewellerySectionReverse
                      img_src={img2}
                      heading={"Gold Jewellery"}
                      paragraph={
                        "Whether it is one of those important occasions in our life or just ordinary moments, gold jewellery collection from Alankar jewellers makes for the most popular choice."
                      }
                      link={"/store"}
                    />
                    <HomeJewellerySection
                      img_src={img3}
                      heading={"Polki Jewellery"}
                      paragraph={
                        "Intricately crafted Polki jewellery from Alankar jewellers, with natural uncut diamonds arranged in a beautiful tapestry, is indeed what you should be looking forward to in order to feel special."
                      }
                      link={"/store"}
                    />

                    <Carousel />
                    {/* <OurCreations /> */}
                  </motion.div>
                </>
              }
            />
            <Route path="/watches" element={<Watch />} />
            <Route path="/about" element={<About />} />
            <Route path="/engagementandbridal" element={<EngagementAndBridal />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </AnimatePresence>
        <GoTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

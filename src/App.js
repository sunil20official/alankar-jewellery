import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

// all components
import SplashScreen from './components/splashscreen/SplashScreen';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel.jsx';
import OurCreations from './components/ourcreations/OurCreations';
import Footer from './components/footer/Footer.jsx';
import About from './pages/aboutus/About';
import Watch from './pages/watches/Watch';
import GoTop from './components/GoTop';
import Store from './pages/store/Store';
import Contactus from './pages/contactus/Contactus';
import DiscoverCollections from './components/discovercollections/DiscoverCollections';

function App() {
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 800);
		window.scrollTo(0, 0);
	});

	if (loading) return <SplashScreen />;

	return (
		<div style={{}} className='App'>
			<Router>
				<Navbar />
				<AnimatePresence>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<motion.div
										initial={{ opacity: 0, y: 500 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
									>
										<HeroSection />
										<DiscoverCollections />
										<Carousel />
										<OurCreations />
									</motion.div>
								</>
							}
						/>
						<Route path='/watches' element={<Watch />} />
						<Route path='/about' element={<About />} />
						<Route path='/store' element={<Store />} />
						<Route path='/contactus' element={<Contactus />} />
					</Routes>
				</AnimatePresence>
				<GoTop />
				<Footer />
			</Router>
		</div>
	);
}

export default App;

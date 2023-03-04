import React from 'react';
import './DiscoverCollection.css';
import Image2 from '../../assets/creationsImage/EarPiece.png';
import Image1 from '../../assets/creationsImage/PNeckLace.png';
import Image3 from '../../assets/creationsImage/Bangal__Custom.png';
import { useNavigate } from 'react-router-dom';
import HeadComponent from '../shared/headingcomponent/HeadingComponent';
// import ButtonComponent from '../shared/buttonComponent/ButtonComponent';

const DiscoverCollections = () => {
	const navigate = useNavigate();
	return (
		<div data-aos='fade-up' data-aos-duration='40000'>
			<div class='album bg-light'>
				<HeadComponent
					heading={'Discover our new collection'}
					paragraph={
						'At Alankar Jewellers, we are constantly updating and adding to our collections to ensure that we offer our clients the latest in jewellery fashion.'
					}
					paragraph2={
						' Our new collections feature a wide range of exquisite pieces, each crafted with precision and care by our expert artisans'
					}
					marginTop={'-2rem'}
				/>
				<div class='container' style={{ background: 'black' }}>
					<div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						<div class='col'>
							<div class='card shadow-sm'>
								<img src={Image1} alt='' />
								<div class='card-body'>
									<h4 class='card-text text-center'>NECKLACE</h4>
								</div>
							</div>
						</div>
						<div class='col'>
							<div class='card shadow-sm'>
								<img src={Image2} alt='' />

								<div class='card-body'>
									<h4 class='card-text text-center'>EARRINGS</h4>
								</div>
							</div>
						</div>

						<div class='col'>
							<div class='card shadow-sm'>
								<img src={Image3} alt='' />

								<div class='card-body'>
									<h4 class='card-text text-center'>BANGLES</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='d-flex justify-content-center'>
					<button
						onClick={() => navigate('/store')}
						className='home-discover-more-bttn'
					>
						Discover More
					</button>
				</div>
			</div>
		</div>
	);
};

export default DiscoverCollections;

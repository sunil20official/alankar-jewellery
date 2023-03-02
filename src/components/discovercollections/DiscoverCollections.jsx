import React from 'react';
import './DiscoverCollection.css';
import Image2 from '../../assets/creationsImage/EarPiece.jpg';
import Image1 from '../../assets/creationsImage/PNeckLace.jpg';
import Image3 from '../../assets/creationsImage/Bangal.jpg';
import { useNavigate } from 'react-router-dom';
// import ButtonComponent from '../shared/buttonComponent/ButtonComponent';

const DiscoverCollections = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div class='album py-3 bg-light'>
				<h2 className='text-center'>DISCOVER OUR NEW COLLECTIONS</h2>
				<div class='container py-2' style={{ background: 'black' }}>
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

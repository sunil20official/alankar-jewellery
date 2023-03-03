import React from 'react';
import './Footer.css';
import logo from '../../assets/logo_low_white.png';
import WriteToUS from './writeToUs';

const Footer = () => {
	return (
		<div className='footer-outer-div'>
			<div className='container-fluid'>
				<footer className='p-5'>
					<div className='row'>
						<div className='col-md-3 col-sm-6 mb-3'>
							<div className='Footer-logo'>
								<img src={logo} alt='logoInFooter' />
							</div>
							<p className='footer-text'>
								Welcome to Alankar Jewellers, where luxury and elegance meet to create
								timeless pieces of jewellery that will last a lifetime. We are proud to
								present our exquisite collections, featuring beautifully crafted
								diamond, polki, and gold jewellery, as well as stunning engagement and
								bridal sets
							</p>
						</div>

						<div className='col-md-3 col-sm-6 mb-3'>
							<h3 className='footer-h3'>WRITE TO US</h3>
							<div className='footer-form'>
								<WriteToUS />
							</div>
						</div>

						<div className='col-md-3 col-sm-6 mb-3'>
							<h3 className='footer-h3'>QUICK LINKS</h3>
							<ul className='nav flex-column'>
								<li className='nav-item mb-2'>
									<a href='/store' className='nav-link p-0'>
										Gold Collection
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a href='/store' className='nav-link p-0'>
										Diamond Collections
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a href='/store' className='nav-link p-0'>
										Polki Collection
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a
										target='_blank'
										href='https://play.google.com/store/apps/details?id=com.dsoft.alankar'
										className='nav-link p-0'
									>
										Investment Plan - VYOM
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a href='#' className='nav-link p-0'>
										Campaign 2022 - 2023
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a href='/contactus' className='nav-link p-0'>
										Reach Us
									</a>
								</li>
							</ul>
						</div>

						<div className='col-md-3 col-sm-6 mb-3'>
							<h3 className='footer-h3'>OUR STORES</h3>
							<div className='footer-reach-us'>
								<p>
									<u>
										<strong>FLAGSHIP STORE</strong>
									</u>
									<br /> Alankar Business Center <br /> East Boring Center <br />
									Patna, Bihar, India 800001 <br />
									Tel:{' '}
									<a className='f-nav' href='tel:+911141734567'>
										+91 11 4173 XXXXX
									</a>
									<br />
									Tel:{' '}
									<a className='f-nav' href='tel:+911145257700'>
										+91 11 4525 XXXXX
									</a>
									<br />
									Mob:{' '}
									<a className='f-nav' href='tel:+919811223344'>
										+91 98112 XXXXX
									</a>
									<br />
									Email:&nbsp;
									<a class='f-nav' href='mailto:info.agj@alankarjewellers.com'>
										info.agj@alankarjewellers.com
									</a>
								</p>
								<p>
									<u>
										<strong>HERITAGE SHOP</strong>
									</u>{' '}
									<br /> Alankar Business Center <br /> East Boring Center <br />
									Patna, Bihar, India 800001 <br />
									Tel:{' '}
									<a className='f-nav' href='tel:+911141734567'>
										+91 11 4173 XXXXX
									</a>
									<br />
									Tel:{' '}
									<a className='f-nav' href='tel:+911145257700'>
										+91 11 4525 XXXXX
									</a>
									<br />
									Mob:{' '}
									<a className='f-nav' href='tel:+919811223344'>
										+91 98112 XXXXX
									</a>
									<br />
									Email:&nbsp;
									<a class='f-nav' href='mailto:info.agj@alankarjewellers.com'>
										info.agj@alankarjewellers.com
									</a>
								</p>
							</div>
						</div>
					</div>

					<div className='d-flex flex-column flex-sm-row justify-content-between py-4 border-top'>
						<p
							style={{
								fontSize: '14px',
								letterSpacing: '1px',
								fontFamily: 'RegularCaslon',
								marginBotttom: '0px',
								color: '#fff',
							}}
						>
							© 2023 Alankar, Inc. All rights reserved.
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;

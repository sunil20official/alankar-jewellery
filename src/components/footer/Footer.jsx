import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
	return (
		<div className='footer-outer-div'>
			<div className='container'>
				<footer class='p-5'>
					<div class='row'>
						<div class='col-md-3 col-6 mb-3'>
							<h3 className='footer-h3'>services</h3>
							<ul class='nav flex-column'>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Home
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Features
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Pricing
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										FAQs
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										About
									</a>
								</li>
							</ul>
						</div>

						<div class='col-md-3 col-6 mb-3'>
							<h3 className='footer-h3'>corporate</h3>
							<ul class='nav flex-column'>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Home
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Features
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Pricing
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										FAQs
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										About
									</a>
								</li>
							</ul>
						</div>

						<div class='col-md-3 col-6 mb-3'>
							<h3 className='footer-h3'>legal terms</h3>
							<ul class='nav flex-column'>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Home
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Features
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										Pricing
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										FAQs
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a href='#' class='nav-link p-0'>
										About
									</a>
								</li>
							</ul>
						</div>

						<div class='col-md-3 col-6 mb-3'>
							<h3 className='footer-h3'>follow us</h3>
							<ul class='nav'>
								<li class='nav-item mb-2'>
									<a
										href='https://www.facebook.com/alankarpatna'
										target='_blank'
										class='nav-link p-0'
									>
										<FacebookOutlinedIcon />
									</a>
								</li>
								<li class='nav-item mb-2'>
									<a
										href='https://instagram.com/alankar_jewellers?igshid=YmMyMTA2M2Y='
										target='_blank'
										class='nav-link p-0 social-links'
									>
										<InstagramIcon />
									</a>
								</li>

								<li class='nav-item mb-2'>
									<a href='#' target='_blank' class='nav-link p-0 social-links'>
										<WhatsAppIcon />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class='d-flex flex-column flex-sm-row justify-content-between py-4 border-top'>
						<p
							style={{
								fontSize: '14px',
								letterSpacing: '1px',
								fontFamily: 'RegularCaslon',
								marginBotttom: '0px',
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

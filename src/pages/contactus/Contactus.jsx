import React from 'react';
import './Contactus.css';
import HeadComponent from '../../components/shared/headingcomponent/HeadingComponent';

const Contactus = () => {
	return (
		<div>
			<div className='contact-section-container'>
				<HeadComponent
					heading={'Contact Us'}
					paragraph={
						'For additional assistance, contact the Flagship Store directly.'
					}
					marginTop={'-4rem'}
				/>
				<div className='container contacts-section'>
					<div className='row' style={{ maxWidth: '1080px', margin: '0 auto' }}>
						<div className='col-md-4 col-sm-6 mt-5'>
							<div className='card vh-50'>
								<h5>ALANKAR JEWELLERS</h5>
								<div className='flagship-store-section'>
									<strong>
										<a href='#'>Flagship Store</a>&nbsp;
									</strong>
									|&nbsp;
									<a
										href='https://www.google.com/maps/dir/28.6411805,77.0449214/Alankar+Jewellers+-+Flagship+Store,+Alankar+Business+Center,+E+Boring+Canal+Rd,+Opp.+Udayan+Hospital,+Sri+Krishna+Nagar,+Buddha+Colony,+Patna,+Bihar+800001/@27.0890355,78.8390607,7z/data=!3m2!4b1!5s0x39ed583fc934cced:0x5935092c4d03fec0!4m10!4m9!1m1!4e1!1m5!1m1!1s0x39ed5836ddf9f617:0x3b84a8ddec34fb7b!2m2!1d85.1234216!2d25.6205214!3e0'
										target='_blank'
										rel='noreferrer'
									>
										Get Direction
									</a>
									<br />
									Alankar Business Center <br /> East Boring Canal Road <br /> Patna,
									Bihar, India 800001 <br /> Tel :&nbsp;
									<a href='tel:+91 xx xx xxxxx'>+91 XX XXXX XXXX </a> <br /> Tel :&nbsp;
									<a href='tel:+91612 2559154'>+91 61 2255 9154</a>
									<br /> Mob :&nbsp; <a href='tel:+XXXXXXXXXX'>
										+91 9065521594
									</a> <br /> Email :&nbsp;{' '}
									<a href='mailto:info.agj@alankarjewellers.com'>
										info.agj@alankarjewellers.com
									</a>
								</div>
								<hr />
								<div className='flagship-store-section'>
									<strong>
										<a href='#'>Heritage Store</a>&nbsp;
									</strong>
									|&nbsp;<a href='#'>Get Direction</a>
									<br />
									Alankar Business Center <br /> East Boring Canal Road <br /> Patna,
									Bihar, India 800001 <br /> Tel :&nbsp;
									<a href='tel:+9190655 21594'>+91 9065521594</a> <br /> Tel :&nbsp;
									<a href='tel:+91612 2559154'>+91 6122559154</a>
									<br /> Mob :&nbsp; <a href='tel:+XXXXXXXXXX'>
										+91 XXXXXXXXXX
									</a> <br /> Email :&nbsp;{' '}
									<a href='mailto:info.agj@alankarjewellers.com'>
										info.agj@alankarjewellers.com
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-8 vh-50 col-sm-6 mb-5'>
							<div class='mapouter'>
								<div class='gmap_canvas'>
									<iframe
										class='gmap_iframe'
										width='100%'
										frameborder='0'
										scrolling='no'
										marginheight='0'
										marginwidth='0'
										src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Alankar Business Center&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
									></iframe>
									<a href='https://pdflist.com/' alt='pdflist.com'></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contactus;

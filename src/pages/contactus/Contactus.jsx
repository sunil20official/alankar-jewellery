import React from 'react';
import './Contactus.css';

const Contactus = () => {
	return (
		<div>
			<div className='contact-section-container'>
				<div className='container contacts-section'>
					<div className='row'>
						<div className='col-md-4 col-sm-6 mt-5'>
							<div className='card vh-50 border'>
								<h5>ALANKAR JEWELLERS</h5>
								<div className='flagship-store-section'>
									<strong>
										<a href='#'>Flagship Store</a>&nbsp;
									</strong>
									|&nbsp;<a href='#'>Get Direction</a>
									<br />
									Alankar Business Center <br /> East Boring Canal Road <br /> Patna,
									Bihar, India 800001 <br /> Tel :&nbsp;
									<a href='tel:+9190655 21594'>9065521594</a> <br /> Tel :&nbsp;
									<a href='tel:+91612 2559154'>6122559154</a>
									<br /> Mob :&nbsp; <a href='tel:+XXXXXXXXXX'>XXXXXXXXXX</a> <br />{' '}
									Email :&nbsp;{' '}
									<a href='mailto:info.agj@alankarjewellers.com'>
										info.agj@alankarjewellers.com
									</a>
								</div>
								<hr />
								<div className='flagship-store-section'>
									<strong>
										<a href='#'>Flagship Store</a>&nbsp;
									</strong>
									|&nbsp;<a href='#'>Get Direction</a>
									<br />
									Alankar Business Center <br /> East Boring Canal Road <br /> Patna,
									Bihar, India 800001 <br /> Tel :&nbsp;
									<a href='tel:+9190655 21594'>9065521594</a> <br /> Tel :&nbsp;
									<a href='tel:+91612 2559154'>6122559154</a>
									<br /> Mob :&nbsp; <a href='tel:+XXXXXXXXXX'>XXXXXXXXXX</a> <br />{' '}
									Email :&nbsp;{' '}
									<a href='mailto:info.agj@alankarjewellers.com'>
										info.agj@alankarjewellers.com
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-8 vh-50 col-sm-6'>
							<div class='mapouter'>
								<div class='gmap_canvas'>
									<iframe
										class='gmap_iframe'
										width='100%'
										frameborder='0'
										scrolling='no'
										marginheight='0'
										marginwidth='0'
										src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Boring Canal Rd, Sri Krishna Nagar, Buddha Colony, Patna, Bihar 800001&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
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

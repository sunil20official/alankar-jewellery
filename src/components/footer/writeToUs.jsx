import React from 'react';
import './Footer.css';

const writeToUs = () => {
	return (
		<div className=''>
			<div className='form-floating mb-3'>
				<input
					type='text'
					className='form-control'
					style={{ background: '#000000' }}
					id='floatingInput'
					placeholder='Name'
				/>
				<label for='floatingInput'>Name</label>
			</div>
			<div className='form-floating mb-3'>
				<input
					type='email'
					className='form-control'
					style={{ background: '#000000' }}
					id='floatingInput'
					placeholder='EmailAddress'
				/>
				<label for='floatingPassword'>Email address</label>
			</div>
			<div className='form-floating mb-3'>
				<input
					type='password'
					className='form-control'
					style={{ background: '#000000' }}
					id='floatingPassword'
					placeholder='Password'
				/>
				<label for='floatingPassword'>Password</label>
			</div>
			<div class='form-floating mb-3'>
				<textarea
					class='form-control'
					placeholder='Leave a comment here'
					id='floatingTextarea2'
					style={{ height: '100px', background: '#000000' }}
				></textarea>
				<label for='floatingTextarea2'>Message</label>
			</div>

			<div
				className='btn btn-primary px-4'
				style={{ background: '#000000', border: '1px solid #fbbc93' }}
			>
				Send
			</div>
		</div>
	);
};

export default writeToUs;

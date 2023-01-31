import styled from '@emotion/styled';
import React from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const GoTop = () => {
	const gotoBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	return (
		<Wrapper>
			<div className='top-btn' onClick={gotoBtn}>
				<h5>
					<KeyboardDoubleArrowUpIcon
						style={{ color: 'white' }}
						className='top-btn--icon'
					/>
				</h5>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	.top-btn {
		font-size: 3rem;
		width: 3rem;
		height: 3rem;

		background-color: #040e28;
		box-shadow: #00182b;
		border: 1px solid white;
		border-radius: 50%;
		position: fixed;
		bottom: 1rem;
		right: 3rem;

		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	&--icon {
		animation: gototop 2s linear infinite alternate-reverse;
	}

	@keyframes gototop {
		0% {
			transform: translateY(-0.5rem);
		}

		100% {
			transform: translateY(1rem);
		}
	}
`;

export default GoTop;

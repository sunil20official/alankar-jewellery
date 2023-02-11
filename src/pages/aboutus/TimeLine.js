import React from 'react';
import './About.css';
import img from '../../media/timeline-dummy-image.avif';

const TimeLine = () => {
	const timeline = [
		{
			year: '1999',
			title: 'Harry Winston is born in New York City',
			complete_info:
				"The son of immigrants, Winston grows up in modest surroundings and is exposed from an early age to the inner workings of his father's small jewelry shop on the city's west side.",
			src: img,
		},
		{
			year: '2000',
			title: 'Harry Winston is born in New York City',
			complete_info:
				"The son of immigrants, Winston grows up in modest surroundings and is exposed from an early age to the inner workings of his father's small jewelry shop on the city's west side.",
			src: img,
		},
		{
			year: '2001',
			title: 'Opus',
			complete_info:
				'Harry Winston introduces the groundbreaking Opus Series, creating new limited edition timepieces in partnership with renowned horologists.',
			src: img,
		},
		{
			year: '2002',
			title: 'Harry Winston is born in New York City',
			complete_info:
				"The son of immigrants, Winston grows up in modest surroundings and is exposed from an early age to the inner workings of his father's small jewelry shop on the city's west side.",
			src: img,
		},
		{
			year: '2003',
			title: 'Harry Winston is born in New York City',
			complete_info:
				"The son of immigrants, Winston grows up in modest surroundings and is exposed from an early age to the inner workings of his father's small jewelry shop on the city's west side.",
			src: img,
		},
		{
			year: '2005',
			title: 'Harry Winston is born in New York City',
			complete_info:
				"The son of immigrants, Winston grows up in modest surroundings and is exposed from an early age to the inner workings of his father's small jewelry shop on the city's west side.",
			src: img,
		},
		{
			year: '2014',
			title: 'The Winston Blue',
			complete_info:
				'Harry Winston, Inc. purchases a rare 13.22 carat, flawless fancy vivid blue diamond at auction. Named the ' +
				'Winston Blue,' +
				'the magnificent pear-shaped stone has been described as one of the largest of its kind.',
			src: img,
		},
		{
			year: '2017',
			title: 'Harry Winston is born in New York City',
			complete_info:
				"The son of immigrants, Winston grows up in modest surroundings and is exposed from an early age to the inner workings of his father's small jewelry shop on the city's west side.",
			src: img,
		},
		{
			year: '2021',
			title: 'Harry Winston is born in New York City',
			complete_info:
				"The son of immigrants, Winston grows up in modest surroundings and is exposed from an early age to the inner workings of his father's small jewelry shop on the city's west side.",
			src: img,
		},
	];

	const [currTimeline, setCurrTimeline] = React.useState(timeline[0]);

	return (
		<div className='timeline-container'>
			<div className='timeline-content'>
				<div className='timeline-grid'>
					<div className='yr-ul-container'>
						<ul className='year-list-container'>
							{timeline.map((timeline_obj) => (
								<li
									onClick={() => setCurrTimeline(timeline_obj)}
									className={timeline_obj.year === currTimeline.year && 'active'}
								>
									{timeline_obj.year}
								</li>
							))}
						</ul>
					</div>
					<div className='timeline-obj-container'>
						<div className='timeline-obj-text-part'>
							<h2 className='timeline-obj-year'>{currTimeline.year}</h2>
							<h2 className='timeline-obj-heading'>{currTimeline.title}</h2>
							<p>{currTimeline.complete_info}</p>
						</div>
						<div className='timeline-obj-img-part'>
							<img src={currTimeline.src} alt='dummy for alankar website' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeLine;

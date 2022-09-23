import React from 'react';
import './Country.css';

const Country = (props) => {
	// console.log(props.country);
	const {
		name,
		capital,
		flags: { png },
		population
	} = props.country;

	return (
		<div className='country'>
			<img src={png} alt='Images' />
			<h1>Country Name: {name}</h1>
			<h3>Country Capital: {capital}</h3>
			<h6>Country Popolation: {population}</h6>
		</div>
	);
};

export default Country;

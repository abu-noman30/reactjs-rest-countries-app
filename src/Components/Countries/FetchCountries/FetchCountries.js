import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './FetchCountries.css';

const FetchCountries = () => {
	const [Countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const rest = await fetch('https://restcountries.com/v2/all');
			const data = await rest.json();
			setCountries(data);
		};

		fetchData();
	}, []);

	return (
		<>
			<h1 className='title'>Total Countries: {Countries.length}</h1>
			<div className='countries-container'>
				{Countries.map((country, index) => (
					<Country country={country} key={index} />
				))}
			</div>
		</>
	);
};

export default FetchCountries;

import React from 'react';
import './styles.css';

const Banner = (props) => {
	return (
		<div className="banner">
			<p>{props.info}</p>
		</div>
	)
}

export default Banner;
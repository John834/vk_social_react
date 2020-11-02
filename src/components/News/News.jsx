import React from 'react';
import ne from './News.module.css';
import DiaContainer from './../Message/Dia/DiaContainer';

const News = (props) => {
	
	return (
		<div className={ne.news}>
			<DiaContainer />
		</div>
	)
} 

export default News
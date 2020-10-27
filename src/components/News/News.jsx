import React from 'react';
import ne from './News.module.css';
import Dia from './../Message/Dia/Dia.jsx';

const News = (props) => {
	return (
		<div className={ne.news}>
			<Dia postmessage={props.postmessage} dispatch={props.dispatch} />
		</div>
	)
} 

export default News
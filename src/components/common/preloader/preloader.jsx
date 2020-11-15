import React from 'react';
import loader from './preloader.module.css'
import preloader from './../../../assets/image/loader-eclipse.svg';


const Preloader = () => {
	return (
		<div className={loader.preloader}>
			<img src={preloader} />
		</div>
	)
}

export default Preloader;
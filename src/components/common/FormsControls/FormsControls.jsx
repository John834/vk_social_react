import React from 'react';
import styles from './FormControls.module.css';

const FormControl = ({ input, meta, child, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div>
			<div className={styles.formComtrols + '' + (hasError ? '' : styles.error )}>
				{props.children}
			</div>
				{hasError && <span className={styles.error}>{meta.error}</span>}
		</div>
	)
}

export const Input = (props) => {
	const {input, meta, child, ...restProps} = props
	return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
import React from 'react'
import styles from './DialogForm.module.css';

export const Textarea = ({ input, meta, ...props}) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={styles.wrapper}>
			<div className={styles.formTextarea + '' + (hasError ? '' : styles.error)}>
				<textarea {...input} {...props} />
			</div>
				{hasError && <i className={styles.text}>{meta.error}</i>}
		</div>

	)
}





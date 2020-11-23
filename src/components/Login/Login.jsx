import React from 'react';
import lo from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls.jsx';
import { required } from '../utils/validators/validators.js';

const LoginForm = (props) => {
	const {handleSubmit } = props
	return (
		<form onSubmit={handleSubmit} >
			<div>
				<label>First Name</label>
				<div>
					<Field
						name="firstName"
						component={Input}
						type="text"
						placeholder="First Name"
						validate={required}
					/>
				</div>
			</div>
			<div>
				<label>Last Name</label>
				<div>
					<Field
						name="lastName"
						component={Input}
						type="text"
						placeholder="Last Name"
						validate={required}
					/>
				</div>
			</div>
			<div>
				<label>
					<Field name="sex" component={Input} type="radio" value="male" validate={required} />{' '}
					Male
				</label>
				<label>
					<Field name="sex" component={Input} type="radio" value="female" validate={required} />{' '}
					Female
				</label>
				<label>
					<Field name="sex" component={Input} type="radio" value="other" validate={required} />{' '}
					Other
				</label>
			</div>
			<div>
				<Field placeholder={"login"} name={"login"} component={Input} validate={required} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} component={Input}  validate={required}/>
			</div>
			<div>
				<Field type={"checkbox"} name={"rememberme"} component={Input}  validate={required} /> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}


const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)



const Login = (props) => {

	const onSubmit = (formData) => {
		console.log(formData)
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

export default Login;
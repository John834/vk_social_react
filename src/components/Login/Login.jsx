import React from 'react';
import lo from './Login.module.css';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
	const {handleSubmit } = props
	return (
		<form onSubmit={handleSubmit} >
			<div>
				<label>First Name</label>
				<div>
					<Field
						name="firstName"
						component="input"
						type="text"
						placeholder="First Name"
					/>
				</div>
			</div>
			<div>
				<label>Last Name</label>
				<div>
					<Field
						name="lastName"
						component="input"
						type="text"
						placeholder="Last Name"
					/>
				</div>
			</div>
			<div>
				<label>
					<Field name="sex" component="input" type="radio" value="male" />{' '}
					Male
				</label>
				<label>
					<Field name="sex" component="input" type="radio" value="female" />{' '}
					Female
				</label>
				<label>
					<Field name="sex" component="input" type="radio" value="other" />{' '}
					Other
				</label>
			</div>
			<div>
				<Field placeholder={"login"} name={"login"} component={"input"} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} component={"input"} />
			</div>
			<div>
				<Field type={"checkbox"} name={"rememberme"} component={"input"} /> remember me
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
	debugger
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

export default Login;
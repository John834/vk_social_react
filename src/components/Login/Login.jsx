import React from 'react';
import lo from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls.jsx';
import { required } from '../utils/validators/validators.js';
import { connect } from 'react-redux'
import { Loginn} from '../../Redux/auth-reducer.js';
import { Redirect } from 'react-router-dom'

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
					/>
				</div>
			</div>
			<div>
				<label>
					<Field name="sex" component={Input} type="radio" value="male"  />{' '}
					Male
				</label>
				<label>
					<Field name="sex" component={Input} type="radio" value="female"  />{' '}
					Female
				</label>
				<label>
					<Field name="sex" component={Input} type="radio" value="other"  />{' '}
					Other
				</label>
			</div>
			<div>
				<Field placeholder={"email"} name={"email"} component={Input} validate={required} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} component={Input}  validate={required}/>
			</div>
			<div className={lo.defense}>{!props.error ? '' : props.error}</div>
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
		props.Loginn(formData.email, formData.password, formData.rememberMe)
	}

	if(props.isAuth) {
		return <Redirect to={"/Profile"} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}


const mapStateToProps = state => ({
	isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {Loginn})(Login);

// login 
// является thunk creator 
// export default connect(null, {Loginn})(Login);
// props.Loginn вызывается другая функия коллбэк 
// которая внутри себя dispatch вызов этого
// export default connect(null, {Loginn})(Login);
// функция принимает те параметры 
// потом dispatch в thunkcreator
// передаются те же параметры 
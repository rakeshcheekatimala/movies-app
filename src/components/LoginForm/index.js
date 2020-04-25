import React from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import {
	Formik, Form
} from 'formik';
import * as Yup from 'yup';
import './styles.css';

const LoginSchema = Yup.object().shape({
	username: Yup.string()
		.email()
		.required('Username is Required'),
	password: Yup.string()
		.required('Password is Required')
})

const initialValues = {
	username: '',
	password: ''
}

const LoginForm = () => {
	return (

		<Formik
			initialValues={initialValues} validationSchema={LoginSchema}>
			{(props) => {
				const {
					values,
					touched,
					errors,
					handleChange,
					handleBlur,
				} = props;
				return (
					<Form>
						<FormControl >
							<InputLabel htmlFor="username">Username *</InputLabel>
							<Input type="text" name="username" id="username"
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<FormHelperText className='helperText'>{(errors.username && touched.username) && errors.username}</FormHelperText>
						</FormControl>
						<br /><br />
						<FormControl >
							<InputLabel htmlFor="password">Password *</InputLabel>
							<Input type="password" name="password" id="password" value={values.password}
								onChange={handleChange}
								onBlur={handleBlur} />
							<FormHelperText className='helperText'>{(errors.password && touched.password) && errors.password}</FormHelperText>
						</FormControl>
						<br /><br />
						<Button variant="contained" color="secondary" type="submit">Submit</Button>
					</Form>
				)
			}}
		</Formik>

	)
}

export default LoginForm;
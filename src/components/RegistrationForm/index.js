import React from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import {
	Formik, Form
} from 'formik';
import * as Yup from 'yup';
import './styles.css';

const RegisterSchema = Yup.object().shape({
	firstName: Yup.string().required('FirstName is Required'),
	lastName: Yup.string().required('LastName is Required'),
	email: Yup.string()
		.email()
		.required('Username is Required'),
	password: Yup.string()
		.required('Password is Required'),
	contact: Yup.string()
		.required('Contact is Required')
})

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	contact: ''
}

const RegistrationForm = () => {
	return (

		<Formik
			initialValues={initialValues} validationSchema={RegisterSchema}>
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
							<InputLabel htmlFor="firstName">FirstName *</InputLabel>
							<Input type="text" name="firstName" id="firstName"
								value={values.firstName}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<FormHelperText className='helperText'>{(errors.firstName && touched.firstName) && errors.firstName}</FormHelperText>
						</FormControl>
						<br /><br />
						<FormControl >
							<InputLabel htmlFor="lastName">LastName *</InputLabel>
							<Input type="text" name="lastName" id="lastName"
								value={values.lastName}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<FormHelperText className='helperText'>{(errors.lastName && touched.lastName) && errors.lastName}</FormHelperText>
						</FormControl>
						<br /><br />
						<FormControl >
							<InputLabel htmlFor="email">Email *</InputLabel>
							<Input type="text" name="email" id="email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<FormHelperText className='helperText'>{(errors.email && touched.email) && errors.email}</FormHelperText>
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
						<FormControl >
							<InputLabel htmlFor="contact">Contact No *</InputLabel>
							<Input type="text" name="contact" id="contact" value={values.contact}
								onChange={handleChange}
								onBlur={handleBlur} />
							<FormHelperText className='helperText'>{(errors.contact && touched.contact) && errors.contact}</FormHelperText>
						</FormControl>
						<br /><br />
						<Button variant="contained" color="secondary" type="submit">Submit</Button>
					</Form>
				)
			}}
		</Formik>

	)
}

export default RegistrationForm;
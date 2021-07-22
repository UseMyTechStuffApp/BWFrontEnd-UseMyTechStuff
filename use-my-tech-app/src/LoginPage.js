import React, { useState, useEffect } from 'react'
import * as yup from 'yup'


function LoginPage() {
	//holds state for whole form
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
		terms: ''
	})

	//disables button until form is complete
	const [buttonDisabled, setButtonDisabled] = useState(true)


	//form schema
	const formSchema = yup.object().shape({
		name: yup.string().required('Please fill out this field'),
		email: yup.string().email('must be a valid email').required(),
		password: yup.string().required(),
		confirm: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
		terms: yup.boolean().oneOf([true], "Please agree to the terms").required()
	})

	//useEffect to hold schema and validate form
	

	//this function handles the input changes
	const onChangeHandle = (e) => {
		e.persist()
		const newFormData = {
			...formState,
			[e.target.name]:
				e.target.type === "checkbox" ? e.target.checked : e.target.value
		};
		setFormState(newFormData)
	}

	const formSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div>
			<form onSubmit={formSubmit}>
				<label htmlFor="name"> Name:
					<input
						type="text"
						name="name"
						value={formState.name}
						onChange={onChangeHandle}
						
					>
						</input>
				</label>
				<label htmlFor="email"> Email:
					<input
						type="email"
						name="email"
						value={formState.email}
						onChange={onChangeHandle}
						
					>
						
						</input>
				</label>
				<label htmlFor="password"> Password:
					<input
						type="password"
						name="password"
						value={formState.password}
						onChange={onChangeHandle}
					>
						
						</input>
				</label>
				<label htmlFor="confirm"> ConfirmPassword:
					<input
						type="password"
						name="confirm"
						value={formState.confirm}
						onChange={onChangeHandle}
					>
						
						</input>
				</label>
				<label htmlFor="terms"> Terms & Service:
					<input
						type="checkbox"
						name="name"
						checked={formState.terms}
						onChange={onChangeHandle}
					>
						
						</input>
				</label>
				<button type="submit" disabled={buttonDisabled}>Enroll</button>
			</form>
		</div>
	)
}

export default LoginPage